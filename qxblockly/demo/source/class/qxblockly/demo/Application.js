/*
#asset(qxblockly/demo/*)
*/

/**
 * This is the main application class of your custom application "qxblockly"
 */
qx.Class.define("qxblockly.demo.Application",
{
  extend : qx.application.Standalone,

  members :
  {
    /**
     * This method contains the initial application code and gets called 
     * during startup of the application
     * 
     * @lint ignoreDeprecated(alert)
     */
    main : function()
    {
      // Call super class
      this.base(arguments);

      // Enable logging in debug variant
      if (qx.core.Environment.get("qx.debug"))
      {
        var             appender;
        appender = qx.log.appender.Native;
        appender = qx.log.appender.Console;
      }

      // Create a blockly editor
      var editor = new qxblockly.Blockly();

      // Document is the application root
      var doc = this.getRoot();
			
      // Add editor to document at fixed coordinates
      doc.add(editor, {left: 100, top: 50});
    }
  }
});
