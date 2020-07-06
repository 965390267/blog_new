declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

// shims-vue.d.ts 新增如下
declare module 'vue/types/vue' {
  interface Vue {
    // ...
    // 以下是在main.ts中挂载到Vue.prototype上的变量
    $api: any;
    $mock: any;
    $configs: any;
  }
}
