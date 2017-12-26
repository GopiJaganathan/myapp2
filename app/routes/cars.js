import Ember from 'ember';
import Route from '@ember/routing/route';
/*var cars = [
		{
			"id" : 1,
			"make": "Honda",
			"model": "accord",
			"year": "2007"
		},
		{
			"id" : 2,
			"make": "Toyata",
			"model": "camery",
			"year": "2013"
		},
		{
			"id" : 3,
			"make": "switf",
			"model": "suziy",
			"year": "2017"
		},
		{
			"id" : 4,
			"make": "Ford",
			"model": "xford",
			"year": "2002"
		},
	]*/
export default Route.extend({
	model:function(){
		return this.store.findAll('car');
	}
});
