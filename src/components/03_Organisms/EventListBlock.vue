<template lang="pug">
p.my-1.text-left(v-if="items") {{items.length}}件が見つかりました
.grid
    div(v-for="(item, key) in items" :key="key" class="text-left col-12 md:col-6 lg:col-3")
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