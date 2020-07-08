<template>
  <div class="tag" :style="{background:bgcolor,border:'1px solid '+borderColor}"> 
    <span class="tag-txt" :style="{color:color}"><slot></slot></span>
  </div>
</template>
<script>
export default {
  props: {
    color: {
      type: String,
      default: "#515a6e"
    },
    bgcolor: {
      type: String,
      default: "#2d8cf0"
    },
    borderColor: {
      type: String,
      default: "#ffadd2"
    }
  }
};
</script>
<style lang="scss" scoped>
.tag {
  display: inline-block;
    height: 22px;
    line-height: 22px;
    margin: 2px 4px 2px 0;
    padding: 0 8px;
    border: 1px solid #e8eaec;
    border-radius: 3px;
    background: #f7f7f7;
    font-size: 12px;
    vertical-align: middle;
    opacity: 1;
    overflow: hidden;
}
</style>
