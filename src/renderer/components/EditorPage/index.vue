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
        :initialValue="initialValue" 
        :autoSave=autoSave
        :toolbars="toolbarsConfig"
        @on-save="handleNoteSave"
      />
  </section>
</template>
<script>
import MarkDown from '@/components/MarkDown/index'
import { mapGetters } from 'vuex'
import { addNote, getContent } from '@/api/index'
import bus from '@/utils/common/eventBus'
export default {
  name: 'editor-page',
  data () {
    return {
      theme: 'Dark',
      initialValue: '',
      autoSave: false,
      toolbarsConfig: {
        fullscreen: false
      }
    }
  },
  computed: {
    ...mapGetters([
      'activeTitle',
      'titles',
      'activeTitleIndex'
    ]),
    inputTitle: {
      get () {
        return this.$store.state.Blogs.activeTitle
      },
      set (val) {
        const activeIndex = this.$store.state.Blogs.activeTitleIndex
        this.$store.dispatch('setTitle', { val, activeIndex })
      }
    }
  },
  components: { MarkDown },
  created () {
    // this.getContent()
    bus.$on('addNewNote', data => {
      this.handleNoteSave({})
    })
    bus.$on('clearContent', data => {
      this.initialValue = ''
    })
    bus.$on('content', data => {
      this.initialValue = data
    })
  },
  methods: {
    getContent () {
      const currentId = this.$store.state.Blogs.currentId
      let params = {
        id: currentId
      }
      getContent(params).then(response => {
        console.log(response.data.data[0])
        if (response.data.code === 0) {
          this.initialValue = response.data.data[0].markdown_content
        }
      })
    },
    handleNoteSave (data) {
      let params = {
        id: this.$store.state.Blogs.currentId || '',
        title: this.inputTitle || '',
        content: data.htmlValue || '',
        markdown_content: data.markdownValue || ''
      }
      addNote(params).then(response => {
        console.log(response)
      })
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


