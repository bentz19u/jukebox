<template>
    <v-ons-modal :visible="modalVisible" @click="closeModal()">
    	<div class="modal__content">
    		<div id="player">
				 <iframe 
				 allowfullscreen="1" 
				 allow="autoplay; encrypted-media"
				 title="YouTube video player"
				 frameborder="0"
				 :src="videoId">
				</iframe> 
			</div>
		</div>
	</v-ons-modal>
</template>

<script>
export default {
  name: 'modal',
  data () {
    return {
    	modalVisible: false,
    	videoId: ''
    }
  },
  methods : {
  	showModal() {
      	this.modalVisible = true;
    },
    closeModal() {
      this.modalVisible = false;
      this.videoId = '';
    }
  },
  mounted(){
  	window.bus.$on('initVideo', (itemId) => {
  		this.videoId = "http://www.youtube.com/embed/" + itemId;
      	this.showModal();
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ons-modal {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

iframe {
  width: 100%;
  height: 100%; 
}

@media all and (orientation: portrait) {
  #player {
    height: 40vh;
  }
}

@media all and (orientation: landscape) {
  #player {
    height: 90vh;
    width: 90vw;
    margin: auto;
  }
}
</style>
