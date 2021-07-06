<template>
    <EventListBlock :items = "state.items"  v-if="state.loaded"/>
    <span v-else>
        loading...
    </span>
</template>

<script>
import { get_events } from '@/actions/webapi'
import { defineComponent, reactive, computed, onMounted } from 'vue'

import EventListBlock from "@/components/03_Organisms/EventListBlock"

export default defineComponent({
    name: 'App',
    components: {
        EventListBlock
    },
    setup(){
        const state = reactive({
            items:[],
            loaded: false,
            result:computed(() => state.num * state.rates.JPY),
        })
        async function getItems(){
            state.items = await get_events()
            state.loaded = true
        }
        onMounted(() => {
            getItems()
        })
        return{
            state,
            getItems
        }
    },
})
</script>
