'use strict';

System.register(['jquery'], function (_export, _context) {
  "use strict";

  var $;
  return {
    setters: [function (_jquery) {
      $ = _jquery.default;
    }],
    execute: function () {

      $('body').html('Imports work!');

      console.log('bambam');
    }
  };
});