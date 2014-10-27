import Ember from "ember";

export default Ember.ObjectController.extend({
  actions: {
    match: function(){
      var url = "http://mock.mocaroni.com/Wy5nuHes4mf34C79p_AH9v4aSPA/match?status=200"
      $.ajax({
        url: url,
        data: {},
        dataType: 'json',
        success: function(response){

        }
      })
    }
  }

});
