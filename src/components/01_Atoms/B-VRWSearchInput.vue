<template>
<select v-model="searchModeComputed">
  <option disabled value="EQ">検索モード</option>
  <option
    v-for="key in Object.keys(modeDict)"
    :key="key"
    :value="key"
  >{{modeDict[key]}}</option>
</select>
<input v-model="searchValue0Computed"/>
<input v-model="searchValue1Computed"/>
</template>

<script>
import { defineComponent, toRefs,ref, computed } from 'vue'

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
      "EQ": "等しい",
      "LT": "より小さい",
      "LT_E": "以下",
      "GT": "より大きい",
      "GT_E": "以上",
      "BEGINS": "始まる",
      //"CONTAINS": "含む", //未実装
      "N_EQ": "等しくない",
      "BETWEEN": "範囲",
      "EX": "指定なし",
      "N_EX": "指定なし",
    }

    const { queryValue } = toRefs(props)
    const queryValueComputed = computed({
      get: () => queryValue.value,
      set: (value) => {
        emit('update:queryValue', value)
      },
    })

    const searchMode = ref("")
    const searchValue0 = ref("")
    const searchValue1 = ref("")

    const searchModeComputed = computed({
      get: () => searchMode.value,
      set: (value) => {
        searchMode.value = value
        queryValueComputed.value = SearchValue2Params(searchModeComputed.value, searchValue0Computed.value, searchValue1Computed.value)
      },
    })
    const searchValue0Computed = computed({
      get: () => searchValue0.value,
      set: (value) => {
        searchValue0.value = value
        queryValueComputed.value = SearchValue2Params(searchModeComputed.value, searchValue0Computed.value, searchValue1Computed.value)
      },
    })
    const searchValue1Computed = computed({
      get: () => searchValue1.value,
      set: (value) => {
        searchValue1.value = value
        queryValueComputed.value = SearchValue2Params(searchModeComputed.value, searchValue0Computed.value, searchValue1Computed.value)
      },
    })


    return {
      searchModeComputed,
      searchValue0Computed,
      searchValue1Computed,
      queryValueComputed,
      modeDict,
    }
  },
})
</script>