   <template>
  <div class="home">
    <Light @changeBackground="changeBG" />
    <Header></Header>
    <!-- <div id="nav">
      <router-link to="/Home">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view class="router_content"></router-view>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Header from "@/components/header/header.vue";
import Light from "@/components/light/index.vue";
@Component({
  components: {
    Header,
    Light
  }
})
export default class Index extends Vue {
  @Prop() private msg!: string;
  private inOn: any = false;
  changeBG(val: boolean): void {
    console.log(val)
    this.inOn = val;
  }
}
</script>
<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
}
.router_content {
  animation: animate 2s;
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
</style>
   