const state = {
  titles: [],
  activeTitle: '',
  activeTitleIndex: '1',
  currentId: 0
}

const mutations = {
  UPDATE_ACTIVE_TITLE (state, index) {
    state.activeTitle = state.titles[index - 1].title
  },
  UPDATE_ACTIVE_TITLE_INDEX (state, index) {
    state.activeTitleIndex = index
  },
  ADD_NEW_NOTE (state, title) {
    state.activeTitle = title.title
    state.titles.unshift(title)
  },
  SET_TITLE_NAME (state, { val, activeIndex }) {
    const changeTitle = {
      id: activeIndex,
      title: val
    }
    state.titles.splice(activeIndex - 1, 1, changeTitle)
    state.activeTitle = val
  },
  TITLE_INIT (state, titles) {
    state.titles = titles
  },
  CURRENT_ID (state, currentId) {
    state.currentId = currentId
  },
  CLEAR_CURRENT_ID (state, currentId) {
    state.currentId = currentId
  }
}

const actions = {
  initTitle ({ commit }, titles) {
    commit('TITLE_INIT', titles)
  },
  updateTitle ({ commit }, index) {
    commit('UPDATE_ACTIVE_TITLE', index)
  },
  updateTitleIndex ({ commit }, index) {
    commit('UPDATE_ACTIVE_TITLE_INDEX', index)
  },
  addNewNote ({ commit }, title) {
    commit('ADD_NEW_NOTE', title)
  },
  setTitle ({commit}, { val, activeIndex }) {
    commit('SET_TITLE_NAME', {val, activeIndex})
  },
  changeCurrentId ({commit}, currentId) {
    commit('CURRENT_ID', currentId)
  },
  clearCurrentId ({commit}, currentId) {
    commit('CLEAR_CURRENT_ID', currentId)
  }
}

export default {
  state,
  mutations,
  actions
}
