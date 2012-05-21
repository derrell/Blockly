/**
 * Blocks for designing a graphical user interface for Qooxdoo Mobile
 *
 * Copyright 2012 Derrell Lipman
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Gui blocks for the qooxdoo mobile UI
 * @author derrell.lipman@unwireduniverse.com (Derrell Lipman)
 */
if (!Blockly.Language) {
  Blockly.Language = {};
}

/**
 * A navigation container. It automatically consumes the entire screen.
 */
Blockly.Language.qxmobileui_container_navigation = {
  // A composite container
  category: "Container",
  semantics: { type : "container" },
  init: function() {
    this.setColour(280);
    this.addTitle("Application Container");
    this.addInput("", "", Blockly.NEXT_STATEMENT, 
                  null, { type : [ "page" ] });
  }
};

/**
 * A Navigation Page (containing a Navigation Bar and a Scroll container.  The
 * container may use either a horizontal or vertical layout.
 */
Blockly.Language.qxmobileui_container_navigationPage = {
  // A Navigation Page
  category: "Container",
  semantics: { type : "page" },
  init: function() {
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(280);
    this.addTitle("Navigation Page");

    this.addTitle(new Blockly.FieldDropdown(
                    Blockly.Variables.dropdownCreate,
                    Blockly.Variables.dropdownChange))
      .setText('temp');

    this.addTitle("  layout:");
    this.addTitle(new Blockly.FieldDropdown(
                    function() {
                      return [ "vertical", "horizontal" ];
                    }));

    this.addInput("", "", Blockly.NEXT_STATEMENT, 
                  null, { type : [ "container", "widget" ] });
  }
};

/**
 * A composite container.  The container may use either a horizontal or
 * vertical layout.
 */
Blockly.Language.qxmobileui_container_composite = {
  // A composite container
  category: "Container",
  semantics: { type : "container" },
  init: function() {
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(280);
    this.addTitle("Container");

    this.addTitle(new Blockly.FieldDropdown(
                    Blockly.Variables.dropdownCreate,
                    Blockly.Variables.dropdownChange))
      .setText('temp');

    this.addTitle("  layout:");
    this.addTitle(new Blockly.FieldDropdown(
                    function() {
                      return [ "vertical", "horizontal" ];
                    }));

    this.addTitle("  spacing:");
    this.addTitle(new Blockly.FieldTextInput('0', function(text) {
      var n = window.parseFloat(text || 0);
      return window.isNaN(n) ? null : String(n);
    }));

    this.addInput("", "", Blockly.NEXT_STATEMENT, 
                  null, { type : [ "container", "widget" ] });
  }
};

/**
 * An atom widget. An item can easily align the common icon/text combination
 * in different ways.
 */
Blockly.Language.qxmobileui_atom = {
  category: "Widget\0Basic",
  semantics: { type : "widget" },
  init: function() {
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120);
    this.addTitle("Atom");

    this.addTitle(new Blockly.FieldDropdown(
                    Blockly.Variables.dropdownCreate,
                    Blockly.Variables.dropdownChange))
      .setText('temp');

    // Add the text input
    this.addInput("  text:", "", Blockly.INPUT_VALUE, 
                  null, { type : "string" });
    
    // Add the icon (url) input
    this.addInput("  icon:", "", Blockly.INPUT_VALUE, 
                  null, { type : "string" });
  }
};

/**
 * An image widget.
 */
Blockly.Language.qxmobileui_image = {
  category: "Widget\0Basic",
  semantics: { type : "widget" },
  init: function() {
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120);
    this.addTitle("Image");

    this.addTitle(new Blockly.FieldDropdown(
                    Blockly.Variables.dropdownCreate,
                    Blockly.Variables.dropdownChange))
      .setText('temp');

    // Add the icon (url) input
    this.addInput("  icon:", "", Blockly.INPUT_VALUE, 
                  null, { type : "string" });
  }
};

/**
 * A label widget.
 */
Blockly.Language.qxmobileui_label = {
  category: "Widget\0Basic",
  semantics: { type : "widget" },
  init: function() {
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120);
    this.addTitle("Label");

    this.addTitle(new Blockly.FieldDropdown(
                    Blockly.Variables.dropdownCreate,
                    Blockly.Variables.dropdownChange))
      .setText('temp');

    // Add the text input
    this.addInput("  text:", "", Blockly.INPUT_VALUE, 
                  null, { type : "string" });
  }
};

/**
 * A button widget.
 */
Blockly.Language.qxmobileui_button = {
  category: "Widget\0Form",
  semantics: { type : "widget" },
  init: function() {
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120);
    this.addTitle("Button");

    this.addTitle(new Blockly.FieldDropdown(
                    Blockly.Variables.dropdownCreate,
                    Blockly.Variables.dropdownChange))
      .setText('temp');

    // Add the button's label
    this.addInput("  text:", "", Blockly.INPUT_VALUE, 
                  null, { type : "string" });
  }
};

/**
 * A checkbox widget.
 */
Blockly.Language.qxmobileui_checkbox = {
  category: "Widget\0Form",
  semantics: { type : "widget" },
  init: function() {
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120);
    this.addTitle("Checkbox");

    this.addTitle(new Blockly.FieldDropdown(
                    Blockly.Variables.dropdownCreate,
                    Blockly.Variables.dropdownChange))
      .setText('temp');
  }
};

/**
 * A number input field widget.
 */
Blockly.Language.qxmobileui_numberInput = {
  category: "Widget\0Form",
  semantics: { type : "widget" },
  init: function() {
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120);
    this.addTitle("Number Input Field");

    this.addTitle(new Blockly.FieldDropdown(
                    Blockly.Variables.dropdownCreate,
                    Blockly.Variables.dropdownChange))
      .setText('temp');

    // Add the initial value
    this.addInput("  initial value:", "", Blockly.INPUT_VALUE, 
                  null, { type : "integer" });
  }
};

/**
 * A password input field widget.
 */
Blockly.Language.qxmobileui_passwordInput = {
  category: "Widget\0Form",
  semantics: { type : "widget" },
  init: function() {
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120);
    this.addTitle("Password Input Field");

    this.addTitle(new Blockly.FieldDropdown(
                    Blockly.Variables.dropdownCreate,
                    Blockly.Variables.dropdownChange))
      .setText('temp');

    // Add the initial value
    this.addInput("  initial value:", "", Blockly.INPUT_VALUE, 
                  null, { type : "string" });
  }
};

/**
 * A radio button widget.
 */
Blockly.Language.qxmobileui_radioButton = {
  category: "Widget\0Form",
  semantics: { type : "widget" },
  init: function() {
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120);
    this.addTitle("Radio Button");

    this.addTitle(new Blockly.FieldDropdown(
                    Blockly.Variables.dropdownCreate,
                    Blockly.Variables.dropdownChange))
      .setText('temp');
  }
};

/**
 * A select box widget.
 */
Blockly.Language.qxmobileui_selectBox = {
  category: "Widget\0Form",
  semantics: { type : "widget" },
  init: function() {
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120);
    this.addTitle("Select Box");

    this.addTitle(new Blockly.FieldDropdown(
                    Blockly.Variables.dropdownCreate,
                    Blockly.Variables.dropdownChange))
      .setText('temp');
  }
};

/**
 * A slider widget.
 */
Blockly.Language.qxmobileui_slider = {
  category: "Widget\0Basic",
  semantics: { type : "widget" },
  init: function() {
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120);
    this.addTitle("Slider");

    this.addTitle(new Blockly.FieldDropdown(
                    Blockly.Variables.dropdownCreate,
                    Blockly.Variables.dropdownChange))
      .setText('temp');

    // Add the initial value
    this.addInput("  initial value:", "", Blockly.INPUT_VALUE, 
                  null, { type : "integer" });

    // Add the minimum value
    this.addInput("  minimum:", "", Blockly.INPUT_VALUE, 
                  null, { type : "integer" });

    // Add the maximum value
    this.addInput("  maximum:", "", Blockly.INPUT_VALUE, 
                  null, { type : "integer" });
  }
};

/**
 * A text area widget.
 */
Blockly.Language.qxmobileui_textArea = {
  category: "Widget\0Form",
  semantics: { type : "widget" },
  init: function() {
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120);
    this.addTitle("Text Area");

    this.addTitle(new Blockly.FieldDropdown(
                    Blockly.Variables.dropdownCreate,
                    Blockly.Variables.dropdownChange))
      .setText('temp');

    // Add the initial value
    this.addInput("  initial value:", "", Blockly.INPUT_VALUE, 
                  null, { type : "string" });
  }
};

/**
 * A text input field widget.
 */
Blockly.Language.qxmobileui_textInput = {
  category: "Widget\0Form",
  semantics: { type : "widget" },
  init: function() {
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120);
    this.addTitle("Text Input Field");

    this.addTitle(new Blockly.FieldDropdown(
                    Blockly.Variables.dropdownCreate,
                    Blockly.Variables.dropdownChange))
      .setText('temp');

    // Add the initial value
    this.addInput("  initial value:", "", Blockly.INPUT_VALUE, 
                  null, { type : "string" });
  }
};

/**
 * A toggle button widget.
 */
Blockly.Language.qxmobileui_toggleButton = {
  category: "Widget\0Form",
  semantics: { type : "widget" },
  init: function() {
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120);
    this.addTitle("Toggle Button");

    this.addTitle(new Blockly.FieldDropdown(
                    Blockly.Variables.dropdownCreate,
                    Blockly.Variables.dropdownChange))
      .setText('temp');

    this.addTitle("  initial value:");
    this.addTitle(new Blockly.FieldDropdown(
                    function() {
                      return [ "off", "on" ];
                    }));
  }
};

/**
 * A list widget.
 */
Blockly.Language.qxmobileui_list = {
  category: "Widget\0Form",
  semantics: { type : "widget" },
  init: function() {
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120);
    this.addTitle("List");

    this.addTitle(new Blockly.FieldDropdown(
                    Blockly.Variables.dropdownCreate,
                    Blockly.Variables.dropdownChange))
      .setText('temp');
  }
};

