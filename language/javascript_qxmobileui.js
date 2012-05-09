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
            (this.getValueLabel(1) == "horizontal" ? "HBox()" : "VBox()") +
            ");");

  // This isn't what I want. I want each of the blocks in statement[0],
  // not concatenated code from all of the blocks. I need to add a prefix
  // and suffix to each one...???
  statements.push(Blockly.JavaScript.statementToCode_(this, 0));
  console.log("statements.length=" + statements.length);
  statements.forEach(
    function(statement) {
      console.log("statement=" + statement);
      if (statement.trim().length > 0) {
        code.push("o.add(", statement, ");");
      }
    });
  code.push("return o;",
            "})()");
  return code.join("\n");
};
