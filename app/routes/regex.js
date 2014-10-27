import Ember from "ember";
import Regex from "../models/regex";

var RegexRoute = Ember.Route.extend({
  model: function(){
    return Regex.create()
  }
});

export default RegexRoute;
