<template>
  <div id="app">
    <div id="nav" class="nav">
      <router-link class="nav__link" activeClass="_active" to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/users">Users</router-link>|
      <router-link to="/buttons">Buttons</router-link>|
      <router-link to="/json-placeholder">Json Placholder</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  methods: {
    doThomething() {
      console.log("click");
    }
  }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  .nav {
    &__link {
      &._active {
        
      }
    }
  }
}
</style>
