<template>
<div>
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
</div>
</template>

<script>
import Header from "./component/Header."
import Footer from "./component/Footer"
export default {
  components : {
    appHeader : Header,
    appFooter : Footer
  },
  created() {
    this.$store.dispatch("initAuth")
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
body{
  background-color: #f2f2f2;
  margin-bottom:100px ;
}
</style>
