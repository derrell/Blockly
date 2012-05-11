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
 * A composite container's code generator.  The container may use either a
 * horizontal or vertical layout.
 */
Blockly.Language.qxmobileui_container_composite = {
  // A composite container
  category: "Container",
  init: function() {
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("purple");
    this.addTitle("Container");

    this.addTitle(new Blockly.FieldDropdown(
                    'temp',
                    Blockly.Variables.dropdownCreate,
                    Blockly.Variables.dropdownChange));

    this.addTitle("  layout:");
    this.addTitle(new Blockly.FieldDropdown(
                    "horizontal",
                    function() {
                      return [ "horizontal", "vertical" ];
                    }));

    this.addTitle("  spacing:");
    this.addTitle(new Blockly.FieldTextInput('0', function(text) {
      var n = window.parseFloat(text || 0);
      return window.isNaN(n) ? null : String(n);
    }));

    this.addInput("", "", Blockly.NEXT_STATEMENT);
  }
};

/**
 * An atom widget. An item can easily align the common icon/text combination
 * in different ways.
 */
Blockly.Language.qxmobileui_atom = {
  category: "Widget",
  init: function() {
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("green");
    this.addTitle("Atom");

    this.addTitle(new Blockly.FieldDropdown(
                    'temp',
                    Blockly.Variables.dropdownCreate,
                    Blockly.Variables.dropdownChange));

    // Add the text input
    this.addInput("  label:", "", Blockly.INPUT_VALUE);
    
    // Add the icon (url) input
    this.addInput("  icon:", "", Blockly.INPUT_VALUE);
  }
};

/**
 * An image widget.
 */
Blockly.Language.qxmobileui_image = {
  category: "Widget",
  init: function() {
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("green");
    this.addTitle("Image");

    this.addTitle(new Blockly.FieldDropdown(
                    'temp',
                    Blockly.Variables.dropdownCreate,
                    Blockly.Variables.dropdownChange));

    // Add the icon (url) input
    this.addInput("  icon:", "", Blockly.INPUT_VALUE);
  }
};

/**
 * A label widget.
 */
Blockly.Language.qxmobileui_label = {
  category: "Widget",
  init: function() {
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("green");
    this.addTitle("Label");

    this.addTitle(new Blockly.FieldDropdown(
                    'temp',
                    Blockly.Variables.dropdownCreate,
                    Blockly.Variables.dropdownChange));

    // Add the text input
    this.addInput("  label:", "", Blockly.INPUT_VALUE);
  }
};

/**
 * A button widget.
 */
Blockly.Language.qxmobileui_button = {
  category: "Widget",
  init: function() {
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("green");
    this.addTitle("Button");

    this.addTitle(new Blockly.FieldDropdown(
                    'temp',
                    Blockly.Variables.dropdownCreate,
                    Blockly.Variables.dropdownChange));

    // Add the button's label
    this.addInput("  label:", "", Blockly.INPUT_VALUE);
  }
};

/**
 * A checkbox widget.
 */
Blockly.Language.qxmobileui_checkbox = {
  category: "Widget",
  init: function() {
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("green");
    this.addTitle("Checkbox");

    this.addTitle(new Blockly.FieldDropdown(
                    'temp',
                    Blockly.Variables.dropdownCreate,
                    Blockly.Variables.dropdownChange));
  }
};

/**
 * A number input field widget.
 */
Blockly.Language.qxmobileui_numberInput = {
  category: "Widget",
  init: function() {
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("green");
    this.addTitle("Number Input Field");

    this.addTitle(new Blockly.FieldDropdown(
                    'temp',
                    Blockly.Variables.dropdownCreate,
                    Blockly.Variables.dropdownChange));

    // Add the initial value
    this.addInput("  initial value:", "", Blockly.INPUT_VALUE);
  }
};

/**
 * A password input field widget.
 */
Blockly.Language.qxmobileui_passwordInput = {
  category: "Widget",
  init: function() {
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("green");
    this.addTitle("Password Input Field");

    this.addTitle(new Blockly.FieldDropdown(
                    'temp',
                    Blockly.Variables.dropdownCreate,
                    Blockly.Variables.dropdownChange));

    // Add the initial value
    this.addInput("  initial value:", "", Blockly.INPUT_VALUE);
  }
};

/**
 * A radio button widget.
 */
Blockly.Language.qxmobileui_radioButton = {
  category: "Widget",
  init: function() {
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("green");
    this.addTitle("Radio Button");

    this.addTitle(new Blockly.FieldDropdown(
                    'temp',
                    Blockly.Variables.dropdownCreate,
                    Blockly.Variables.dropdownChange));
  }
};

/**
 * A select box widget.
 */
Blockly.Language.qxmobileui_selectBox = {
  category: "Widget",
  init: function() {
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("green");
    this.addTitle("Select Box");

    this.addTitle(new Blockly.FieldDropdown(
                    'temp',
                    Blockly.Variables.dropdownCreate,
                    Blockly.Variables.dropdownChange));
  }
};

/**
 * A slider widget.
 */
Blockly.Language.qxmobileui_slider = {
  category: "Widget",
  init: function() {
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("green");
    this.addTitle("Slider");

    this.addTitle(new Blockly.FieldDropdown(
                    'temp',
                    Blockly.Variables.dropdownCreate,
                    Blockly.Variables.dropdownChange));

    // Add the initial value
    this.addInput("  initial value:", "", Blockly.INPUT_VALUE);

    // Add the minimum value
    this.addInput("  minimum:", "", Blockly.INPUT_VALUE);

    // Add the maximum value
    this.addInput("  maximum:", "", Blockly.INPUT_VALUE);

    // Add the single-step value
    this.addInput("  single step:", "", Blockly.INPUT_VALUE);
  }
};

/**
 * A text area widget.
 */
Blockly.Language.qxmobileui_textArea = {
  category: "Widget",
  init: function() {
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("green");
    this.addTitle("Text Area");

    this.addTitle(new Blockly.FieldDropdown(
                    'temp',
                    Blockly.Variables.dropdownCreate,
                    Blockly.Variables.dropdownChange));

    // Add the initial value
    this.addInput("  initial value:", "", Blockly.INPUT_VALUE);
  }
};

/**
 * A text input field widget.
 */
Blockly.Language.qxmobileui_textInput = {
  category: "Widget",
  init: function() {
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("green");
    this.addTitle("Text Input Field");

    this.addTitle(new Blockly.FieldDropdown(
                    'temp',
                    Blockly.Variables.dropdownCreate,
                    Blockly.Variables.dropdownChange));

    // Add the initial value
    this.addInput("  initial value:", "", Blockly.INPUT_VALUE);
  }
};

/**
 * A toggle button widget.
 */
Blockly.Language.qxmobileui_toggleButton = {
  category: "Widget",
  init: function() {
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("green");
    this.addTitle("Toggle Button");

    this.addTitle(new Blockly.FieldDropdown(
                    'temp',
                    Blockly.Variables.dropdownCreate,
                    Blockly.Variables.dropdownChange));

    this.addTitle("  initial value:");
    this.addTitle(new Blockly.FieldDropdown(
                    "off",
                    function() {
                      return [ "off", "on" ];
                    }));
  }
};

/**
 * A list widget.
 */
Blockly.Language.qxmobileui_list = {
  category: "Widget",
  init: function() {
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("green");
    this.addTitle("List");

    this.addTitle(new Blockly.FieldDropdown(
                    'temp',
                    Blockly.Variables.dropdownCreate,
                    Blockly.Variables.dropdownChange));
  }
};

