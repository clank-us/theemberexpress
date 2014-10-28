import Ember from "ember";

var RegexController = Ember.ObjectController.extend({

  actions: {
    match: function(){
      var self = this;
      $.post( self.url, self.matchPostData(),
        function(response){
          self.model.highlightTestString(response.matches)
        }, 'json'
      );
    }
  },

  url: "http://mock.mocaroni.com/Wy5nuHes4mf34C79p_AH9v4aSPA/match?status=200",

  matchPostData: function(){
    return {
      pattern: this.model.pattern(),
      flags: this.model.flags(),
      test_string: this.model.get("testString")
    }
  },

  keyPress: function(){console.log("hello")}

});

export default RegexController;
