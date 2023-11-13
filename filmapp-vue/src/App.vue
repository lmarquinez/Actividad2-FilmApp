<template>
  <headerNav />
  <formInfo />
  <filmList />
  <footerEnd />
</template>

<script>
import headerNav from './components/headerNav.vue';
import formInfo from './components/formInfo.vue';
import filmList from './components/filmList.vue';
import footerEnd from './components/footerEnd.vue';

export default {
  name: 'FilmApp',
  components: {
    headerNav,
    formInfo,
    filmList,
    footerEnd
  }
}
</script>

<style lang="scss">
html,
body {
  height: 100%;
}

body {
  margin: 0;
  font-family: Roboto, "Helvetica Neue", sans-serif;
}


@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css');
</style>
