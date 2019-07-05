<!--购物车组件 -->
<template>
  <li class="nav-cart" @mouseenter="carShowHandle" @mouseleave="carHideHandle">
    <a href="javascript:;" class="ball-rect">购物车</a>
    <span class="cart-empty-num " :class="{'cart-num': count> 0}">
								<i>{{count}}</i>
							</span>
    <div class="nav-cart-wrapper" v-if="carShow">
      <div class="nav-cart-list">
        <div class="empty" v-if="count <= 0">
          <h3>购物车为空</h3>
          <p>您还没有选购任何商品，现在前往商城选购吧!</p>
        </div>
        <div class="full">
          <div class="nav-cart-items">
            <ul>
              <li class="clear" v-for="(item,index) in carPanelData">
                <div class="cart-item js-cart-item cart-item-sell">
                  <div class="cart-item-inner">
                    <div class="item-thumb">
                      <img :src="item.ali_image+'?x-oss-process=image/resize,w_206/quality,Q_80/format,webp'">
                    </div>
                    <div class="item-desc">
                      <div class="cart-cell">
                        <h4>
                          <a href="#/item/100027401">{{item.title}}</a>
                        </h4>
                        <p class="attrs">
                          <span>{{item.spec_json.show_name}}</span>
                        </p>
                        <h6>
                          <span class="price-icon">¥</span><span class="price-num">{{item.price}}</span><span
                          class="item-num">x {{item.count}}</span>
                        </h6>
                      </div>
                    </div>
                    <div class="del-btn" @click="delCarPanelData(item.sku_id)">删除</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="nav-cart-total">
            <p>共 <strong class="ng-binding">{{count}}</strong> 件商品</p>
            <h5>合计：<span class="price-icon">¥</span><span class="price-num ng-binding"
                                                          ng-bind="cartMenu.totalPrice">{{price}}</span></h5>
            <h6>
              <router-link to="/Cart" class="nav-cart-btn">去购物车</router-link>
            </h6>
          </div>
        </div>
      </div>
    </div>
    <transition name="ball"
                v-on:before-enter="beforEnter"
                v-on:enter="enter"
                v-on:after-enter="afterEnter"
                v-bind:css="true"
    >
      <div class="addcart-mask" v-show="ball.show">
        <img class="mask-item">
      </div>
    </transition>
  </li>
</template>

<script>
  //购物车组件
  export default {
    name: 'car-panel',
    //计算属性
    computed: {
      //获取vuex里面的数据
      carPanelData () {
        return this.$store.state.carPanelData
      },
      //获取仓库的数量计算结果
      count () {
        return this.$store.getters.totleCount
      },
      //获取仓库的金额计算结果
      price () {
        return this.$store.getters.totlePrice
      },
      carShow () {
        return this.$store.state.carShow

      },
      ball () {
        return this.$store.state.ball
      }
    },
    methods: {
      //清除购物车的东西
      delCarPanelData (id) {
        this.$store.commit('delCarPanelData', id)
      },
      carShowHandle () {
        this.$store.commit('showCar')
      },
      carHideHandle () {
        this.$store.commit('hideCar')
      },
      // 初始状态
      beforEnter (el) {
        //获取小球位置 js自己的方法
        let rect = this.ball.el.getBoundingClientRect()
        //获取购物车的位置
        let rectE = document.getElementsByClassName('ball-rect')[0].getBoundingClientRect()
        // 获取小球
        let ball = document.getElementsByClassName('mask-item')[0]
        //计算
        let x = rectE.left + 15 - (rect.left + rect.width / 2)
        let y = rect.top + rect.height / 2 - (rectE.top + 10)

        //设置样式
        el.style.transform = 'translate3d(0,' + y + 'px,0)'
        ball.style.transform = 'translate3d(-' + x + 'px,0,0)'
        ball.src = this.ball.img
      },
      // 运动
      enter (el) {
        //重排从绘  offsetHeight会造成
        let a = el.offsetHeight
        el.style.transform = 'translate3d(0,0,0)'
        document.getElementsByClassName('mask-item')[0].style.transform = 'translate3d(0,0,0)'

      },
      // 结束
      afterEnter () {
        this.ball.show = false
      }
    }
  }
</script>

<style scoped>
  .ball-enter-active {
    transition: 1s cubic-bezier(.1, .69, .51, 1.01);
  }

  .ball-enter-active .mask-item {
    transition: 1s cubic-bezier(0, 0, 0, 0);
  }
</style>
