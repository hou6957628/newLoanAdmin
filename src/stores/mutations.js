const mutations = {
  Token(state, data) {
    state.token = data
  },
  selectList(state, data) {
    state.electData = data
  },
  getProductName(state, data) {
    state.productName = data
  },
  getUsername(state, data) {
    state.username = data
  },
  getPassword(state, data) {
    state.password = data
  }
};
export default mutations
