<!--全部商品-->
<template>
  <div class="main">
    <div class="top"></div>
    <div class="content">
      <problem></problem>
      <contact></contact>
      <selfService></selfService>
    </div>

  </div>
</template>
<script>
  //首先引入组件和数据
  import problem from '../components/problem'
  import contact from '../components/contact'
  import selfService from '../components/selfService'

  export default {
    components: {
      problem, contact,selfService
    }
  }
</script>

<style>
  .top {
    height: 620px;
    background-size: auto 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-image: url(http://static.smartisanos.cn/service/assets/images/top.5dc20d0b797aa46fec1a159a016751c7.jpg);
    background-color: #131313;
    position: relative;
    top: -90px;
    margin-bottom: -90px;
  }

  .content {
    clear: both;
    width: 1220px;
    min-height: 600px;
    padding: 0 0 25px;
    margin: 0 auto;
  }

  /*常见问题的样式 start*/
  .content .box {
    overflow: hidden;
    z-index: 0;
    margin-top: 29px;
    border: 1px solid rgba(0, 0, 0, .14);
    border-radius: 8px;
    background: #fff;
    box-shadow: 0 3px 8px -6px rgba(0, 0, 0, .1);
  }

  .box-question .title-header {
    display: block;
    font-size: 18px;
    line-height: 60px;
    color: #9f9f9f;
    background: #fafafa;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
  }

  .box-question .title {
    margin-left: 30px;
  }

  .box-question .panel-content {
    overflow: hidden;
    transition: all .3s ease-in-out;
  }

  .box-question .banner-list > li {
    width: 50%;
    padding: 38px 0 35px 120px;
    background-repeat: no-repeat;
    background-size: 54px auto;
    background-position-x: 35px;
    background-image: url(http://static.smartisanos.cn/service/assets/images/question-icon.9061b2228768f4b09c58e907f170570b.png);
    background-image: -webkit-image-set(url(http://static.smartisanos.cn/service/assets/images/question-icon.9061b2228768f4b09c58e907f170570b.png));
  }

  .box .banner-list > li {
    float: left;
    box-sizing: border-box;
    border-right: 1px solid #ececec;
    border-bottom: 1px solid #ececec;
  }

  .box-question .banner-list > li .title {
    font-size: 16px;
    line-height: 1em;
    margin-bottom: 20px;
    color: #333;
  }

  .box-question .banner-list > li ul {
    font-size: 12px;
    line-height: 1em;
    color: #999;
    overflow: hidden;
    margin-top: 12px;
  }

  .box-question .banner-list > li ul li:first-child {
    padding-left: 0;
  }

  .box-question .banner-list > li ul li {
    float: left;
    padding-left: 16px;
    position: relative;
  }

  .box-question .banner-list > li ul li:before {
    content: "\B7";
    position: absolute;
    left: 5px;
  }

  .box-question .banner-list > li a {
    color: #a7a7a7;

  }

  .box-question .banner-list > li a:hover {
    color: #5079d9;
    cursor: pointer;
    transition: all .15s ease-out;
    text-decoration: none;
  }

  .box-question .banner-list > li.goumai {
    background-position-y: 33px;
  }

  .box-question .banner-list > li.dingdan {
    background-position-y: -232px;
  }

  .box-question .banner-list > li.jishu {
    background-position-y: -90px;
  }

  .box-question .banner-list > li.shouhou {
    background-position-y: -344px;
  }

  /*常见问题的样式 end*/
</style>
