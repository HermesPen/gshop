<template>
  <div class="footer_guide">
    <span
      class="guide_item"
      :class="{ on: '/main' === $route.path }"
      @click="goTo('/main')"
    >
      <span class="item_icon">
        <i class="iconfont icon-waimai"></i>
      </span>
      <span>外卖</span>
    </span>
    <a
      href="javascript:;"
      class="guide_item"
      :class="{ on: '/search' === $route.path }"
      @click="goTo('/search')"
    >
      <span class="item_icon">
        <i class="iconfont icon-search"></i>
      </span>
      <span>搜索</span>
    </a>
    <a
      href="javascript:;"
      class="guide_item"
      :class="{ on: '/order' === $route.path }"
      @click="goTo('/order')"
    >
      <span class="item_icon">
        <i class="iconfont icon-dingdan"></i>
      </span>
      <span>订单</span>
    </a>
    <a
      href="javascript:;"
      class="guide_item"
      :class="{ on: '/profile' === $route.path }"
      @click="goTo('/profile')"
    >
      <span class="item_icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span>我的</span>
    </a>
  </div>
</template>

<script>
export default {
  methods: {
    goTo(path) {
      this.$router.replace(path);
    },
  },
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '../assets/css/mixins.styl'
</style>