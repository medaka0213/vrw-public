<template lang="pug">
DafaultLayout
    .grid.bg-white(v-if="store.state.item.isReceived")
        .border-top-2.border-400(class="text-left col-12 lg:col-6 px-3 py-5")
            img(
                v-bind:src="item.image_url || item.rocket_image_url || 'https://img.virtualrocketwatching.net/VRWlogo_21-02-14_JP.png'"
                alt="Image" max-width="100%" preview
            )
            span(class="text-gray-600 text-sm" v-if="item.image_credit")
                | Credit: {{item.image_credit}}

        .border-top-2.border-400(class="text-left col-12 lg:col-6" v-if="item.itemType() == 'event'")
            //MissionTimer(:item="item")
            EventListItem(:item = "item")
        .border-top-2.border-400(class="text-left col-12 lg:col-6" v-if="item.itemType() == 'launch'")
            //MissionTimer(:item="item")
            LaunchListItem(:item = "item")

        .border-top-2.border-400.my-5(class="text-left col-12" v-if="store.state.item['slide']" || [] !==[])
            h4 スライド資料
            SlideItemBlock(:item = "store.state.item['slide'][0]" style="max-width: 800px")

        .border-top-2.border-400(class="text-left col-12 lg:col-6" v-if="store.state.item['countdown']" || [] !==[])
            h4 カウントダウン タイムライン
            CountdownBlock(:item = "store.state.item['countdown'][0]" mode="t-minus")
        .border-top-2.border-400(class="text-left col-12 lg:col-6" v-if="store.state.item['countdown']" || [] !==[])
            h4 飛行中タイムライン
            CountdownBlock(:item = "store.state.item['countdown'][0]" mode="t-plus")
    span(v-else) 
        | loading...
</template>

<script>
import { defineComponent, reactive, computed, onMounted } from 'vue'

import EventListItem from "@/components/02_Molecules/EventListItem"
import LaunchListItem from "@/components/02_Molecules/LaunchListItem"
import DafaultLayout from "@/components/04_Templates/DefaultLayout.vue"
import SlideItemBlock from "@/components/03_Organisms/SlideItemBlock"
import CountdownBlock from "@/components/03_Organisms/CountdownBlock"
import MissionTimer from "@/components/02_Molecules/MissionTimer"

import store from '@/store'


export default defineComponent({
    name: 'App',
    props: ["type", "pk"],
    components: {
        EventListItem,
        LaunchListItem,
        SlideItemBlock,
        CountdownBlock,
        MissionTimer,
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
            console.log(store.state)
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

<style scoped>
img{
  width:100%;
  height:auto;
  object-fit:cover;
}
</style>
