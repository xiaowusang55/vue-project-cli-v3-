<template>
  <div class="web-topbar">
    <div class="container">
      <div class="topbar-nav">
        <a :href="item.url" v-for="(item, index) in topbarNavList" :key="index">
          {{ item.name }}
          <span class="sep">|</span>
        </a>
      </div>
      <div class="topbar-cart">
        <a href="javascript:" class="cart-btn">
          <em class="iconfont icon-shoppingb"></em>
          <em>购物车</em>
          <em>( 0 )</em>
        </a>
        <div class="cart-menu">
            <div class="content">购物车中还没有商品，赶紧选购吧！</div>
        </div>

      </div>
      <div class="topbar-info"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["topbarNavList"],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import url("../css/reset.css");
@import url("//at.alicdn.com/t/font_1378167_r4fkvi4y7z.css");
$mainbgc: #333;
$main-Tcolor: #b0b0b0;
$sub-tColor: #ff6700;
$btn-Color: #424242;

.web-topbar {
  height: 40px;
  background-color: $mainbgc;
  font-size: 12px;
  color: $main-Tcolor;
  position: relative;

  .topbar-nav {
    float: left;
    height: 40px;
    line-height: 40px;
    a {
      line-height: 40px;
      display: inline-block;
      &:last-child .sep {
        display: none;
      }
      &:hover {
        color: #fff;
      }
    }
    .sep {
      margin: 0 0.3em;
      color: #424242;
    }
  }

  .topbar-cart {
    float: right;
    width: 120px;
    height: 40px;
    position: relative;
    margin-left: 15px;
    .cart-btn {
      display: block;
      height: 40px;
      line-height: 40px;
      text-align: center;
      background-color: $btn-Color;
      em {
        font-style: normal;
      }
      em:first-child {
        margin-right: 4px;
        font-style: normal;
        font-size: 20px;
        vertical-align: -4px;
      }
      em:nth-child(2) {
        margin-right: 4px;
        line-height: 40px;
      }
      &:hover {
        color: $sub-tColor;
        background-color: #fff;
      }
    }
    .cart-menu {
        position: absolute;
        right: 0;
        top: 40px;
        width: 316px;
        box-shadow: 0 2px 10px rgba($color: #000000, $alpha: .15);
        background-color: #fff;
        color:$btn-Color;
        overflow: hidden;
        transition: height .3s;
        height: 0;
        .content {
            text-align: center;
            line-height: 100px;
        }
    }
    &:hover .cart-menu{
        height: 100px;
    }
    &:hover .cart-btn {
        color: $sub-tColor;
        background-color: #fff;
    }
  }
}
</style>
