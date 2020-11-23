new Vue({
	el: '#app',
	data() {
		return {
			bulbon: false,
		};
	},
	methods: {
		switchBulb: function () {
		 this.bulbon=!this.bulbon;
		},
	},
});
