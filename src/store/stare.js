let state = {
  //存放数据
  carPanelData: [],
  //是否为最大值
  maxOff: false,
  //控制隐藏于显示
  carShow: false,
  // 创建小球
  ball: {
    show: false,//显示 隐藏
    el: null,// 点击的哪一个
    img: ''//
  },

  // 收货地址
  receiveInfo: [
    {
      'name': '王某某',
      'phone': '13811111111',
      'areaCode': '010',
      'landLine': '64627856',
      'provinceId': 110000,
      'province': '北京市',
      'cityId': 110100,
      'city': '市辖区',
      'countyId': 110106,
      'county': '海淀区',
      'add': '上地十街辉煌国际西6号楼319室',
      'default': true
    },
    {
      'name': '李某某',
      'phone': '13811111111',
      'areaCode': '010',
      'landLine': '64627856',
      'provinceId': 110000,
      'province': '北京市',
      'cityId': 110100,
      'city': '市辖区',
      'countyId': 110106,
      'county': '海淀区',
      'add': '上地十街辉煌国际东6号楼350室',
      'default': false
    }],
  // 订单信息 加发票
  orderData: []

}
export default state
