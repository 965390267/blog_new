<template>
  <div class="Header">
    <!-- <Row type="flex"> -->
    <!-- logo介绍 -->
    <!-- <Col class="logo" :xl="6" :lg="4" :md="24" :sm="24" :xs="24" order="1"> -->
    <div class="z-container z-col z-col-4 z-col-12">
      <Logo />
    </div>
    <!-- </Col> -->
    <!-- 顶部导航菜单 -->
    <!-- <Col v-show="active" class="link_meta" :xl="18" :lg="20" :md="0" :sm="0" :xs="0" order="2"> -->
    <div class="z-container z-col z-col-0 z-col-1">
      <TabBarLink />
    </div>
    <!-- </Col> -->
    <!-- </Row> -->
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Logo from "./LoGo.vue";
import TabBarLink from "./TabBarLink.vue";

@Component({
  components: {
    Logo,
    TabBarLink
  }
})
export default class Header extends Vue {
  get active() {
    return this.$route.name !== "home";
  }
}
</script>

<style lang="scss" scoped>
.Header {
  position: sticky;
  width: 100%;
  height: 3rem;
  top: 0;
  z-index: 999;
  transition: all 0.6s;
  background: linear-gradient(#333, #456);
  animation: animate 1s;

  .moon,
  .night {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: -1;
  }
  .night {
    background: url("../../assets/images/night.gif") center;
  }
  .moon {
    background: url("../../assets/images/light.jpg") center;
  }

  @keyframes animate {
    0% {
      opacity: 0;
      transform: translateY(-50px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .LoadingStyle {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.6);
  }
}
.adminCssStyle {
  background: #fff !important;
}
</style>
