import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(question, params) {
      Object.keys(params).forEach(function(key){
        if(params[key] !== undefined) {
          question.set(key, params[key]);
        }
      });
      question.save();
    },
  }
});
