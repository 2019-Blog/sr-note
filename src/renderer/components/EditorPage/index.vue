<template>
  <section class='container'>
      <div class="title-container">
        <el-input
          class="input-title"
          prefix-icon="el-icon-tickets"
          placeholder="请输入题目"
          v-model="inputTitle"
          clearable>
        </el-input>
      </div>
      <mark-down
        :theme=theme
        :autoSave=autoSave
        :toolbars="toolbarsConfig"
        @on-save="handleNoteSave"
      />
  </section>
</template>
<script>
import MarkDown from '@/components/MarkDown/index'
export default {
  name: 'editor-page',
  data () {
    return {
      theme: 'Dark',
      autoSave: false,
      toolbarsConfig: {
        fullscreen: false
      },
      inputTitle: ''
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
    top: 40px;
    left: 180px;
    bottom:0;
    right:0;
  }
  .title-container{
    margin-left: 180px;
  }
</style>


