<template>
  <div id="app">
    <img loading="lazy" alt="Vue logo" src="./assets/logo.png" />
    <!--<div v-for="item in fdata" :key="item">
      <div v-for="itemm in item" :key="itemm">
        <Element :textt="itemm" />
      </div>
    </div>-->
    <component v-bind:is="comp" msg="Hello"></component>
    <button v-on:click="comp = 'HelloWorld2'">Hi</button>
    <button v-on:click="comp = 'HelloWorld'">Bye</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    Element,
    HelloWorld: () => import( /* webpackPreload: true */ './components/HelloWorld.vue'),
    HelloWorld2: () => import( /* webpackPreload: true */ './components/HelloWorld2.vue'),
  },
  data: function () {
    return {
      //fdata: jd().jsonData.then(function(result) {return}),
      comp: "HelloWorld"
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: beige;
  margin-top: 60px;
}
body {
  background-color: black;
}

</style>
