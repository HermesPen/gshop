<template>
  <div>
    <section class="msite">
      <!--首页头部-->
      <Header :title="LocationCity">
        <router-link class="header_search" slot="left" to="/search">
          <i class="iconfont icon-sousuo"></i>
        </router-link>
        <router-link
          class="header_login"
          slot="right"
          :to="userInfo.id ? '/userinfo' : '/login'"
        >
          <span class="header_login_text">{{
            userInfo.name || "登录/注册"
          }}</span>
        </router-link>
      </Header>
      <!--首页导航-->
      <nav class="msite_nav">
        <div class="swiper-container" v-if="categorys.length">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="(categorys, index) in categorysArr"
              :key="index"
            >
              <a
                href="javascript:;"
                class="link_to_food"
                v-for="(category, index) in categorys"
                :key="index"
              >
                <div class="food_container">
                  <img :src="baseImageUrl + category.image_url" />
                </div>
                <span>{{ category.title }}</span>
              </a>
            </div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
        </div>
        <div v-else>
          <img src="../assets/images/main_back.svg" alt="" />
        </div>
      </nav>
      <!--首页附近商家-->
      <Shoplist />
    </section>
  </div>
</template>
<script>
import Header from "@/components/header";
import Shoplist from "@/components/shoplist";
import Swiper from "swiper";
import BMap from "BMap";
import { mapState, mapActions } from "vuex";
import "swiper/swiper.scss";
export default {
  data() {
    return {
      LocationCity: "正在定位",
      baseImageUrl: "https://fuss10.elemecdn.com",
    };
  },

  components: {
    Header,
    Shoplist,
    Swiper,
  },
  watch: {
    categorys(val) {
      this.$nextTick(() => {
        new Swiper(".swiper-container", {
          loop: true, // 循环模式选项
          pagination: {
            el: ".swiper-pagination",
          },
        });
        this.city(); // 调用获取地理位置
      });
    },
  },

  methods: {
    city() {
      //定义获取城市方法
      const geolocation = new BMap.Geolocation();
      var _this = this;
      geolocation.getCurrentPosition(
        function getinfo(position) {
          let city = position.address.city; //获取城市信息
          let province = position.address.province; //获取省份信息
          _this.LocationCity = city;
        },
        function (e) {
          _this.LocationCity = "定位失败";
        },
        { provider: "baidu" }
      );
    },
    ...mapActions(["getCategorys"]),
  },

  computed: {
    ...mapState(["categorys", "userInfo"]),
    categorysArr() {
      const { categorys } = this;
      const arr = [];
      let newarr = [];
      categorys.forEach((c) => {
        // 如小数组已满8个 创建一个新的小数组
        if (newarr.length === 8) {
          newarr = [];
        }
        // 如小数组是空 保存进大数组中
        if (newarr.length === 0) {
          arr.push(newarr);
        }
        // 将当前分类保存进小数组中
        newarr.push(c);
      });
      return arr;
    },
  },

  created() {
    this.getCategorys();
  },

  mounted() {
    // this.$store.dispatch("getCategorys");
  },
};
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
@import '../assets/css/mixins.styl';

.msite { // 首页
  width: 100%;

  .msite_nav {
    bottom-border-1px(#e4e4e4);
    margin-top: 45px;
    height: 200px;
    background: #fff;

    .swiper-container {
      width: 100%;
      height: 100%;

      .swiper-wrapper {
        width: 100%;
        height: 100%;

        .swiper-slide {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-wrap: wrap;

          .link_to_food {
            width: 25%;

            .food_container {
              display: block;
              width: 100%;
              text-align: center;
              padding-bottom: 10px;
              font-size: 0;

              img {
                display: inline-block;
                width: 50px;
                height: 50px;
              }
            }

            span {
              display: block;
              width: 100%;
              text-align: center;
              font-size: 13px;
              color: #666;
            }
          }
        }
      }

      .swiper-pagination {
        >span.swiper-pagination-bullet-active {
          background: #02a774;
        }
      }
    }
  }
}
</style>