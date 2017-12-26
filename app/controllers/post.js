import Controller from '@ember/controller';

export default Controller.extend({
	actions:{
		sayHello: function(){
			alert('hello')
		},
		toggleBody: function(){
			this.toggleProperty('isShowingBody');
		},
		submitAction: function(){
			alert("entered value is" + this.get('name') + this.get('comment'));
		}
	},
	title: 'My blog post',
	body: 'This is the body of my blog post',
	authors: ['Willaiams', 'Michel','Rodney'],
	created: new Date(),
	stringSpace: 'strings with space to check helper',
	comments: [
		{
			name: 'Mike Swith',
			comment: 'thank you for great posts1'
		},
		{
			name: 'Daren Swith',
			comment: 'thank you for great posts2'
		},
		{
			name: 'Keeth perry',
			comment: 'thank you for great posts3'
		},
		{
			name: 'Narai nani',
			comment: 'thank you for great posts4'
		},
		{
			name: 'banrooti mariappan',
			comment: 'thank you for great posts5'
		},
		{
			name: 'olla mookan',
			comment: 'thank you for great posts6'
		},
		{
			name: 'Vetti verrinai',
			comment: 'thank you for great posts7'
		},
	]
});
