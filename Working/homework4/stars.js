/* jshint browser: true, jquery: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, nonew: true, quotmark: double, undef: true, unused: true, strict: true, trailing: true */
/* global _: false, console: true */

var main = function () {
  "use strict";

  var jsonPath = "http://localhost:3000";

  var starJSON = function(actorID, actorState) {
      // First get name otherwise it will be deleted. Bug???
      var actorName = null;
      $.getJSON(jsonPath + "/actors/" + actorID, function(data) {
          console.log("name: " + data.name);
          actorName = data.name;
          // POST request via REST API
          $.ajax({
              type: "POST",
              dataType: "json",
              url: jsonPath + "/actors/" + actorID,
              headers: {"X-HTTP-Method-Override": "PUT"},
              data: {name: actorName, starred: actorState}
          });
      });
  };


  $(function(){
    // Edit JSON DB
    _.each([1,2,3,4], function (n) {
          $("#star" + n).click(function(){
            console.log("Toggle star" + n);
            if ($("#star" + n).hasClass("clicked")) {
              starJSON(n, "false");
            }
            else {
              starJSON(n, "true");
            }
            $("#star" + n).toggleClass("clicked");
          });
    });


    // Retrieve state from JSON DB
    _.each([1,2,3,4], function (n) {
          $.getJSON(jsonPath + "/actors/" + n, function(data) {
              if (data.starred === true) {
                $("#star" + n).toggleClass("clicked");
              }
          });
    });

  });

};

$(document).ready(main);
