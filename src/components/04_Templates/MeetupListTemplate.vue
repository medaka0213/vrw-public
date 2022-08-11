<template lang="pug">
DafaultLayout
  MeetupSearchForm(type="meetup", :initialQuery="query")
  MeetupListBlock(
    :items="store.state.item.meetup",
    v-if="store.state.item.isReceived"
  )
  span(v-else) loading...
</template>

<script>
import { defineComponent, reactive, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

import MeetupListBlock from "@/components/03_Organisms/MeetupListBlock";
import DafaultLayout from "@/components/04_Templates/DefaultLayout.vue";
import MeetupSearchForm from "@/components/02_Molecules/MeetupSearchForm";
import store from "@/store";
import { time_between}  from "@/actions/time";

export default defineComponent({
  components: {
    MeetupListBlock,
    DafaultLayout,
    MeetupSearchForm,
  },
  setup() {
    const route = useRoute();
    let query = route.query
    if (!Object.keys(query).length) {
      query = {
        limit: 100,
        datetime: time_between("upcoming", 3).join("..."),
      }
    }
    async function getItems() {
      await store.commit("item/set_received", false);
      await store.dispatch("item/get_items", {
        type: "meetup", params: query
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
