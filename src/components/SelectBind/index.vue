<template>
  <div>
    <api-define :list="list" />
    <div class="common-box" ref="sb">
      <p></p>
      <p></p>
    </div>
    <div class="common-box" ref="sb2">
      <p>我是1</p>
      <p>我是2</p>
      <p>我是3</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {
          title: 'data',
          content: '将元素与数据绑定'
        },
        {
          title: 'datum',
          content: '设置或获取元素绑定的数据集(不进行数据与元素个数的对比)'
        }
      ],
      dataSet: [
        'first',
        'second'
      ],
      dataSet2: [
        {
          name: 'first'
        },
        {
          name: 'second'
        }
      ]
    }
  },
  mounted () {
    this.dt = this.d3.select(this.$refs.sb).selectAll('p')
    this.dt.data(this.dataSet).text((d, i) => `data数据渲染: ${i} - ${d}`)

    this.dt2 = this.d3.select(this.$refs.sb2).selectAll('p')
    this.dt2.datum(this.dataSet2).text((d, i) => `datum数据渲染: ${i} - ${JSON.stringify(d)}`)
  }
}
</script>
