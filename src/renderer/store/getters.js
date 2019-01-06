const getters = {
  titles: state => state.Blogs.titles,
  activeTitle: state => state.Blogs.activeTitle,
  activeTitleIndex: state => state.Blogs.activeTitleIndex,
  currentId: state => state.Blogs.currentId
}
export default getters
