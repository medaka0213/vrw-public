<template>
<DafaultLayout>
    <LaunchListBlock :items = "state.items"  v-if="state.loaded"/>
    <span v-else>
        loading...
    </span>
</DafaultLayout>
</template>

<script>
import { get_launch } from '@/actions/webapi'
import { defineComponent, reactive, computed, onMounted } from 'vue'

import LaunchListBlock from "@/components/03_Organisms/LaunchListBlock"
import DafaultLayout from "@/components/04_Templates/DefaultLayout.vue"

export default defineComponent({
    name: 'App',
    components: {
        LaunchListBlock,
        DafaultLayout
    },
    setup(){
        const state = reactive({
            items:[],
            loaded: false,
        })
        async function getItems(){
            state.items = await get_launch("upcoming")
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
