<template>
  <v-row justify="center">
    <v-dialog v-model="isOpen" width="800">
      <v-card>
        <v-card-title>
          <span class="text-h5">Delete Service</span>
        </v-card-title>
        <v-card-text>
          This item "{{ value.key }}" can not be recovered
          <v-container>
            <v-text-field
              flat="false"
              placeholder="Value"
              label=""
              :rules="[rules.required]"
              v-model="this.variable.value"
              variant="solo-filled"
              :error-messages="this.error.value"
            ></v-text-field>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green-darken-1" variant="text" @click="closeModal">
            Cancel
          </v-btn>
          <v-btn
            color="green-darken-1"
            variant="text"
            @click="console.log('object')"
          >
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  props: {
    value: {
      type: Object,
      default: null,
    },
    dialogVisible: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isOpen() {
      return !!this.value;
    },
  },
  methods: {
    closeModal() {
      console.log("close");
      this.$emit('update:value', null);
    },
  },
};
</script>
