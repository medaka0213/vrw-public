<template lang="pug">
DafaultLayout
    div(v-if="store.state.item.isReceived")
        div
            img(v-bind:src="item.image_url || item.rocket_image_url || 'https://img.virtualrocketwatching.net/VRWlogo_21-02-14_JP.png'")
            p(v-if="state.item.image_url")
                | Credit: {{state.item.image_credit}}
        EventListItem(:item = "item" v-if="item.type() == 'event'")
        LaunchListItem(:item = "item" v-if="item.type() == 'launch'")
        div
            SlideItemBlock
    span(v-else) 
        | loading...
</template>

<script>
import { defineComponent, reactive, computed, onMounted } from 'vue'

import EventListItem from "@/components/02_Molecules/EventListItem"
import LaunchListItem from "@/components/02_Molecules/LaunchListItem"
import DafaultLayout from "@/components/04_Templates/DefaultLayout.vue"

import store from '@/store'


export default defineComponent({
    name: 'App',
    props: ["type", "pk"],
    components: {
        EventListItem,
        LaunchListItem,
        DafaultLayout
    },
    setup(props){
        const item = computed(() => {
            if (store.state.item.isReceived){
                return store.state.item[props.type][0]
            } else {
                return {}
            }
        })
        const state = reactive({
            item:{},
            relations: {},
            references: {},
            loaded: false,
        })
        async function getItems(){
            await store.commit('item/set_received', false)
            await store.dispatch('item/get_single_item', props)
            await store.dispatch('item/get_item_relation', props)
            await store.dispatch('item/get_item_reference', props)
            await store.commit('item/set_received', true)
        }
        onMounted(() => {
            getItems()
        })
        return{
            item,
            store,
            state,
            getItems
        }
    },
})
</script>
