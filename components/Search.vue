<template>
  <v-banner justify="center" class="ma-1" sticky>
    <v-btn-toggle tile dense>
      <v-row>
        <v-btn
          class="ma-1"
          v-for="cat in categories"
          :key="cat.name"
          rounded
          @click="toggleSearch(cat)"
        >
          {{ cat.name }}
          <v-icon v-if="cat.selected" class="mr-1">mdi-close</v-icon>
        </v-btn>
      </v-row>
    </v-btn-toggle>
    <v-text-field
      clearable
      v-model="searchString"
      @click:clear="clearSearch()"
      @input="setSearch()"
    ></v-text-field>
  </v-banner>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    categories: {
      type: Array as () => { selected: Boolean; name: String }[],
      default: [],
    },
    search: {
      type: String,
      default: '',
    },
  },
  methods: {
    toggleSearch(selectedCategory: { selected: Boolean; name: String }) {
      this.searchString = selectedCategory.name
      this.emitUpdate()
    },
    setSearch() {
      this.emitUpdate()
    },
    clearSearch() {
      this.searchString = ''
      this.emitUpdate()
    },
    emitUpdate(): void {
      this.$emit('updated', this.searchString)
    },
  },
  data(): any {
    return {
      searchString: '',
    }
  },
})
</script>