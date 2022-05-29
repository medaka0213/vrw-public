<template>
<select v-model="state.mode">
  <option
    v-for="key in Object.keys(modeDict)"
    :key="key"
    :value="key"
  >{{modeDict[key]}}</option>
</select>
<input v-model="state.value0"/>
<input v-model="state.value1"/>
</template>

<script>
import { defineComponent, toRefs,ref,watch, reactive, computed } from 'vue'

const SearchValue2Params = (mode, value0, value1) => {
  console.log("SearchValue2Params", mode, value0, value1)
    switch (mode) {
        case "EQ":
            return `${value0}`
        case "LT":
            return `..${value0}`
        case "LT_E":
            return `...${value0}`
        case "GT":
            return `${value0}..`
        case "GT_E":
            return `${value0}...`
        case "BEGINS":
            return `${value0}*`
        case "CONTAINS":
            return `*${value0}*`
        case "N_EQ":
            return `--${value0}`
        case "BETWEEN":
            return `${value0}...${value1}`
        case "EX":
            return `*`
        case "N_EX":
            return `--`
        default:
            return `*`
    }
}

export default defineComponent({
  name: 'ChildInput',
  props: {
    queryValue: String,
  },
  emits: ['update:queryValue'],
  setup(props, { emit }) {
    const modeDict = {
      "EQ": "完全一致",
      "LT": "より小さい",
      "LT_E": "以下",
      "GT": "より大きい",
      "GT_E": "以上",
      "BEGINS": "先頭一致",
      //"CONTAINS": "含む", //未実装
      "N_EQ": "等しくない",
      "BETWEEN": "範囲",
      "EX": "値あり",
      "N_EX": "値なし",
    }

    const { queryValue } = toRefs(props)
    const queryValueComputed = computed({
      get: () => queryValue.value,
      set: (value) => {
        emit('update:queryValue', value)
      },
    })

    const state =  reactive({
      mode : "EQ",
      value0 : "",
      value1 : "",
    })
    watch(
      () => state,
      (state, prevState) => {
        console.log("watch", state, prevState)
        queryValueComputed.value = SearchValue2Params(state.mode, state.value0, state.value1)
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