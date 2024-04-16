<template>
  <v-app>
    <v-progress-linear
      :active="isLoading"
      :indeterminate="isLoading"
      v-if="isLoading"
      absolute
      bottom
      color="primary-color-base"
    ></v-progress-linear>
    <default-bar />
    <sub-header></sub-header>
    <v-main style="--v-layout-top: 20px;">
      <router-view />
    </v-main>
    <footer-component></footer-component>
  </v-app>
</template>

<script>
import DefaultBar from "./NavBar.vue";
import SubHeader from "./SubHeader.vue";
import FooterComponent from "./FooterComponent.vue";
export default {
  name: "DefaultView",
  components: {
    DefaultBar,
    SubHeader,
    FooterComponent,
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
  },
};
</script>
