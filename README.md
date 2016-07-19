# seaJSDemo

## how to import jQuery
> add the code below to the end of the jQuery.js file

    if ( typeof module === "object" && module && typeof module.exports === "object" ) {
          module.exports = jQuery;
      } else {
          window.jQuery = window.$ = jQuery;
      
          if ( typeof define === "function" && define.amd ) {
              define( "jquery", [], function () { return jQuery; } );
          }
      }
