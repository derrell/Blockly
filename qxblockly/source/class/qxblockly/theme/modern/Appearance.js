/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Theme.define("qxblockly.theme.modern.Appearance",
{
  appearances :
  {
    /*
     * Classic theme
     */

    "collapsable-panel" :
    {
      style : function(states)
      {
        return {
          decorator  : "pane",
          padding    : 5,
          allowGrowY : !!states.opened || !!states.horizontal,
          allowGrowX : !!states.opened ||  !states.horizontal
        };
      }
    },

    "collapsable-panel/bar" :
    {
      include : "groupbox/legend",
      alias   : "groupbox/legend",
      style   : function(states)
      {
        return {
          icon       :  states.opened ? "decoration/tree/open.png" : "decoration/tree/closed.png",
          allowGrowY : !states.opened && !!states.horizontal,
          allowGrowX :  states.opened ||  !states.horizontal,
          maxWidth   : !states.opened && !!states.horizontal ? 16 : null
        };
      }
    },

    "collapsable-panel/container" :
    {
      style : function(states)
      {
        return { padding : [0, 5] };
      }
    },

    /*
     * Classic theme
     */

    "collapsable-panel-classic" :
    {
      include : "collapsable-panel",
      style   : function(states)
      {
        return {
          decorator     : "main",
          padding       : 0,
          gap           : 0,
          showSeparator : false,
          minWidth      : 32,
          margin        : -1
        };
      }
    },

    "collapsable-panel-classic/bar" :
    {
      include : "collapsable-panel/bar",
      alias   : "collapsable-panel/bar",
      style : function(states)
      {
        return {
          decorator : "menubar",
          padding   :  3,
          margin    : -1
        };
      }
    },

    "collapsable-panel-classic/container" :
    {
      style : function(states)
      {
        return {
          padding   : 5,
          marginTop : 1
        };
      }
    }
  }
});
