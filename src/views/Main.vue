<template>
  <div class="d3-container">
    <Header />
    <SideBar />
    <div class="d3-content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from './Header'
import SideBar from './SideBar'
export default {
  data () {
    return {
    }
  },
  components: {
    Header,
    SideBar
  }
}
</script>

<style lang="scss">
@import '../styles/common.scss';
.d3-container {
  position: relative;
  .d3-content {
    padding: 15px 15px 0 calc(#{$sideBarWidth + 15}px);
  }
}
</style>
