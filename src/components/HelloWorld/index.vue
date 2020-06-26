<template>
  <div ref="hw">
    hello world
  </div>
</template>

<script>
export default {
  mounted () {
    this.dt = this.d3.select(this.$refs.hw)
    this.dt.text('hello world from d3')
  }
}
</script>

<style lang="scss" scoped>

</style>
