<template>
  <ul class="d3-sidebar">
    <li
      v-for="(item, index) in sideBars"
      :key="index"
      :title="item.name">
      <router-link :to="'/' + item.name">
        {{item.display}}
      </router-link>
    </li>
  </ul>
</template>

<script>
import sideBars from '../../router/routes'

export default {
  data () {
    return {
      sideBars
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/common.scss';
.d3-sidebar {
  position: absolute;
  top: $height;
  left: 0;
  width: $sideBarWidth + px;
  border-right: 1px solid $borderColor;
  height: calc(100vh - #{$height});

  li {
    border-bottom: 1px solid #f0f0f0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    a {
      color: #333333;
      font-size: 14px;
      font-weight: bold;
      text-decoration: none;
      display: block;
      padding: 6px 0;
      padding-left: 20px;
    }

    a.router-link-active {
      background-color: $baseColor;
      color: #fff;
    }
  }
}
</style>
