/*
 * Copyright:
 *   2012 Derrell Lipman
 *   
 * License:
 *   LGPL: http://www.gnu.org/licenses/lgpl.html
 *   EPL: http://www.eclipse.org/org/documents/epl-v10.php
 *   See the LICENSE file in the project's top-level directory for details.
 *
 * Authors:
 *   * Derrell Lipman (derrell)
 */

/**
 * This is the main class for the "qxblockly" library
 */
qx.Class.define("qxblockly.Blockly",
{
  extend : qx.ui.container.Composite,

  /**
   * Create the Blockly widget
   */
  construct : function() 
  {
    // We will have two parts: a toolbox and the block editor, arranged
    // horizontally.
    this.base(arguments, new qx.ui.layout.HBox());
    
    // Create a border
//    this.setAppearance("table");
    
    var vBox = new qx.ui.container.Composite(new qx.ui.layout.VBox());
    vBox.set(
      {
        width : 140
      });
    this.add(vBox);

    // Only one panel should be open at a time.
    var group = new qx.ui.form.RadioGroup();

    var o;
    var x;
    o = new qxblockly.CollapsablePanel("Hello world");
o.debug("outer");
    o.set(
      {
        group         : group,
        showSeparator : false,
        layout        : new qx.ui.layout.VBox()
      });
    x = new qxblockly.CollapsablePanel("Colors");
x.debug("inner");
    x.set(
      {
        showSeparator : false,
        layout        : new qx.ui.layout.VBox()
      });
    x.add(new qx.ui.basic.Label("Red"));
    x.add(new qx.ui.basic.Label("Green"));
    x.add(new qx.ui.basic.Label("Blue"));
    o.add(x);
    vBox.add(o);

    o = new qxblockly.CollapsablePanel("Hi there");
    o.set(
      {
        group         : group,
        showSeparator : false
      });
    vBox.add(o);

    o = new qxblockly.CollapsablePanel("See ya!");
    o.set(
      {
        group         : group,
        showSeparator : false
      });
    vBox.add(o);
    
    this.editor = new qx.ui.core.Widget();
    this.editor.set(
      {
        width  : 600,
        height : 600,
        appearance : "table"
      });
    this.add(this.editor);
  }
});
