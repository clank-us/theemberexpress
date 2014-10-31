import Ember from 'ember';

var EditorView = Ember.View.extend({
  templateName: 'editor',
  keyDown: function(event){
    if(event.which===13) {
      document.execCommand("insertHTML",false,"\n\r");
      return false;
    }
  },

})

export default EditorView;

