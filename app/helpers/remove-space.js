import Ember from 'ember';

export function removeSpace(params){
	return params[0].replace(/ /g,'');
}

export default Ember.Helper.helper(removeSpace)