<template>
    <section class='sidebar'>
      <div class='user-message'>
        <div class="user-img">
          <img src="https://avatars3.githubusercontent.com/u/6932025?s=460&v=4" width="36" height="36">
        </div>
        <div class="user-name">
          pearyman
        </div>
        <i class="el-icon-error"></i>
      </div>
      <div class="operate">
        <el-button 
          type="primary" 
          icon="el-icon-edit" 
          class="edit"
          size="mini" 
          title="新笔记"
          circle
          @click="addNewNote"
        ></el-button>
        <el-button 
          type="warning" 
          icon="el-icon-message" 
          size="mini"
          title="发布笔记"
          circle
        ></el-button>
      </div>
      <el-col class="menu">
        <el-menu
          :default-active="activeTitleIndex"
          class="el-menu-vertical-demo">
          <el-menu-item 
            v-for="(item,index) in titles"
            :index="String(index+1)"
            :key="index"
            :attr="item.title"
            :id = "item.id"
            @click="handleOpen"
            >
            <i class="el-icon-document"></i>
            <span slot="title">{{item.title}}</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <div class="set">
        <el-button 
          type="warning" 
          icon="el-icon-setting" 
          class="icon-set"
          size="mini" 
          title="设置"
          circle
        ></el-button>
      </div>
    </section>
</template>
<script>
import { mapGetters } from 'vuex'
import { getTitles } from '@/api/index'
import { getContent } from '@/api/index'
import bus from '@/utils/common/eventBus'
// import store from '../../store/index'
export default {
  data () {
    return {
      // titles: this.$store.state.Blogs.titles
    }
  },
  components: {
  },
  computed: {
    ...mapGetters([
      'titles',
      'activeTitleIndex'
    ])
  },
  watch: {
    titles (val) {
      console.log(val)
    }
  },
  created () {
    this.getTitles()
  },
  methods: {
    getContent () {
      const currentId = this.$store.state.Blogs.currentId
      let params = {
        id: currentId || ''
      }
      getContent(params).then(response => {
        console.log(response.data.data[0])
        if (response.data.code === 0) {
          bus.$emit('content', response.data.data[0].markdown_content)
          // this.initialValue = response.data.data[0].markdown_content
        }
      })
    },
    getTitles () {
      getTitles().then(response => {
        if (response.data.code === 0) {
          const titles = response.data.data
          this.$store.dispatch('initTitle', titles)
          this.$store.dispatch('changeCurrentId', titles[0].id)
        }
      })
    },
    handleTitleArray (newer, older) {
      this.changetitles = newer
    },
    handleOpen (key, keyPath) {
      // console.log(key.$attrs.id)
      this.$store.dispatch('updateTitle', key.index)
      this.$store.dispatch('updateTitleIndex', key.index)
      this.$store.dispatch('changeCurrentId', key.$attrs.id)
      this.getContent()
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    addNewNote () {
      const newTitle = {
        id: '',
        title: '无标题'
      }
      this.$store.dispatch('addNewNote', newTitle)
      this.$store.dispatch('updateTitleIndex', '1')
      this.$store.dispatch('clearCurrentId', 0)
      bus.$emit('clearContent', 'clear')
      bus.$emit('addNewNote', 'hello')
    }
  }
}
</script>
<style scoped>
.sidebar{
  width: 180px;
  height: 100%;
  overflow-y: scroll;
  background: #fff;
  position: absolute;
  top:0;
  left: 0;
  bottom: 0;
}
.user-message{
  height: 60px;
  background: #fff;
  /* background-image:url('http://lc-1kq32oo4.cn-n1.lcfile.com/7beb54b877913721259c.jpg');
  background-size:180px 60px; */
}
.user-message{
  display: flex;
  padding: 0 10px;
  align-items: center;
  width: 160px;
  color: #303133;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
}
.user-img{
  width: 36px;
  height: 36px;
  border-radius: 100%;
  overflow: hidden;
}
.user-name{
  width: 110px;
  margin-left: 10px;
  font-size: 14px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.el-icon-error{
  font-size: 12px;
  cursor: pointer;
}
.operate{
  border: 1px solid #b9c4ce;
  border-left: none;
  border-right: none;
  padding: 5px 10px;
  height: 40px;
  line-height: 40px;
  width: 160px; 
  position: fixed;
  top: 60px;
  left: 0;
  z-index: 5;
  background: #fff;
}
.edit{
  background: #3eaf7c;
  border-color: #3eaf7c;
}
.menu{
  margin: 122px 0 50px 0;
  width: 182px;
}
.menu::-webkit-scrollbar {
  display: none;
}
.set{
  border-top:1px solid #b9c4ce;
  width: 160px;
  padding: 10px;
  height: 28px;
  position: fixed;
  bottom: 0;
  background: #fff;
  z-index: 5;
}
.icon-set{
  background:#909399;
  border-color: #909399;
}
.el-menu > li{
  padding:0 10px !important;
  height: 30px;
  line-height:30px;
  font-size: 12px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.el-icon-document{
  font-size: 12px;
}
.is-circle:active{
  opacity: .8;
}
</style>
