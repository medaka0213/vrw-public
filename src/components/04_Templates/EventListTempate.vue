<template lang="pug">
DafaultLayout
    EventListBlock(:items = "state.items"  v-if="state.loaded")
    span(v-else) loading...
</template>

<script>
import { get_event } from '@/actions/webapi'
import { defineComponent, reactive, computed, onMounted } from 'vue'

import EventListBlock from "@/components/03_Organisms/EventListBlock"
import DafaultLayout from "@/components/04_Templates/DefaultLayout.vue"

export default defineComponent({
    name: 'App',
    components: {
        EventListBlock,
        DafaultLayout
    },
    setup(){
        const state = reactive({
            items:[],
            loaded: false,
        })
        async function getItems(){
            state.items = await get_event("upcoming")
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
