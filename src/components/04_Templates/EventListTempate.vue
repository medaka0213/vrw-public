<template lang="pug">
DafaultLayout
  EventListBlock(
    :items="store.state.item.event",
    v-if="store.state.item.isReceived"
  )
  span(v-else) loading...
</template>

<script>
import { defineComponent, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

import EventListBlock from "@/components/03_Organisms/EventListBlock";
import DafaultLayout from "@/components/04_Templates/DefaultLayout.vue";

import store from "@/store";

export default defineComponent({
  name: "App",
  components: {
    EventListBlock,
    DafaultLayout,
  },
  setup() {
    const route = useRoute();
    async function getItems() {
      await store.commit("item/set_received", false);
      await store.dispatch("item/get_items", {
        type: "event", params: route.query
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
