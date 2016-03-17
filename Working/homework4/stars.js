/* jshint browser: true, jquery: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, nonew: true, quotmark: double, undef: true, unused: true, strict: true, trailing: true */
/* global _: false, console: true */

var main = function () {
  "use strict";

  var jsonPath = "http://localhost:3000";
  var indices = [1,2,3,4];

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

  var addActor = function(actorName) {
      // POST request via REST API
      var data = {"name": actorName, "starred": false};
      var request = new XMLHttpRequest();
      request.open("POST", jsonPath + "/actors", true);
      request.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
      request.send(JSON.stringify(data));
  };


  $(function(){
    // Toggle state with JSON DB
    _.each(indices, function (n) {
          $("#star" + n).click(function(){
            console.log("Toggle star" + n);
            $.getJSON(jsonPath + "/actors/" + n, function(data) {
                if (data.starred === true) {
                  starJSON(n, "false");
                  $("#istar" + n).text("star_border");
                }
                else {
                  starJSON(n, "true");
                  $("#istar" + n).text("star");
                }
              });
          });
    });

    // Add entry to JSON DB
    $("#submit").click(function(){
        var newActor = $("#newactor").val();
        var lastID = indices[indices.length-1];

        if (newActor !== "") {
            console.log("Add actor: " + newActor);
            addActor(newActor);
            var newID = lastID + 1;
            indices.push(newID);
            console.log(indices);

            // Update page
            var newListItem = "<div class='mdl-list__item'><span class='mdl-list__item-primary-content'><i class='material-icons mdl-list__item-avatar'>person</i><span id='actor" + newID + "'>" + newActor + "</span></span><button id='star" + newID + "' class='mdl-button mdl-js-button mdl-button--accent'><i id='istar" + newID + "' class='material-icons'>star_border</i></button></div>";
            console.log(newListItem);
            $(newListItem).insertAfter("#container");
            $("#newactor").val("");

            $("#star" + newID).click(function(){
              console.log("Toggle star" + newID);
              $.getJSON(jsonPath + "/actors/" + newID, function(data) {
                  if (data.starred === true) {
                    starJSON(newID, "false");
                    $("#istar" + newID).text("star_border");
                  }
                  else {
                    starJSON(newID, "true");
                    $("#istar" + newID).text("star");
                  }
                });
            });
      }
    });

    // Retrieve state from JSON DB
    _.each(indices, function (n) {
          $.getJSON(jsonPath + "/actors/" + n, function(data) {
              if (data.starred === true) {
                console.log("istar: " + n);
                $("#istar" + n).text("star");
              }
          });
    });

  });

};

$(document).ready(main);
