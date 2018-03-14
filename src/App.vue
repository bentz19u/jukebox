<template>
  <v-ons-page id="app">
    <toolBar></toolBar>
  </v-ons-page>
</template>

<script>
import ToolBar from './components/ToolBar'

export default {
  name: 'app',
  computed: {
    menuIsOpen: {
      get () {
        return this.$store.state.splitter.open
      },
      set (newValue) {
        this.$store.commit('splitter/toggle', newValue)
      }
    }
  },
  components: {
    ToolBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
