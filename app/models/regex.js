import Ember from "ember";

var Regex = Ember.Object.extend({
  testString: "Your Test string here",
  patternString: "",

  pattern: function(){
    return (this.patternString.match(/[^\/].+(?=\/+)/) || [null])[0]
  },

  flags: function(){
     return (this.patternString.match(/[^/]\w+$/) || [null])[0]
  },

  highlightTestString: function(){ },

});

export default Regex;
