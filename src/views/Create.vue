<template>
  <section class="d-flex flex-column justify-space-between h-100">
    <div class="content-main">
      <v-alert type="success" variant="outlined" closable v-if="msgAlert">
        {{ msgAlert }}
      </v-alert>
      <div class="content-text">
        <p class="tittle primary-color-base'">Define Key and Value</p>
        <span class="sub-tittle"
          >Enter a key-value pair to create environment variables. These
          variables can be reused across your applications, saving you time and
          effort in configuration.
        </span>
      </div>
      <v-form>
        <div>
          <v-label text="Key"></v-label>
          <v-text-field
            flat="false"
            placeholder="e.g. VARIABLE_NAME"
            label=""
            :rules="[rules.required]"
            v-model="this.variable.key"
            variant="solo-filled"
            :error-messages="this.error.key"
          ></v-text-field>
        </div>
        <div>
          <v-label text="Value"></v-label>
          <v-text-field
            flat="false"
            placeholder="Value"
            label=""
            :rules="[rules.required]"
            v-model="this.variable.value"
            variant="solo-filled"
            :error-messages="this.error.value"
          ></v-text-field>
        </div>
        <div class="d-flex">
          <v-switch
            label="Secret"
            inline="true"
            v-model="this.variable.secret"
            color="text-cancel"
            prepend-icon="mdi-alert-circle"
          ></v-switch>
        </div>
      </v-form>
    </div>
    <create-actions @submit="onSubmit" ></create-actions>
  </section>
</template>
<script>
import service from "@/services/variables.service";
import CreateActions from "@/components/CreateActions.vue";
export default {
  components: {
    "create-actions": CreateActions,
  },
  data() {
    return {
      rules: {
        required: (value) => !!value || "Field is required",
      },
      variable: {
        key: "",
        value: "",
        secret: false,
      },
      onSubmit: null,
      error: {
        key: "",
        value: "",
      },
      msgAlert: "",
    };
  },
  mounted() {
    if (this.$route.path.includes("create")) {
      this.onSubmit = this.createVariable;
    }
    if (this.$route.path.includes("edit")) {
      this.getVariable(this.$route.params.id);
      this.onSubmit = this.editVariable;
    }
  },
  methods: {
    setError(error) {
      this.error.key = error.key ? error.key[0] : "";
      this.error.value = error.value ? error.value[0] : "";
    },
    async createVariable() {
      this.msgAlert = ''
      try {
        this.$store.commit("setLoading", true);
        this.$store.commit("setLoadingButton", true);
        await service.post("/variables", this.variable);
        this.msgAlert = "Environment variable created.";
      } catch (error) {
        this.setError(error.response.data);
      } finally {
        this.$store.commit("setLoading", false);
        this.$store.commit("setLoadingButton", false);
      }
    },
    async editVariable() {
      this.msgAlert = ''
      try {
        this.$store.commit("setLoading", true);
        this.$store.commit("setLoadingButton", true);
        await service.put(`/variables/${this.variable.uuid}`, this.variable);
        this.msgAlert = "Environment variable updated.";
      } catch (error) {
        this.setError(error.response.data);
      } finally {
        this.$store.commit("setLoadingButton", false);
        this.$store.commit("setLoading", false);
      }
    },
    async getVariable(uuid) {
      try {
        this.$store.commit("setLoading", true);
        const response = await service.get(`/variables/${uuid}`);
        this.variable = { ...response.data };
      } catch (error) {
        console.log(error);
      } finally {
        this.$store.commit("setLoading", false);
      }
    },
  },
};
</script>
<style>
@media (min-width: 0px) {
  form,
  .content-text {
    width: 100%;
  }
  .content-text .tittle {
    color: #f3652b;
    font-size: 20px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    margin-bottom: 15px;
  }
  .content-text .sub-tittle {
    color: #666666;
  }
  .content-text {
    margin-bottom: 15px;
  }
  .save-btn {
    margin-right: 15px;
  }
  .create-actions {
    height: 100px;
    gap: 15px;
  }
}
@media (min-width: 1000px) {
  form,
  .content-text {
    width: 40%;
  }
}
</style>
