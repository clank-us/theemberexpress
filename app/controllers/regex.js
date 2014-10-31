import Ember from "ember";

var RegexController = Ember.ObjectController.extend({

  actions: {
    match: function(){
      var self = this;
      $.post( self.url, self.matchPostData(),
        function(response){
          self.model.highlightTestString(response.match_string)
        }, 'json'
      );
    }
  },

  url: "http://localhost:9393/",

  matchPostData: function(){
    return {
      pattern: this.model.pattern(),
      flags: this.model.flags(),
      test_string: $('#editor').text()
    };
  },

  keyPress: function(){console.log("hello")}

});

export default RegexController;
