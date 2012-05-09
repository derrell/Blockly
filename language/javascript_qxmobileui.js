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

Blockly.JavaScript.qxui_container_composite = function() {
  // A composite container
  var code = [];
  var statements = [];
  code.push("(function() {",
            "var o = new qx.ui.mobile.container.Composite(" +
            "new qx.ui.layout." +
            (this.getTitleText(2) == "horizontal" ? "HBox()" : "VBox()") +
            ");");

  var generator = Blockly.Generator.get('JavaScript');

  var i;
  var block;
  
  for (block = this.getStatementInput(0), i = 0;
       block; 
       block = block.nextConnection && block.nextConnection.targetBlock(), ++i)
  {
    var blockCode = generator.blockToCode(block, true, true);
    if (blockCode.trim().length) {
      code.push("o.add(", blockCode, ");");
    }
  }

  code.push("return o;",
            "})()");

  console.log("Returning: " + code.join("\n"));
  return code.join("\n");
};
