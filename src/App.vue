<template>
  <el-container id="app">
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</template>

<script>


export default {
  name: 'App'
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
