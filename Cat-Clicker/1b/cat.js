Vue.component('cat', { 
	props: ['url'],
    template: `<div>
		<div style="float:left">
			<img :src="url" v-on:click="incrementCounter"/>
		</div>
		<div style="float:left; margin-left:30px;">Num Clicks: {{ counter }}</div>
		</div>`,
	data: function () {
		return {
		  counter: 0
		}
	 },
	 methods: {
		incrementCounter: function () {
		  this.counter += 1;
		}
	}
});


new Vue({
  el: '#main'
})