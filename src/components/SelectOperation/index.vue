<template>
  <div class="select-operation">
    <api-define :list="list" />
    <div class="common-box" ref="so">
      <p></p>
      <p></p>
    </div>
    <div class="common-box" ref="so2">
      <p></p>
      <p></p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {
          title: 'update',
          content: '通过设置data绑定数据, 并得到update部分'
        },
        {
          title: 'enter',
          content: '获取需要插入的选择集(数据个数大于元素个数)的占位符.'
        },
        {
          title: 'exit',
          content: '获取多余的元素的选择集(数据个数小于元素个数).'
        }
      ],
      dataSelect: [
        '测试1',
        '测试2',
        '测试3',
        '测试4'
      ]
    }
  },
  mounted () {
    this.dt = this.d3.select(this.$refs.so).selectAll('p')
    const update = this.dt.data(this.dataSelect)
    const enter = update.enter()

    update.text((d, i) => `我是p标签 - ${d}`)

    const penter = enter.append('div')
    penter.text((d, i) => `我是div标签 - ${d}`)

    this.dt2 = this.d3.select(this.$refs.so2).selectAll('p')
    const update2 = this.dt2.data(this.dataSelect)
    const exit = update2.exit()

    update2.text((d, i) => `我是p标签 - ${d}`)

    exit.text((d, i) => `我是div标签 - ${d}`)
  }
}
</script>

<style lang="scss" scoped>

</style>
