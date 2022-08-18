<template lang="pug">
DafaultLayout
  h1.pl-3 その他イベント検索
  MissionSearchForm(type="event" :initialQuery="query")
  MissionListBlock(
    :items="store.state.item.event",
    v-if="store.state.item.isReceived"
  )
  span(v-else) loading...
</template>

<script>
import { defineComponent, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

import MissionListBlock from "@/components/03_Organisms/MissionListBlock";
import DafaultLayout from "@/components/04_Templates/DefaultLayout.vue";
import MissionSearchForm from "@/components/02_Molecules/MissionSearchForm";

import { time_between}  from "@/actions/time";

import store from "@/store";

export default defineComponent({
  name: "App",
  components: {
    MissionListBlock,
    DafaultLayout,
    MissionSearchForm
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
        type: "event", params: query
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
