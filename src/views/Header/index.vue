<template>
  <div class="d3-header">
    <div>
      <p>D3.js学习</p>
      <p>记录学习d3.js历程</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../../styles/common.scss';
.d3-header {
  background-color: #fff;
  border-bottom: 1px solid #e8e8e8;
  font-weight: bolder;
  display: flex;
  align-items: center;
  height: $height;
  padding-left: 20px;

  p:nth-child(1) {
    font-size: 16px;
    color: $baseColor;
  }
  p:nth-child(2) {
    font-size: 12px;
    color: $text;
  }
}
</style>
