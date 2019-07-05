import state from './stare'

let getters = {
  //总数计算
  totleCount (state) {
    let count = 0
    state.carPanelData.forEach(goods => {
      count += goods.count
    })
    return count
  },
  //价格统计
  totlePrice (state) {
    let price = 0
    state.carPanelData.forEach(goods => {
      price += goods.count * goods.price
    })
    return price
  },
  // 购物车全选
  allChecked (state) {
    let allchecked = true
    state.carPanelData.forEach((goods) => {
      if (!goods.check) {
        allchecked = false
        return
      }
    })
    return allchecked
  },
  // 计算总数
  checkedPrice (state) {
    let price = 0
    state.carPanelData.forEach((goods) => {
      if (goods.check) {
        price += goods.price * goods.count
      }
    })
    return price
  },
  // 计算价格
  checkedCount (state) {
    let count = 0
    state.carPanelData.forEach((goods) => {
      if (goods.check) {
        count += goods.count
      }
    })
    return count
  },
  // 当前加入的商品
  checkGoods (state) {
    let checkGoods = []
    state.carPanelData.forEach((goods) => {
      if (goods.check) {
        checkGoods.push(goods)
      }
    })
    return checkGoods
  }
}

export default getters
