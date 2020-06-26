<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  }
}
</script>>
<style lang="scss">
@import './styles/common.scss';

*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body{
  font-size: 14px;
  width: 100%;
  line-height: 1.5;
  font-family: PingFang SC,Tahoma,Helvetica,Arial,Hiragino Sans GB,Microsoft YaHei,Heiti SC,WenQuanYi Micro Hei,sans-serif;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: 100%;
}
</style>
