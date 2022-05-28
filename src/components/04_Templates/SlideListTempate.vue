<template lang="pug">
DafaultLayout
    SlideListBlock(:items = "state.items"  v-if="state.loaded")
    span(v-else) loading...
</template>

<script>
import { get_slides } from '@/actions/webapi'
import { defineComponent, reactive, computed, onMounted } from 'vue'

import SlideListBlock from "@/components/03_Organisms/SlideListBlock"
import DafaultLayout from "@/components/04_Templates/DefaultLayout.vue"

export default defineComponent({
    name: 'App',
    components: {
        SlideListBlock,
        DafaultLayout
    },
    setup(){
        const state = reactive({
            items:[],
            loaded: false,
        })
        async function getItems(){
            state.items = await get_slides()
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
