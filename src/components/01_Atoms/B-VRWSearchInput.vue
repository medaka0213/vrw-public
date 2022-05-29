<template>
<input v-model="formComputed"/>
</template>

<script>
import { defineComponent, toRefs, computed } from 'vue'

export default defineComponent({
  name: 'ChildInput',
  props: {
    formComputed,
  },
  emits: ['update:formComputed.name'],
  setup(props, { emit }) {
    const { formComputed } = toRefs(props)
    const titleComputed = computed({
      get: () => title.value,
      set: (value) => {
        emit('update:formComputed.name', value)
      },
    })

    return {
      titleComputed,
    }
  },
})
</script>