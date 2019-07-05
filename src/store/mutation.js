import type from './mutation-type'
import Vue from 'vue'
import state from './stare'

let mutations = {
  [type.ADDCARPANELDATA] (store, data) {
    let bOff = true
    state.carPanelData.forEach(goods => {
      if (goods.sku_id === data.info.sku_id) {
        goods.count += data.count
        if (goods.count > goods.limit_num) {
          goods.count += data.count
          state.maxOff = true
          bOff = false
          return
        }
        bOff = false
        //购物车是否显示
        state.carShow = true
        //小球的信息
        state.ball.show = true
        state.ball.img = data.info.ali_image
        state.ball.el = event.path[0]
      }
    })
    if (bOff) {
      state.carShow = true
      let goodsData = data.info
      Vue.set(goodsData, 'count', data.count)
      Vue.set(goodsData, 'check', true)
      state.carPanelData.push(goodsData)
      state.carShow = true
      state.ball.show = true
      state.ball.img = data.info.ali_image
      state.ball.el = event.path[0]
    }
  },

  //清除购物车
  [type.DELCARPANELDATA] (state, id) {
    // Vue.axios.get('http://localhost:8020/common/LoginApi?arg=\'JTdCJTIydXNlcm5hbWUlMjIlM0ElMjJkZW1vJTIyJTJDJTIycGFzc3dvcmQlMjIlM0ElMjIxMjM0NTYlMjIlMkMlMjJhdXRoY29kZSUyMiUzQSUyMmF1dGhjb2RlJTIyJTJDJTIydXVpZCUyMiUzQSUyMjQxMjUlMjIlN0Q=\'').then((response) => {
    //   console.log(response.data)
    // })
    //遍历仓库的数据 与删除按钮传过来的 值进行匹配
    state.carPanelData.forEach((goods, index) => {
      if (goods.sku_id === id) {
        state.carPanelData.splice(index, 1)
        return
      }
    })
  },
  //关闭提示框
  [type.CLOSEPROMPT] (state) {
    state.maxOff = false
  },
  //显示
  [type.SHOWCAR] (state) {
    state.carShow = true
  },
  //隐藏购物车
  [type.HIDECAR] (state) {
    setTimeout(() => {
      state.carShow = false
    }, 500)
  },
  // 购物清单页面的增加
  [type.PLUSCARPANELDATA] (state, id) {
    state.carPanelData.forEach((goods, index) => {
      if (goods.sku_id === id) {
        if (goods.count >= goods.limit_num) return
        goods.count++
        return
      }
    })
  },
  // 购物清单页面的减少
  [type.SUBCARPANELDATA] (state, id) {
    state.carPanelData.forEach((goods, index) => {
      if (goods.sku_id === id) {
        if (goods.count <= 1) return
        goods.count--
        return
      }
    })
  },
  // 购物车清单判断是否选中
  [type.CHECKGOODS] (state, id) {
    state.carPanelData.forEach((goods, index) => {
      if (goods.sku_id === id) {
        goods.check = !goods.check
      }
    })
  },
  //控制全选
  [type.ALLCHECKGOODS] (state, allChecked) {
    state.carPanelData.forEach((goods, index) => {
      goods.check = !allChecked
    })
  },
  // 删除选中的商品
  [type.DELCHECKGOODS] (state) {
    let i = state.carPanelData.length
    while (i--) {
      console.log(state.carPanelData[i])
      if (state.carPanelData[i].check) {
        state.carPanelData.splice(i, 1)
      }
    }
  },
  // 添加收货人信息
  [type.SUBMITINFO] (state, data) {
    if (data.default) {
      state.receiveInfo.forEach((receive) => {
        receive.default = false
      })
      state.receiveInfo.push(data)
    }
  },
  // 订单结算
  [type.SUBMITORDER] (state, data) {
    // 向数组的开头添加新的元素
    state.orderData.unshift(data)
    let i = state.carPanelData.length
    while (i--) {
      if (state.carPanelData[i].check) {
        console.log(state.carPanelData[i])
        state.carPanelData.splice(i, 1)
      }
    }

  },

  // 支付成功
  [type.PAYNOW] (state, id) {
    state.orderData.forEach((order) => {
      if (order.orderId === id) {
        order.isPay = true
        return
      }
    })
  }
}

export default mutations
