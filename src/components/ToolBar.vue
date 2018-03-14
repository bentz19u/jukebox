<template>
	<v-ons-page>
	    <v-ons-toolbar>
			<div class="center" >Jukebox</div>
			<v-ons-toolbar-button class="right" ng-click="androidSearchModal.show(); ">
			  	<v-ons-icon id="icon" icon="md-search" modifier="material"></v-ons-icon>
			</v-ons-toolbar-button>
	    </v-ons-toolbar>

	    <v-ons-tabbar swipeable position="auto"
	      :tabs="this.tabs"
	      :visible="true"
	    >
	    </v-ons-tabbar>
	</v-ons-page>
</template>

<script>

import Search from './Search'
import History from './History'

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
      ]
    }
  },
  components: {
    Search,
    History
  },
  methods: {
  },
  beforeCreate() {
    console.log('Android:'+this.$ons.platform.isAndroid());
    console.log('IOS:'+this.$ons.platform.isIOS());
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#icon{
	color: #fff;
}
.center{
	color:white;
}
ons-toolbar, #tabbar{
	width:100%;
	background-color: #209CEE;
}
ons{
	background-color: #209CEE;
}

</style>
