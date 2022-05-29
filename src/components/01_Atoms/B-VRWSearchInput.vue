<template lang="pug">
.my-2
  Checkbox.mr-2(:id="'checkbox_'+title" v-model="state.enable" :binary="true")
  label(:for="'checkbox_'+title") {{title}}
.my-2(v-if="state.enable")
  Dropdown.mr-2(v-model="state.mode" :options="modeArray" optionLabel="value" optionValue="key")
  AutoComplete.mr-2(v-model="state.value0" v-if="state.mode!=='EX' && state.mode!=='N_EX'")
  AutoComplete.mr-2(v-model="state.value1" v-if="state.mode==='BETWEEN'")
</template>

<script>
import { defineComponent, toRefs, watch, reactive, computed, onMounted } from 'vue'

const SearchValue2Params = (mode, value0, value1, stringKey) => {
  console.log("SearchValue2Params", mode, value0, value1, stringKey)
  if (stringKey){
    value0 = `"${value0}"`
    value1 = `"${value1}"`
  }
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

const param2SearchValue = (param, stringKey) => {
  console.log("param2SearchValue", param)
  let res = {}
  if (!param || param === "") {
    res =  {
      enable: false,
      mode: "EQ",
      value0: "",
    }
  }
  else if (param === "*") {
    res =  {
      enable: true,
      mode: "EX"
    }
  }
  else if (param === "--") {
    res =  {
      enable: true,
      mode: "N_EX"
    }
  }
  else if (param.startsWith("...")) {
    res =  {
      enable: true,
      mode: "LT_E",
      value0: param.slice(3) 
    }
  }
  else if (param.startsWith("..")) {
    res =  {
      enable: true,
      mode: "LT",
      value0: param.slice(2)
    }
  }
  else if (param.startsWith("...")) {
    res =  {
      enable: true,
      mode: "GT_E",
      value0: param.slice(3)
    }
  }
  else if (param.startsWith("..")) {
    res =  {
      enable: true,
      mode: "GT",
      value0: param.slice(2)
    }
  }
  else if (param.startsWith("--")) {
    res =  {
      enable: true,
      mode: "N_EQ",
      value0: param.slice(2)
    }
  }
  else if (param.startsWith("*")) {
    res =  {
      enable: true,
      mode: "CONTAINS",
      value0: param.slice(1)
    }
  }
  else if (param.endsWith("*")) {
    res =  {
      enable: true,
      mode: "BEGINS",
      value0: param.slice(0, -1)
    }
  }
  else if (param.indexOf('...') != -1) {
    res =  {
      enable: true,
      mode: "BETWEEN",
      value0: param.split("...")[0],
      value1: param.split("...")[1]
    }
  } else {
    res =  {
      enable: true,
      mode: "EQ",
      value0: param
    }
  }
  if (stringKey && res.value0){
    res.value0 = res.value0.replace(/^"|"$/g, '')
  }
  if (stringKey && res.value1){
    res.value1 = res.value1.replace(/^"|"$/g, '')
  }
  return res
}



export default defineComponent({
  name: 'ChildInput',
  props: {
    queryValue: String,
    title: String,
    stringKey: Boolean
  },
  emits: ['update:queryValue'],
  setup(props, { emit }) {
    const modeArray = [{
      key : "EQ",
      value: "完全一致"
    }, {
      key : "LT",
      value: "より小さい"
    }, {
      key : "LT_E",
      value: "以下"
    }, {
      key : "GT",
      value: "より大きい"
    }, {
      key : "GT_E",
      value: "以上"
    }, {
      key : "BEGINS",
      value: "先頭一致"
    }, {
      key : "N_EQ",
      value: "等しくない"
    }, {
      key : "BETWEEN",
      value: "範囲"
    }, {
      key : "EX",
      value: "値あり"
    }, {
      key : "N_EX",
      value: "値なし"
    }]

    const { queryValue } = toRefs(props)
    const queryValueComputed = computed({
      get: () => queryValue.value,
      set: (value) => {
        emit('update:queryValue', value)
      },
    })

    const state =  reactive(param2SearchValue(queryValueComputed.value, props.stringKey))
    console.log("state", state)
    watch(
      () => state,
      (state, prevState) => {
        console.log("watch", state, prevState, props)
        if (state.enable){
          queryValueComputed.value = SearchValue2Params(state.mode, state.value0, state.value1, props.stringKey)
        } else {
          queryValueComputed.value = null
        }
      },
      { deep: true }
    )

    return {
      state,
      queryValueComputed,
      modeArray,
    }
  },
})
</script>