import Ember from "ember";

var Regex = Ember.Object.extend({
  editorText: "hello there with all the matches",

  highlightMatches: function(matches){
    this.set('matches', matches)
    this.set('editorText', this.highlights())
  },

  highlights: function(){
    var highlighted_text =  this.get('editorText').replace(this.pattern(), function(matchString){
      return "<span>" + matchString + "</span>"
    })
    return Ember.String.htmlSafe(highlighted_text)
  },

  pattern: function(){
    return new RegExp("(" + this.matches.join(")|(") + ")", "g")
  },

});

export default Regex;
