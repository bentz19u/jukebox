<template>
    <v-ons-list-item tappable @click="showModal()">
        <div class="left">
          <img class="thumbnail" :src="item.thumbnail">
        </div>
        <div class="center">
          <div class="title">
            {{ item.title }}
          </div>
          <div class="user">
            <v-ons-icon icon="fa-user"></v-ons-icon><span style="font-size: 12px"> {{ item.author ? item.author : "Anonymous" }}</span>
          </div>
          <div class="desc">
            {{ item.description }}
          </div>
        </div>
    </v-ons-list-item>
</template>

<script>
export default {
  name: 'item',
  props: ['item'],
  data () {
    return {
    }
  },
  methods : {
    showModal(){
      window.bus.$emit('historiqueAdd', this.item);
      window.bus.$emit('initVideo', this.item.id);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ons-list-item{
	display:flex;
}

ons-list-item > .center {
	display:flex;
	flex-wrap: wrap;
	padding-right: 15px;
	word-wrap: break-word;
	overflow-wrap: break-word;
	word-break: break-word;
}

ons-list-item > .left {
  align-self: flex-start;
  min-width: 104px;
}

.center{
  width:80%;
}

.center div{
	width:100%;
}

.title {
  font-weight: 500;
  line-height: 16px;
  font-size: 15px;
  margin-bottom: 6px;
  width: 100%;
  font-weight: bold;
}

.user {
  font-size: 12px;
  opacity: 0.8;
  color: #e52d27;
  margin-bottom: 6px;
  width: 100%;
}

.left{
	display:flex;
	flex-wrap: wrap;
	width: 100px;
	max-width: 100px;
	padding-right:10px;
}

.desc{
  line-height: 1.2;
  font-size: 13px;
  width: 100%;
}

.thumbnail{
	width:100px;
}
</style>
