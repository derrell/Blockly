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

Blockly.Language.qxui_container_composite = {
  // A composite container
  category: "Container",
  helpUrl: "http://en.wikipedia.org/wiki/String_(computer_science)",
  init: function() {
    this.setColour("purple");
    this.addTitle("Container");
    this.addTitle("Layout:");
    var dropdown = new Blockly.FieldDropdown(
      "horizontal",
      function() {
        return [ "horizontal", "vertical" ];
      });
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.addTitle(dropdown);
    this.addInput("", "", Blockly.NEXT_STATEMENT);
  }
};
