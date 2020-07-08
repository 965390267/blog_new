<template>
  <div class="badge">
    <slot></slot>
    <sub class="badge-count" :style="{background:bgcolor}">{{count}}</sub>
  </div>
</template>
<script>
export default {
  props: {
    count: {
      type: String,
      default: ""
    },
    bgcolor: {
      type: String,
      default: "#2d8cf0"
    }
  }
};
</script>
<style lang="scss" scoped>
.badge {
  position: relative;
  display: inline-block;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin: 0.5rem;
  padding: 0.2rem;
  transition: opacity 0.6s;
  .badge-count{
      font-family: "Monospaced Number";
    line-height: 1;
    vertical-align: middle;
    position: absolute;
    transform: translateX(50%);
    top: -10px;
    right: 0;
    height: 20px;
    border-radius: 10px;
    min-width: 20px;
    background: #ed4014;
    border: 1px solid transparent;
    color: #fff;
    line-height: 18px;
    text-align: center;
    padding: 0 6px;
    font-size: 12px;
    white-space: nowrap;
    transform-origin: -10% center;
    z-index: 10;
    box-shadow: 0 0 0 1px #fff;
  }
}
</style>
