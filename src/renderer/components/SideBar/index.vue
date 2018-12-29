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
          default-active="1"
          class="el-menu-vertical-demo">
          <el-menu-item index="1">
            <i class="el-icon-document"></i>
            <span slot="title">测试笔记</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-document"></i>
            <span slot="title">测试笔记</span>
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
export default {
  components: {
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
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
  color: #b9c4ce;
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
