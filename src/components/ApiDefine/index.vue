<template>
  <div class="api-define">
    <div class="api-define__title">{{title}}</div>
    <ul class="api-define__list">
      <li v-for="(item, index) in list" :key="index">
        <span>{{item.title}}: </span>
        <span>{{item.content}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ApiDefine',
  props: {
    title: {
      type: String,
      default () {
        return '基本定义'
      }
    },
    list: {
      type: [Array],
      default () {
        return [
          {
            title: '默认标题',
            content: '默认内容'
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/common.scss';
.api-define {
  padding: 15px;
  border: 1px dashed #333f48;
  margin-bottom: 10px;

  &__title {
    font-size: 16px;
    color: $baseColor;
  }

  &__list {
    list-style: inside;
    li {
      margin-bottom: 2px;
      span:nth-child(2) {
        color: $title;
      }
    }
  }
}
</style>
