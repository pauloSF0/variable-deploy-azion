<template>
  <section class="content-main">
    <v-alert :type="alert.type" variant="outlined" style="margin-bottom: 15px;" closable v-if="alert.msgAlert">
      {{ alert.msgAlert }}
    </v-alert>
    <search-component @onSearch="getVariable"></search-component>
    <table-component :data="variables" @deleteVariable="deleteVariable"></table-component>
  </section>
</template>

<script>
import SearchComponentVue from "@/components/SearchComponent.vue";
import TableComponent from "@/components/TableComponent.vue";
import service from "@/services/variables.service";

export default {
  name: "VariableView",
  components: {
    "search-component": SearchComponentVue,
    TableComponent,
  },
  data() {
    return {
      alert: {
        msgAlert: '',
        type: 'success'
      },
      variables: [],
    };
  },
  async mounted() {
    await this.getVariable();
  },
  methods: {
    async getVariable(search = false) {
      this.$store.commit("setLoading", true);
      try {
        const response = await service.get("/variables");
        this.variables = response.data;
        if (search) {
          this.variables = this.filterObjectsByName(search);
        }
      } catch (error) {
        console.log(error);
      } finally {
        this.$store.commit("setLoading", false);
      }
    },
    async deleteVariable({ uuid, key }) {
      this.alert.msgAlert = ''
      this.$store.commit("setLoading", true);
      try {
        await service.delete(`/variables/${uuid}`);
        this.alert.msgAlert = `${key} deleted.`;
        this.getVariable();
      } catch (error) {
        this.alert.msgAlert = error.response.data.detail
        this.alert.type = 'error'
      } finally {
        this.$store.commit("setLoading", false);
      }
    },
    filterObjectsByName(name) {
      const regexPattern = new RegExp(name, "gi");
      return this.variables.filter((obj) => regexPattern.test(obj.key));
    },
  },
};
</script>
