<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!--<div v-for="item in fdata" :key="item">
      <div v-for="itemm in item" :key="itemm">
        <Element :textt="itemm" />
      </div>
    </div>-->
    <div class="o-container">
      <MarkdownText
        :md="markdown"
      />
    </div>
  </div>
</template>

<script>
//let HelloWorld = import('./components/HelloWorld.vue')
//const HelloWorld2 = () => import('./components/HelloWorld2.vue')
import lazyLoadComponent from './utils/lazy-load-component';
// Initially load the BannerImage and IntroText components
// because they're immediately visible above the fold.
import SkeletonBox from './components/SkeletonBox.vue';
const defaultOptions = {
  loading: SkeletonBox,
  loadingData: {
    props: {
      width: `100%`,
      height: `20em`,
    },
  },
};

export default {
  name: 'App',
  components: {
    MarkdownText: lazyLoadComponent({
      ...defaultOptions,
      componentFactory: () => import(`./components/MarkdownText.vue`),
    }),
  },
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
