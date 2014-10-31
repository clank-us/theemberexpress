import Ember from 'ember';

var EditorView = Ember.View.extend({
  templateName: 'editor',
  keyDown: function(event){
    if(event.which===13) {
      document.execCommand("insertHTML",false,"\n\r");
      return false;
    }
  },

  focusIn: function(event){
    var $el = this.$('div');
    $el.html($el.text());
  },

  focusOut: function(){
    this.get('controller').send('match');
  }
})

export default EditorView;

