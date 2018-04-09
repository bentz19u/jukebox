<template>
	<v-ons-page>
    <p v-if="message != ''">{{ message }}</p>
		<v-ons-list>
			<item v-for="item in list" :item="item" :key="item.id"></item>
		</v-ons-list>

	</v-ons-page>
</template>

<script>

import item from './Item'

export default {
  name: 'search',
  data () {
    return {
    	list: [],
      modalVisible: false,
      message: "You haven't search for any video yet!"
    }
  },
  components: {
    item
  },
  methods : {
  	initSearch(query){
  		axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          key: 'AIzaSyAaVxe2e6AbU3FD2pKTQh1_AySRHC1NY8I',
          type: 'video',
          maxResults: '10',
          pageToken: '',
          part: 'id,snippet',
          fields: 'items/id,items/snippet/title,items/snippet/description,items/snippet/thumbnails/default,items/snippet/channelTitle,nextPageToken',
          q: query
        }
      })
      .then(response => {

      	this.list = [];
      	if (response.data.items.length === 0) {
        		this.message = 'No videos founds.';
      	}
      	else{
          this.message = '';
      		for (var i = response.data.items.length - 1; i >= 0; i--) {
  		      this.list.push({
  		        id: response.data.items[i].id.videoId,
  		        title: response.data.items[i].snippet.title,
  		        description: response.data.items[i].snippet.description,
  		        thumbnail: response.data.items[i].snippet.thumbnails.default.url,
  		        author: response.data.items[i].snippet.channelTitle
  		      });
		      }
        }  
      })
      .catch(error => {
          console.log(error);
      });
  	}
  },
  mounted(){
  	window.bus.$on('initSearch', (query) => {
      this.initSearch(query);
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p{
  text-align: center;
  color:;
}
</style>
