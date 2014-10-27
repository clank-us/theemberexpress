import Ember from "ember";

var RegexController = Ember.ObjectController.extend({
  actions: {
    match: function(){
      var self = this;
      $.post(self.url, {}, function(response){
          self.model.highlightMatches(response.matches)
        }, 'json'
      )
    }
  },

  url: "http://mock.mocaroni.com/Wy5nuHes4mf34C79p_AH9v4aSPA/match?status=200"

});

export default RegexController;
