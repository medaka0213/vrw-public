<template lang="pug">
DafaultLayout
    .grid.bg-white.p-4.my-3(v-if="store.state.item.isReceived")
        .text-left(class="col-12 lg:col-6")
            img(
                v-bind:src="item.image_url || item.rocket_image_url || 'https://img.virtualrocketwatching.net/VRWlogo_21-02-14_JP.png'"
                alt="Image" max-width="100%" preview
            )
            span(class="text-gray-600 text-sm" v-if="item.image_credit")
                | Credit: {{item.image_credit}}

        .text-left(class="col-12 lg:col-6")
            EventListItem(:item = "item" v-if="item.itemType() == 'event'")
            LaunchListItem(:item = "item" v-if="item.itemType() == 'launch'")
            .pl-4(v-if="store.state.item['meetup']" || [] !==[])
                Button( @click="handleClick($event)" label="Secondary" class="p-button-outlined")
                    | 集会情報

        .border-top-2.border-400.py-5(class="text-left col-12 xl:col-12" v-if="item.youtubeId() !== ''")
            h4 動画
            YouTubeBlock(:videoId="item.youtubeId()" width="100%" :start="item.watch_URL_liftoff_at")

        .border-top-2.border-400.py-5(class="text-left col-12 xl:col-12" v-if="item.youtubeShortId() !== ''")
            h4 動画 (切り抜き)
            YouTubeBlock(:videoId="item.youtubeShortId()" width="100%")

        .border-top-2.border-400.py-5(class="text-left col-12" v-if="store.state.item['slide']" || [] !==[])
            h4 スライド資料
            SlideItemBlock(:item = "store.state.item['slide'][0]" style="max-width: 800px")

        .border-top-2.border-400.py-5(class="text-left col-12 lg:col-6" v-if="store.state.item['countdown']" || [] !==[])
            h4 カウントダウン タイムライン
            CountdownBlock(:item = "store.state.item['countdown'][0]" mode="t-minus")
        .border-top-2.border-400.py-5(class="text-left col-12 lg:col-6" v-if="store.state.item['countdown']" || [] !==[])
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
import YouTubeBlock from "@/components/02_Molecules/B-Youtube"

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
        DafaultLayout,
        YouTubeBlock
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
        const handleClick = (e) => {
            const meetup = store.state.item['meetup'][0]
            const href = `/q/meetup/i/${meetup.pk}`
            window.location.href = href
        }
        onMounted(() => {
            getItems()
            console.log(store.state)
        })
        return{
            item,
            store,
            state,
            getItems,
            handleClick
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
