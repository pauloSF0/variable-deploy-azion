<template>
  <v-app-bar color="header-background-base" prominent>
    <v-app-bar-nav-icon
      variant="text"
      @click.stop="drawer = !drawer"
    ></v-app-bar-nav-icon>

    <v-toolbar-title
      ><img src="../../assets/icons/Brand.svg" alt=""
    /></v-toolbar-title>

    <v-spacer></v-spacer>

    <v-chip class="ma-2 d-none d-sm-flex" color="border-color-strong" variant="outlined">
      <v-icon start icon="mdi-circle" color="success" size="sm"></v-icon>
      Status: All System Operational
    </v-chip>
    <div class="d-flex actions-bar">
      <img src="../../assets/icons/helper.svg" alt="" />

      <v-avatar
        icon="$vuetify"
        image="../../assets/icons/icon.svg"
        size="25"
      ></v-avatar>
    </div>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" temporary>
    <v-list-item
      prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
      title="John Leider"
    ></v-list-item>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-view-dashboard"
        title="Home"
        value="home"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-forum"
        title="About"
        value="about"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    items: [
      {
        title: "Foo",
        value: "foo",
      },
      {
        title: "Bar",
        value: "bar",
      },
      {
        title: "Fizz",
        value: "fizz",
      },
      {
        title: "Buzz",
        value: "buzz",
      },
    ],
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
<style soped>
.actions-bar {
  gap: 10px;
  margin-right: 20px;
}

</style>
