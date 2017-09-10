<template>
  <div id="app">
	<div style="float:left">
		Pulsa en una opción
		<ul v-if="items.length">
		  <li v-for="item in items" v-on:click="showCat(item)"> 
			{{ item.nameCat }}
		  </li>
		</ul>
	</div>
	<div style="float:right">
		<cat v-for="item in items" v-bind:Cat="item" :key="item.nameCat" :url="item.url" :nameCat="item.nameCat"></cat>
	</div>
    
  </div>
</template>

<script>
import Cat from './components/Cat'

export default {
  name: 'app',
  components: {
    Cat
  },
  data() {
    return {
	items: [
      { url:"https://i.pinimg.com/736x/85/0d/22/850d228cc10a4c4213584b0d86895dcd--cat-allergy-symptoms-cute-cat-video.jpg", nameCat:"Tom" },
      { url:"http://cat-bounce.com/cb.png", nameCat:"Tim" },
	  { url:"https://media0.giphy.com/media/kVlf6fsBKDFII/200_s.gif", nameCat:"Tum" },
	  { url:"https://ae01.alicdn.com/kf/HTB1vHEVRpXXXXbCaXXXq6xXFXXXX/Littlest-Pet-Rare-Yellow-Orange-Shorthair-Cat-Purple-Moon-Eyes-lps-855.jpg_200x200.jpg", nameCat:"Tem" },
	  { url:"https://media3.giphy.com/media/3o85xoi6nNqJQJ95Qc/200_s.gif", nameCat:"Tam" }
    ]
	}
  },
  methods: {
		showCat: function (item) {
		  this.$emit('catClick', item);
		}
	}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
