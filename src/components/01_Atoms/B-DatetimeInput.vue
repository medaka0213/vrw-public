<template lang="pug">
.my-1
  input(type="checkbox" :id="'checkbox_'+title" v-model="state.enable")
  label(:for="'checkbox_'+title") {{title}}
.my-1(v-if="state.enable")
  select(v-model="state.mode")
    option(
      v-for="key in Object.keys(modeDict)"
      :key="key"
      :value="key")
      | {{modeDict[key]}}
  input(type="date" v-model="state.value0")

</template>

<script>
export default defineComponent({
  name: 'ChildInput',
  props: {
    queryValue: String,
    title: String,
  },
  emits: ['update:queryValue'],
  setup(props, { emit }) {
    const modeDict = {
      "WEEK_TEIKI": "週 (定期集会で区切る)",
      "WEEK": "週",
      "MONTH": "月",
      "YEAR": "年",
    }
  
    const { queryValue } = toRefs(props)
    const queryValueComputed = computed({
      get: () => queryValue.value,
      set: (value) => {
        emit('update:queryValue', value)
      },
    })

    const state =  reactive({
      enable: false,
      mode: "WEEK_TEIKI",
      value0: "",
      value1: "",
    })
    console.log("state", state)
    watch(
      () => state,
      (state, prevState) => {
        console.log("watch", state, prevState)
        if (state.enable){
          queryValueComputed.value = `"${state.value0}"..."${state.value1}"`
        } else {
          queryValueComputed.value = null
        }
      },
      { deep: true }
    )

    return {
      state,
      queryValueComputed,
      modeDict,
    }
  },
})
</script>