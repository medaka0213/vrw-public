<template lang="pug">
DafaultLayout
  MissionSearchForm(type="launch", :initialQuery="query")
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
import MissionSearchForm from "@/components/02_Molecules/MissionSearchForm";
import store from "@/store";
import { time_between}  from "@/actions/time";

export default defineComponent({
  components: {
    LaunchListBlock,
    DafaultLayout,
    MissionSearchForm,
  },
  setup() {
    const route = useRoute();
    let query = route.query
    if (!Object.keys(query).length) {
      query = {
        limit: 100,
        datetime: time_between("upcoming", 12).join("..."),
      }
    }
    async function getItems() {
      await store.commit("item/set_received", false);
      await store.dispatch("item/get_items", {
        type: "launch", params: query
      });
      await store.commit("item/set_received", true);
    }
    onMounted(() => {
      getItems();
    });
    return {
      query,
      store,
      getItems,
    };
  },
});
</script>
