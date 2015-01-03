import Ember from "ember";

var Regex = Ember.Object.extend({
  patternString: "",
  captures: [],


  pattern: function(){
    var pattern =  /\/(.+)\/[^\/]*$/.exec(this.patternString) || [];
    return pattern[1];
  }.property("patternString"),

  flags: function(){
    var flags =  /\/(\w+)$/.exec(this.patternString) || [];
    return flags[1];
  }.property("patternString"),

  highlightTestString: function(matchString){
    var escapedString = this.htmlEncode(matchString);
    var newString = escapedString.replace(/(--{)|(}--)/g, this.swap);
    $('#editor').html(newString);
  },

  swap: function(string){
    return {
      "--{": "<span>",
      "}--": "</span>"
    }[string];
  },

  htmlEncode: function(html) {
    return document.createElement( 'a' ).appendChild(
      document.createTextNode( html ) ).parentNode.innerHTML;
  }

});

export default Regex;
