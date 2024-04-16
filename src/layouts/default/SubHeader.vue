<template>
  <div v-if="isHome" class="sub-header d-flex align-center">
    <div class="d-flex content justify-space-between align-center w-75">
      <p class="tittle text-text-color-medium d-flex">
        Environment Variables
        <v-badge
          color="footer-background-base"
          class="d-none d-sm-flex"
          content="Beta"
          inline
        ></v-badge>
      </p>
      <v-btn color="primary-color-base" :flat="true" @click="goToAnotherPage"
        >Add Variable</v-btn
      >
    </div>
  </div>
  <div v-if="!isHome" class="sub-header d-flex align-center">
    <div class="d-flex content flex-column justify-start w-75">
      <router-link
        to="/"
        class="text-text-color-medium text-decoration-none d-flex align-center"
      >
        <span class="sub-tittle">Environment Variables</span>
        <v-badge
          color="footer-background-base"
          class="d-none d-sm-flex"
          content="Beta"
          inline
        ></v-badge
      ></router-link>

      <p class="tittle text-text-color-medium">Variable</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    isHome() {
      const result = this.$route.path !== "/";
      return !result;
    },
  },
  methods: {
    goToAnotherPage() {
      // Use the $router.push() method to navigate to another page
      this.$router.push("/create");
    },
  },
};
</script>
<style>
.sub-header {
  margin-top: 60px;
  height: 90px;
  background-color: #fafafa;
}
.sub-header .content {
  margin: 0 auto;
}
.sub-header .tittle {
  font-size: 30px;
}
.sub-header .sub-tittle {
  font-size: 20px;
}
@media (min-width: 0px) {
  .sub-header .tittle {
    font-size: 25px;
  }
  .sub-header .sub-tittle {
    font-size: 20px;
  }
}
</style>
