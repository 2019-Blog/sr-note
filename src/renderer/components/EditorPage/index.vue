<template>
  <section class='container'>
      <mark-down
        :theme=theme
        :autoSave=autoSave
        :toolbars="toolbarsConfig"
        @on-save="handleNoteSave"
      />
  </section>
</template>
<script>
import MarkDown from 'vue-meditor'
export default {
  name: 'editor-page',
  data () {
    return {
      theme: 'Dark',
      autoSave: false,
      toolbarsConfig: {
        fullscreen: false
      }
    }
  },
  components: { MarkDown },
  methods: {
    handleNoteSave (data) {
      console.log(data)
    }
  }
}
</script>
<style lang="scss" scoped>
  .container{
    height: auto;
  }
  .markdown{
    position: absolute;
    height: auto !important;
    top: 0;
    left: 100px;
    bottom:0;
    right:0;
  }
</style>


