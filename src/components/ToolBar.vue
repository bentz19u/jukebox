<template>
	<v-ons-page>
    <v-ons-toolbar >
        <form v-on:submit.prevent @submit="search" >
          <v-ons-input id="search" type="search" modifier="transparent" input-id="android-search-input" placeholder="Search for videos in YouTube" v-model="query"></v-ons-input>
        </form>
    </v-ons-toolbar>

    <v-ons-tabbar swipeable position="auto"
      :tabs="this.tabs"
      :visible="true"
    >
    </v-ons-tabbar>
    <modal></modal>
	</v-ons-page>
</template>

<script>

import Search from './Search'
import History from './History'
import Modal from './Modal'

export default {
  name: 'toolBar',
  data () {
    return {
      tabs: [
        {
          label: 'Search',
          page: Search,
          key: "homePage"
        },
        {
          label: 'History',
          page: History,
          key: "newsPage"
        }
      ],
      query: ''
    }
  },
  components: {
    Search,
    History,
    Modal
  },
  methods: {
    search(){
      console.log(this.query);
      window.bus.$emit('initSearch', this.query);
    }
  },
  beforeCreate() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#icon{
	color: #fff;
}
ons-toolbar, #tabbar{
	width:100%;
	background-color: #209CEE;
  height:60px;
}
form{
  display:flex;
  min-width:100%;
  flex-wrap: wrap;
  height:100%;
}
#search{
	width:90%;
  margin:auto;
  height:30px;
}
</style>

<style>
#search input{
  color:white;
}
</style>
