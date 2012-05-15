/*
 * Copyright:
 *   2009 ACME Corporation -or- Your Name, http://www.example.com
 *
 * License:
 *   LGPL: http://www.gnu.org/licenses/lgpl.html
 *   EPL: http://www.eclipse.org/org/documents/epl-v10.php
 *   See the LICENSE file in the project's top-level directory for details.
 *
 * Authors:
 *   * Christian Boulanger (cboulanger)
 *   * Matthew Gregory (noggin182)
 */

/**
 *
 * A collapsable panel with a caption
 *
 * This is the main class of the contribution <i>collapsablePanel</i><br/>
 * It is a container that can be shown/hidden by clicking on the it's
 * header or by setting the {@link collapsablepanel.Panel#value} property.
 *
 * The widget API (get/setLayout, add get/setContentPadding etc..) works
 * directly on the collapsable part itself so you can treat this as a
 * standard container
 *
 * *Example*
 *
 * Here is a little example of how to use this panel.
 *
 * <pre class='javascript'>
 *   // create the panel
 *   var panel = new collapsablepanel.Panel("MyPanel");
 *
 *   // configure it with a horizontal box layout with a spacing of '5'
 *   panel.setLayout(new qx.ui.layout.HBox(5));
 *
 *   // add some children
 *   panel.add(new qx.ui.basic.Label("Name: "));
 *   panel.add(new qx.ui.form.TextField());
 *
 *   this.getRoot().add(panel);
 * </pre>
 *
 * <a href='http://qooxdoo.org/contrib/project/collapsablepanel' target='_blank'>
 * Documentation of this widget in the qooxdoo wiki.</a>
 *
 * @state opened Whether the panel is currently open
 */
qx.Class.define("qxblockly.CollapsablePanel",
{
  extend : qx.ui.core.Widget,
  include :
  [
    qx.ui.core.MRemoteChildrenHandling,
    qx.ui.core.MRemoteLayoutHandling,
    qx.ui.core.MContentPadding
  ],
  implement : [
    qx.ui.form.IRadioItem
  ],

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * Create a new collapsable panel
   *
   * @param label {String} The caption for container
   * @param layout {qx.ui.layout.Abstract?qx.ui.layout.Grow} A layout instance to use to
   *   place widgets within the panel
   */
  construct : function(label, layout)
  {
    this.base(arguments);

    this._setLayout(new qx.ui.layout.VBox());

    this.getChildControl("bar"); // ensure this is always created first

    this.initValue();
    this.initShowSeparator();
    this.initGap();

    if (label != null) {
      this.setCaption(label);
    }

    this.setLayout(layout || new qx.ui.layout.Grow());
  },

  /*
  *****************************************************************************
     PROPERTIES
  *****************************************************************************
  */
  properties :
  {
    appearance :
    {
      refine : true,
      init   : "collapsable-panel"
    },

    /** Boolean indicating the opened/closed state of the pane */
    value :
    {
      check : "Boolean",
      init  : true,
      apply : "_applyValue",
      event : "changeValue"
    },

    /** The text of the caption */
    caption :
    {
      check    : "String",
      nullable : true,
      apply    : "_applyCaption",
      event    : "changeCaption"
    },
    
    /** Show a separator between the heading and container */
    showSeparator :
    {
      check     : "Boolean",
      themeable : true,
      init      : true,
      apply     : "_applyShowSeparator"
    },

    /** Themeable distance between the header and container */
    gap :
    {
      check     : "Integer",
      init      : 5,
      themeable : true,
      apply     : "_applyGap"
    },

    /** The optionally assigned qx.ui.form.RadioGroup which allows the panel to used in an accordian style*/
    group :
    {
      check    : "qx.ui.form.RadioGroup",
      nullable : true,
      apply    : "_applyGroup"
    },

    /**
     * Controls how the panel should be rendered when collapsed.
     */
    orientation :
    {
      check : ["horizontal", "vertical"],
      init  : "vertical",
      apply : "_applyOrientation"
    }
  },

  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */
  members :
  {
    /*
    ---------------------------------------------------------------------------
      WIDGET API
    ---------------------------------------------------------------------------
    */

    /**
     * @lint ignoreReferenceField(_forwardStates)
     */
    // overridden
    _forwardStates :
    {
      "opened"     : true,
      "horizontal" : true
    },

    // overridden
    _createChildControlImpl : function(id)
    {
      var control;

      switch(id)
      {
      case "bar":
        control = new qx.ui.basic.Atom(this.getCaption());
        control.addListener("click",
                            function(e)
                            {
                              this.debug("click");
                              this.toggleValue();
                              e.stopPropagation();
                              e.preventDefault();
                            },
                            this);
        this._add(control, {flex : 1});
        break;

      case "container":
        control = new qx.ui.container.Composite();
        this._add(control, {flex : 1});
        break;
      }

      return control || this.base(arguments, id);
    },


    /**
     * The children container needed by the {@link qx.ui.core.MRemoteChildrenHandling}
     * mixin
     *
     * @return {qx.ui.container.Composite} The container sub widget
     */
    getChildrenContainer : function()
    {
      return this.getChildControl("container");
    },


     /**
     * Returns the element, to which the content padding should be applied.
     *
     * @return {qx.ui.core.Widget} The container sub widget
     */
    _getContentPaddingTarget : function()
    {
      return this.getChildControl("container");
    },

    // property apply
    _applyValue : function(value, old)
    {
      // It would be nice if we could theme visibility
      if (value) {
        this.addState("opened");
        this.getChildControl("container").show();
      } else {
        this.removeState("opened");
        this.getChildControl("container").exclude();
      }
    },

    // property apply
    _applyCaption : function(value)
    {
      this.getChildControl("bar").setLabel(value);
    },

    // property apply
    _applyShowSeparator : function(value)
    {
      this._getLayout().setSeparator(value ? "separator-vertical" : null);
    },

    // property apply
    _applyGap : function(value)
    {
      this._getLayout().setSpacing(value);
    },

    // property apply
    _applyOrientation : function(value)
    {
      if (value === "horizontal") {
        this.addState("horizontal");
      } else {
        this.removeState("horizontal");
      }
    },

     // property apply
    _applyGroup : function(value, old)
    {
      if (old) {
        old.remove(this);
      }
      if (value) {
        value.add(this);
      }
    },
    
    // overridden
    _computeSizeHint : function()
    {
      var hint = this.base(arguments);
      if (!this.getValue())
      {
        var child = this.getChildControl("bar").getSizeHint();
        if (this.getOrientation() === "horizontal") {
          hint.maxWidth = Math.min(hint.maxWidth, child.width + this.getPaddingLeft() + this.getPaddingRight());
        } else {
          hint.maxHeight = Math.min(hint.maxWidth, child.height + this.getPaddingTop() + this.getPaddingBottom());
        }
      }
      return hint;
    }
  }
});
