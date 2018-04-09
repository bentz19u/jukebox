<template>
	<v-ons-page>
		<v-ons-list>
			<item v-for="item in list" :item="item" :key="item.id"></item>
		</v-ons-list>
	</v-ons-page>
</template>

<script>

import item from './Item'

export default {
  name: 'history',
  data () {
    return {
    	list: []
    }
  },
  components: {
    item
  },
  mounted(){
  	window.bus.$on('historiqueAdd', (item) => {
  		if(this.list.indexOf(item) == -1){
  			this.list.push(item);
  		}
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
