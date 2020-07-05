   <template>
  <div class="home">
    <Header></Header>
    <!-- <div id="nav">
      <router-link to="/Home">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Header from '@/components/header/header.vue'

@Component({
  components:{
    Header
  }
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>
<style lang="scss">
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
   