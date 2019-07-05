//用来管理数据

//第一步 引入vue 和 vuex
import Vue from 'vue'
import Vuex from 'vuex'
import mutation from './mutation'
import state from './stare'
import getters from './getters'
//进行添加
Vue.use(Vuex)
//第三部 创建一个仓库 store
let store = new Vuex.Store({
  state: state,
  // 计算
  // 获取数量
  getters: getters,
  mutations: mutation
})

//第四部 暴露
export default store
