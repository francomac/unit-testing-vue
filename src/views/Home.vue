<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <AppHeader />
    <RandomNumber />
  </div>
</template>

<script>
// @ is an alias to /src
import AppHeader from "@/components/AppHeader.vue";
import RandomNumber from "@/components/RandomNumber.vue";

export default {
  name: "Home",
  components: {
    AppHeader,
    RandomNumber
  },
};
</script>
