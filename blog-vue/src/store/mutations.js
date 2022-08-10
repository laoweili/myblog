import state from "./state";
const mutations = {
  ShowAside(state) {
    state.isShow = !state.isShow
  },
  ChangeDialogVisible(state) {
    state.dialogVisible = !state.dialogVisible
  },
  HideMenu(state) {
    state.isHide = true
  },
  ShowControls(state) {
    state.isShowControls = !state.isShowControls
  },
  // 更换主题
  ToggleThemes(state) {
    state.isDarkThem = !state.isDarkThem
  },
  // 更换主题
  ToggleLoginDialogVisible(state) {
    state.loginDialog = !state.loginDialog
  }
}
export default mutations