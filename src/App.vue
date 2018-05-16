<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
 *{
        margin:0px;
        padding:0px;
       
      }
      html,body,#app{
        width:100%;
        height:100%;
        background:#EFF0F4;
      }
</style>
