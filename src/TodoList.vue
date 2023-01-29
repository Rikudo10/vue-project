<script>
import ListItemComponent from "./listitemcomponent.vue";
export default {
  props: {
    data: { type: Array, required: true },
  },
  components: {
    ListItemComponent,
  },
};
</script>

<template>
  <ul>
    <ListItemComponent v-for="item in data" :key="item.index" :itemData="item" />
  </ul>
</template>
