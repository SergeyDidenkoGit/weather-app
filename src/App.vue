<template>
  <navbar></navbar>
  <div class="content">
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #eeeeee;
}

#app {
  max-width: 100%;
  height: 100vh;
}
</style>
