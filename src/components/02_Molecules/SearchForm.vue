<template>
<VRWSearchInput v-model="formComputed" />
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
  setup(props) {
    const form = ref({
      name: "",
    })
    const formComputed = computed({
      get: () => form.value,
      set: (value) => {
        console.log(value)
        form.value = value
      },
    })

    const search_items = () => {
      console.log(form)
      const url = `/${props.type}?rocket=${form.value.name}`
      console.log("search_items", url);
      //window.location.href = url
    };

    return {
      formComputed,
      search_items,
    };
    }
});
</script>

