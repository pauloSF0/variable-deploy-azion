<template>
  <div class="d-flex bg-search-color create-actions justify-end align-center">
    <router-link to="/" class="text-text-cancel cancel-btn">Cancel</router-link>
    <v-btn :flat="true" :loading="buttonLoading" :disabled="buttonLoading" type="submit" color="primary-color-base save-btn" @click="submit">Save</v-btn>
  </div>
</template>
<script>
export default {
  name: "CreateActions",
  computed: {
    buttonLoading() {
      return this.$store.state.buttonLoading;
    },
  },
  methods: {
    submit() {
      this.$emit('submit');
    }
  }
};
</script>
<style>
.save-btn {
  margin-right: 15px;
}
.create-actions {
  height: 100px;
  gap: 15px;
}
</style>
