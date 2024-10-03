<template>
  <div>
    <the-header title="RememberMe"></the-header>
    <stored-resources :resources="storedResources"></stored-resources>
  </div>
</template>

<script>
import StoredResources from './components/learning-resources/StoredResources.vue';
import TheHeader from './components/layouts/TheHeader.vue';

export default {
  components: {
    StoredResources,
    TheHeader
  },
  data() {
    return {
      storedResources: [
        { 
          id: 'official-guide', 
          title: 'Official Guide', 
          description: 'The official Vue.js documentation',
          link: 'https://vuejs.org'
        },
        { 
          id: 'google', 
          title: 'Google', 
          description: 'Go to Google',
          link: 'https://google.com'
        },
      ],
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>