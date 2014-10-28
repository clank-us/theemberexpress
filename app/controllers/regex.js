import Ember from "ember";

var RegexController = Ember.ObjectController.extend({
  actions: {
    match: function(){
      var self = this;
      $.post(self.url, {}, function(response){
          var matchedText = Ember.String.htmlSafe(response)
          self.model.set("editorText", matchedText)
        }, 'text'
      )
    }
  },

  url: "http://mock.mocaroni.com/Wy5nuHes4mf34C79p_AH9v4aSPA/match?status=200",

  keyPress: function(){console.log("hello")}

});

export default RegexController;
