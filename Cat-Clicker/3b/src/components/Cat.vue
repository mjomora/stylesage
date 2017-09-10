<template>
  <fieldset  v-bind:class=" isActive ? visibleClass : hiddenClass ">
		<legend>{{nameCat}}</legend>
		<div style="float:left">
			<img :src="url" v-on:click="incrementCounter"/>
		</div>
		<div style="float:left; margin-left:30px;">Num Clicks: {{ counter }}</div>
		
  </fieldset>
</template>

<script>
export default {
  props: ['url', 'nameCat'],
  data () {
    return {
      counter: 0,
	  isActive: false,
	  visibleClass: 'visibleClass',
	  hiddenClass: 'hiddenClass'
    }
  },
  methods: {
		incrementCounter: function () {
		  this.counter += 1;
		},
		changeVisibility: function(item){
			this.isActive = (item.nameCat == this.nameCat);
		}
	},
	
	mounted: function () {
		this.$parent.$on('catClick', this.changeVisibility);
		
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.visibleClass {
  display: block;
}

.hiddenClass {
  display: none;
}

</style>
