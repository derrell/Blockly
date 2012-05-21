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
 * @fileoverview Generating gui blocks for the qooxdoo mobile UI
 * @author derrell.lipman@unwireduniverse.com (Derrell Lipman)
 */

Blockly.JavaScript = Blockly.Generator.get('JavaScript');

/**
 * A navigation container's code generator.
 */
Blockly.JavaScript.qxmobileui_container_navigation = function() {
  // A navigation container
  var i;
  var block;
  var generator = Blockly.Generator.get('JavaScript');
  var code = [];

  // Generate the portion of this block that preceeds its children
  code.push("var page;");
  code.push("this._navigationContainer =" +
            " new qx.ui.mobile.container.Navigation();",
            "this.getRoot().add(this._navigationContainer, { flex : 1 });");

  // Show the first child
  var bShow = true;

  // Generate the children
  for (block = this.getStatementInput(0), i = 0;
       block; 
       block = block.nextConnection && block.nextConnection.targetBlock(), ++i)
  {
    var blockCode = generator.blockToCode(block, true, true);
    if (blockCode.trim().length) {
      code.push("this._navigationContainer.add(page = ");
      code.push(blockCode.trim() + ");");
      if (bShow) {
        code.push("page.show();");
        bShow = false;
      }
    }
  }

  return code.join("\n");
};

/**
 * A Navigation Page's code generator.
 */
Blockly.JavaScript.qxmobileui_container_navigationPage = function() {
  // A Navigation Page
  var             i;
  var             block;
  var             generator = Blockly.Generator.get('JavaScript');
  var             code = [];
  var             objName;

  // Determine the object name
  objName = (this.getTitleText(1).trim().length > 0
             ? "this.obj_" + this.getTitleText(1)
             : "this.obj_temp");


  // Generate the portion of this block that preceeds its children
  code.push(
    objName + " = ",
    "(qx.lang.Function.bind(function() {",
    "var o = new qx.ui.mobile.page.NavigationPage(",
    "  new qx.ui.mobile.layout." +
    (this.getTitleText(3) == "horizontal" ? "HBox()" : "VBox()") +
    ");");

  // Set the page's title
  code.push("o.setTitle(" +
            "\"Page 1\"" +
            ");");

  code.push("o.addListener(");
  code.push("\"initialize\", ");
  code.push("function()\n{");
  code.push("var container = o.getContent();");

  // Generate the children
  for (block = this.getStatementInput(0), i = 0;
       block; 
       block = block.nextConnection && block.nextConnection.targetBlock(), ++i)
  {
    var blockCode = generator.blockToCode(block, true, true);
    if (blockCode.trim().length) {
      code.push("container.add(");
      code.push(blockCode.trim());
      code.push(");");
    }
  }

  code.push("},");
  code.push("this);");
  code.push("return o;");
  
  code.push("}, this))()");

  return code.join("\n");
};

/**
 * A composite container's code generator.
 */
Blockly.JavaScript.qxmobileui_container_composite = function() {
  // A composite container
  var i;
  var block;
  var generator = Blockly.Generator.get('JavaScript');
  var code = [];

  // Generate the portion of this block that preceeds its children
  code.push(
    (this.getTitleText(1).trim().length > 0
     ? "this.obj_" + this.getTitleText(1) + " = "
     : "") +
    "(function() {",
    "var o = new qx.ui.mobile.container.Composite(\n" +
      "  new qx.ui.mobile.layout." +
      (this.getTitleText(3) == "horizontal" ? "HBox(" : "VBox(") +
      this.getTitleText(5) + ")" +
      ");");

  // Generate the children
  for (block = this.getStatementInput(0), i = 0;
       block; 
       block = block.nextConnection && block.nextConnection.targetBlock(), ++i)
  {
    var blockCode = generator.blockToCode(block, true, true);
    if (blockCode.trim().length) {
      code.push("o.add("+ blockCode.trim() + ");");
    }
  }

  // Generate the portion of this block that follows its children
  code.push("return o;",
            "})()");

  return code.join("\n");
};

/**
 * An atom widget's code generator.
 */
Blockly.JavaScript.qxmobileui_atom = function() {
  var code =
    (this.getTitleText(1).trim().length > 0
     ? "this.obj_" + this.getTitleText(1) + " = "
     : "") +
    "new qx.ui.mobile.basic.Atom(" +
    (Blockly.JavaScript.valueToCode_(this, 0, true) || 'null') +
    ", " +
    (Blockly.JavaScript.valueToCode_(this, 1, true) || 'null') +
    ")";

  return code;
};

/**
 * An image widget's code generator.
 */
Blockly.JavaScript.qxmobileui_image = function() {
  var code =
    (this.getTitleText(1).trim().length > 0
     ? "this.obj_" + this.getTitleText(1) + " = "
     : "") +
    "new qx.ui.mobile.basic.Image(" +
    (Blockly.JavaScript.valueToCode_(this, 0, true) || 'null') +
    ")";

  return code;
};

Blockly.JavaScript.qxmobileui_label = function() {
  var code =
    (this.getTitleText(1).trim().length > 0
     ? "this.obj_" + this.getTitleText(1) + " = "
     : "") +
    "new qx.ui.mobile.basic.Label(" +
    (Blockly.JavaScript.valueToCode_(this, 0, true) || 'null') +
    ")";

  return code;
};

Blockly.JavaScript.qxmobileui_button = function() {
  var code =
    (this.getTitleText(1).trim().length > 0
     ? "this.obj_" + this.getTitleText(1) + " = "
     : "") +
    "new qx.ui.mobile.form.Button(" +
    (Blockly.JavaScript.valueToCode_(this, 0, true) || 'null') +
    ")";

  return code;
};

Blockly.JavaScript.qxmobileui_checkbox = function() {
  var code =
    (this.getTitleText(1).trim().length > 0
     ? "this.obj_" + this.getTitleText(1) + " = "
     : "") +
    "new qx.ui.mobile.form.Checkbox()";

  return code;
};

Blockly.JavaScript.qxmobileui_numberInput = function() {
  var code =
    (this.getTitleText(1).trim().length > 0
     ? "this.obj_" + this.getTitleText(1) + " = "
     : "") +
    "new qx.ui.mobile.form.NumberField(" +
    (Blockly.JavaScript.valueToCode_(this, 0, true) || 'null') +
    ")";

  return code;
};

Blockly.JavaScript.qxmobileui_passwordInput = function() {
  var code =
    (this.getTitleText(1).trim().length > 0
     ? "this.obj_" + this.getTitleText(1) + " = "
     : "") +
    "new qx.ui.mobile.form.PasswordField(" +
    (Blockly.JavaScript.valueToCode_(this, 0, true) || 'null') +
    ")";

  return code;
};

Blockly.JavaScript.qxmobileui_radioButton = function() {
  var code =
    (this.getTitleText(1).trim().length > 0
     ? "this.obj_" + this.getTitleText(1) + " = "
     : "") +
    "new qx.ui.mobile.form.RadioButton()";

  return code;
};

Blockly.JavaScript.qxmobileui_selectBox = function() {
  var code =
    (this.getTitleText(1).trim().length > 0
     ? "this.obj_" + this.getTitleText(1) + " = "
     : "") +
    "new qx.ui.mobile.form.SelectBox()";

  return code;
};

Blockly.JavaScript.qxmobileui_slider = function() {
  var value = Blockly.JavaScript.valueToCode_(this, 0, true);
  var min = Blockly.JavaScript.valueToCode_(this, 1, true);
  var max = Blockly.JavaScript.valueToCode_(this, 2, true);
  var step = Blockly.JavaScript.valueToCode_(this, 3, true);
  var comma = "    ";
  var code = [];
  code.push(
    (this.getTitleText(1).trim().length > 0
     ? "this.obj_" + this.getTitleText(1) + " = "
     : "") +
    "new qx.ui.mobile.form.NumberField().set(\n" +
    "  {\n");

  if (value) {
    code.push(comma + (value ? "value : " + value + "\n"  : ""));
    comma = "   ,";
  }

  if (min) {
    code.push(comma + (min ? "minimum : " + min + "\n"  : ""));
    comma = "   ,";
  }

  if (max) {
    code.push(comma + (max ? "maximum : " + max + "\n"  : ""));
    comma = "   ,";
  }

  code.push("  })");

  return code.join("");
};

Blockly.JavaScript.qxmobileui_textArea = function() {
  var code =
    (this.getTitleText(1).trim().length > 0
     ? "this.obj_" + this.getTitleText(1) + " = "
     : "") +
    "new qx.ui.mobile.form.TextArea(" +
    (Blockly.JavaScript.valueToCode_(this, 0, true) || 'null') +
    ")";

  return code;
};

Blockly.JavaScript.qxmobileui_textInput = function() {
  var code =
    (this.getTitleText(1).trim().length > 0
     ? "this.obj_" + this.getTitleText(1) + " = "
     : "") +
    "new qx.ui.mobile.form.TextField(" +
    (Blockly.JavaScript.valueToCode_(this, 0, true) || 'null') +
    ")";

  return code;
};

Blockly.JavaScript.qxmobileui_toggleButton = function() {
  var code =
    (this.getTitleText(1).trim().length > 0
     ? "this.obj_" + this.getTitleText(1) + " = "
     : "") +
    "new qx.ui.mobile.form.ToggleButton(" +
    (Blockly.JavaScript.valueToCode_(this, 0, true) || 'false') +
    ")";

  return code;
};

/**
 * List widget code generator
 */
Blockly.JavaScript.qxmobileui_list = function() {
  var code =
    (this.getTitleText(1).trim().length > 0
     ? "this.obj_" + this.getTitleText(1) + " = "
     : "") +
    "new qx.ui.mobile.list.List()";

  return code;
};

