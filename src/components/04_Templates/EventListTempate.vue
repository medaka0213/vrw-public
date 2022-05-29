<template lang="pug">
DafaultLayout
  MissionSearchForm(type="event")
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
import MissionSearchForm from "@/components/02_Molecules/MissionSearchForm";

import { time_between}  from "@/actions/time";

import store from "@/store";

export default defineComponent({
  name: "App",
  components: {
    EventListBlock,
    DafaultLayout,
    MissionSearchForm
  },
  setup() {
    const route = useRoute();
    let query = route.query

    async function getItems() {
      await store.commit("item/set_received", false);
      await store.dispatch("item/get_items", {
        type: "event", params: query
      });
      await store.commit("item/set_received", true);
    }
    onMounted(() => {
      if (!Object.keys(query).length) {
        query = {
          limit: 100,
          datetime: time_between("upcoming", 12).join("..."),
        }
        const url = `/event?${Object.keys(query).map(key => `${key}=${query[key]}`).join("&")}`
        window.location.href = url
      } else {
        getItems();
      }
    });
    return {
      store,
      getItems,
    };
  },
});
</script>
