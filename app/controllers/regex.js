import Ember from "ember";

var RegexController = Ember.ObjectController.extend({

  actions: {
    match: function(){
      var self = this;
      $.post( self.url, self.matchPostData(),
        function(response){
          self.model.set('captures', response.captures);
          self.model.highlightTestString(response.match_string);
        }, 'json'
      ).fail(function(){
        self.model.set('captures', []);
        self.model.highlightTestString(self.matchPostData().test_string);
      });
    }
  },

  url: "http://localhost:9393/",

  matchPostData: function(){
    return {
      pattern: this.get('model.pattern'),
      flags: this.get('model.flags'),
      test_string: $('#editor').text()
    };
  },

});

export default RegexController;
