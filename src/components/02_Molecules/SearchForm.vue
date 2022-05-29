<template>
<VRWSearchInput v-model:queryValue="titleComputed" />
<button type="submit" v-on:click="search_items">
  Search
</button>
</template>

<script>
import { defineComponent, reactive , computed, ref } from "vue";
import VRWSearchInput from "@/components/01_Atoms/B-VRWSearchInput";

export default defineComponent({
  props: ["type"],
  components: {
    VRWSearchInput
  },
  setup() {
    const title = ref('')
    const titleComputed = computed({
      get: () => title.value,
      set: (value) => (title.value = value),
    })

    const search_items = () => {
      console.log(title.value)
      //const url = `/${props.type}?rocket=${form.value.name}`
      //console.log("search_items", url);
      //window.location.href = url
    };

    return {
      search_items,
      titleComputed,
    }
  },
});
</script>

