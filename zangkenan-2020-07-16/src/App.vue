<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>


<script>

export default {
  mounted() {
    // 监听resize方法
    window.addEventListener("resize", this.renderResize, false);
  },
  methods:{
     renderResize() {
      // 判断横竖屏
      let width = document.documentElement.clientWidth;
      let height = document.documentElement.clientHeight;
      // alert(width+"宽高"+height)
      if (width > height) {
        this.$router.push('/about')
      } else {
        this.$router.push('/')
      }
      // 做页面适配
      // 注意：renderResize方法执行时虚拟dom尚未渲染挂载，如果要操作vue实例，最好在this.$nextTick()里进行。
    }
  },
 
}
</script>

<style>
</style>
