<template lang="pug">
p.my-1.text-left(v-if="items") {{items.length}}件が見つかりました
.row
    .text-left.col-xl-4.col-lg-6.my-2(v-for="(item, key) in items" :key="key")
        EventListItem(:item="item")
</template>

<script>
import { defineComponent, reactive, computed, onMounted } from 'vue'
import EventListItem from "@/components/02_Molecules/EventListItem"

export default defineComponent({
    components: {
        EventListItem, 
    },
    props: [
        "items"
    ],
    setup(props){
        return{
            props
        }
    },
})
</script>