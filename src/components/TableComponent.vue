<template>
  <v-table>
    <thead>
      <tr class="header-color">
        <th class="text-left">
          <div class="row-text">
            Key
            <svg
              class="hs-dropdown-open:rotate-180 w-2.5 h-2.5 text-gray-600 text-primary-color-base"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </th>
        <th class="text-left">
          <div class="row-text">
            Value
            <svg
              class="hs-dropdown-open:rotate-180 w-2.5 h-2.5 text-gray-600 text-primary-color-base"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </th>
        <th class="text-left">
          <div class="row-text">
            Last editor
            <svg
              class="hs-dropdown-open:rotate-180 w-2.5 h-2.5 text-gray-600 text-primary-color-base"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </th>
        <th class="text-left">
          <div class="row-text">
            Last modified
            <svg
              class="hs-dropdown-open:rotate-180 w-2.5 h-2.5 text-gray-600 text-primary-color-base"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </th>
        <th class="text-left"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in data" :key="index">
        <td @click="goEdit(item.uuid)">{{ item.key }}</td>
        <td @click="goEdit(item.uuid)">{{ item.value }}</td>
        <td @click="goEdit(item.uuid)">{{ item.last_editor }}</td>
        <td @click="goEdit(item.uuid)">{{ item.updated_at }}</td>
        <td>
          <v-btn
            icon="mdi-delete"
            color="text-cancel"
            style="
              td:not(:hover) {
                --v-theme-primary-color-base: transparent;
              }
            "
            variant="text"
            @click="selecetVariableToDelete(item)"
          >
          </v-btn>
        </td>
      </tr>
    </tbody>
  </v-table>
  <v-row justify="center">
    <v-dialog v-model="openModal" width="800px" height="350px" >
      <v-card height="350px">
        <v-card-title>
          <span class="text-h5">Environment Variable</span>
        </v-card-title>
        <v-card-text class="d-flex flex-column justify-center">
          <v-container>
            This item "{{ deleteVariable.key }}" can not be recovered
          </v-container>
          <v-container>
            <v-text-field
              flat="false"
              placeholder="delete"
              :label="label"
              variant="solo-filled"
              v-model="deleteType"
            ></v-text-field>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="text-text-cancel"
            @click="selecetVariableToDelete({})"
          >
            Cancel
          </v-btn>
          <v-btn color="primary-color-base" variant="elevated" :flat="true"  @click="destroyVariable" :disabled="!canDelete">
            Delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  name: "TableComponent",
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      deleteVariable: null,
      openModal: false,
      label: 'Type "delete” to confirm',
      deleteType: ''
    };
  },
  computed: {
    canDelete() {
      return this.deleteType === 'delete'
    }
  },
  methods: {
    goEdit(uuid) {
      this.$router.push({ path: `/edit/${uuid}`, params: { uuid } });
    },
    selecetVariableToDelete(variable) {
      this.openModal = false;
      if (Object.entries(variable).length) {
        this.openModal = true;
      }
      this.deleteVariable = variable;
    },
    destroyVariable() {
      this.$emit("deleteVariable", this.deleteVariable);
      this.selecetVariableToDelete({});
    },
  },
};
</script>
<style lang="scss">
.row-text {
  color: #f3652b !important;
  display: flex !important;
  align-items: center !important;
  gap: 10px;
}
.header-color {
  border-color: #f3652b !important;
}
td {
  height: 75px !important;
}
tr:hover {
  background-color: #fafafa;
  cursor: pointer;
}
tr:not(:hover) {
  --v-theme-primary-color-base: transparent;
  /* display: none; */
}

table {
  margin-top: 25px;
}
</style>
