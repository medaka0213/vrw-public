<template lang="pug">
DafaultLayout
  SearchForm(type="launch")
  LaunchListBlock(
    :items="store.state.item.launch",
    v-if="store.state.item.isReceived"
  )
  span(v-else) loading...
</template>

<script>
import { defineComponent, reactive, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

import LaunchListBlock from "@/components/03_Organisms/LaunchListBlock";
import DafaultLayout from "@/components/04_Templates/DefaultLayout.vue";
import SearchForm from "@/components/02_Molecules/SearchForm";
import store from "@/store";

export default defineComponent({
  components: {
    LaunchListBlock,
    DafaultLayout,
    SearchForm,
  },
  setup() {
    const route = useRoute();
    async function getItems() {
      await store.commit("item/set_received", false);
      await store.dispatch("item/get_items", {
        type: "launch", params: route.query
      });
      await store.commit("item/set_received", true);
    }
    onMounted(() => {
      getItems();
    });
    return {
      store,
      getItems,
    };
  },
});
</script>
