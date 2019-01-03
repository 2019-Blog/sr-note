const state = {
  titles: [
    '测试笔记这是1',
    '测试笔记这是2',
    '测试笔记这是3',
    '测试笔记这是4',
    '测试笔记这是5'
  ],
  activeTitle: '',
  activeTitleIndex: 1
}

const mutations = {
  UPDATE_ACTIVE_TITLE (state, title) {
    state.activeTitle = title
  },
  UPDATE_ACTIVE_TITLE_INDEX (state) {
    state.main++
  }
}

const actions = {
  updateTitle ({ commit }, title) {
    console.log(8868)
    commit('UPDATE_ACTIVE_TITLE', title)
  }
}

export default {
  state,
  mutations,
  actions
}
