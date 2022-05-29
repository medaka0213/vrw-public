<template>
<Galleria :value="images">
    <template #item="slotProps">
        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;"/>
    </template>
</Galleria>
</template>

<script>
import { defineComponent, computed } from 'vue'



export default defineComponent({
  props: ["item",] ,
  setup(props) {
    console.log(props)
    const images = computed(() => {
      return [...Array(props.item["data-length"])].map((_, i) => {
        return {
          alt: props.item.pk + "-" + i,
          itemImageSrc:`https://img.virtualrocketwatching.net/slide/${props.item.pk}/${('00000'+i).slice(-5)}.jpeg`
      }})
    })
    return {
      images
    }
  },
})
</script>