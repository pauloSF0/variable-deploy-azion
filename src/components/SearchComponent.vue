<template>
  <v-text-field
    density="compact"
    variant="solo"
    label="Search"
    append-inner-icon="mdi-magnify"
    single-line
    hide-details
    :flat="true"
    v-model="this.value"
    bg-color="search-color"
    @keyup.enter="search()"
    @click:append-inner="search()"
  ></v-text-field>
</template>
<script>
export default {
  name: "SearchComponent",
  data() {
    return {
      value: "",
    };
  },
  methods: {
    search() {
      console.log("called");
      this.$emit("onSearch", this.value);
    },
  },
};
</script>
