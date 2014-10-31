import Ember from "ember";

var Regex = Ember.Object.extend({
  patternString: "",

  pattern: function(){
    var pattern =  /\/(.+)\/[^\/]*$/.exec(this.patternString) || [];
    return pattern[1];
  },

  flags: function(){
     var flags =  /\/(\w+)$/.exec(this.patternString) || [];
     return flags[1];
  },

  highlightTestString: function(matchString){
    $('#editor').html(matchString);
  },

});

export default Regex;
