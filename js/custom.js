new Vue({
	el: '#app',
	data() {
		return {
			bulbon: false,
			img1:"../image/bulbon.gif",
			img2:"../image/bulb.gif"
		};
	},
	methods: {
		switchBulb: function () {
		 this.bulbon=!this.bulbon;
		},
	},
});
