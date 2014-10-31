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
    var escapedString = this.htmlEncode(matchString);
    var newString = escapedString.replace(/(--{)|(}--)/g, this.swap);
    $('#editor').html(newString);
  },

  swap: function(string){
    return {
      "--{": "<span>",
      "}--": "</span>"
    }[string]
  },

  htmlEncode: function(html) {
    return document.createElement( 'a' ).appendChild(
      document.createTextNode( html ) ).parentNode.innerHTML;
  },

  htmlDecode: function(html) {
    var a = document.createElement( 'a' ); a.innerHTML = html;
    return a.textContent;
  },


  });

export default Regex;
