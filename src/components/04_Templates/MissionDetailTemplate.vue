<template lang="pug">
DafaultLayout
    .text-left.grid.bg-white.p-4.my-3(v-if="store.state.item.isReceived")
        .mb-3(class="col-12")
            h1.pl-3.text-primary
                | {{item.title()}}

        .mb-3(class="col-12 lg:col-6")
            img.border(
                v-bind:src="item.image_url || item.rocket_image_url || 'https://img.virtualrocketwatching.net/VRWlogo_21-02-14_JP.png'"
                alt="Image" max-width="100%" preview
            )
            span(class="text-gray-600 text-sm" v-if="item.image_credit")
                | Credit: {{item.image_credit}}

        .mb-3(class="col-12 lg:col-6")
            .pl-1
                .p-3.mb-3.border.bg-light(v-if="item.datetime_time_type === 'CONFIRMED'")
                    h4 カウントダウン
                    h5
                        CountDownClock(:datetime = "item.datetime")
                .p-3.mb-3.border.bg-light
                    EventListItem(:item = "item" v-if="item.itemType() == 'event'")
                    LaunchListItem(:item = "item" v-if="item.itemType() == 'launch'")

                .p-3.mb-3.border.bg-light(v-if="store.state.item['meetup']" || [] !==[])
                    p.mb-0
                        a(:href= "store.state.item['meetup'][0].itemDetailPath()" )
                            | 集会情報

        .mb-3.border-top-2.border-400.py-5(class="text-left col-12 xl:col-12" v-if="item.youtubeId() !== ''")
            h4 動画
            YouTubeBlock(:videoId="item.youtubeId()" width="100%" :start="item.watch_URL_liftoff_at")

        .mb-3.border-top-2.border-400.py-5(class="text-left col-12 xl:col-12" v-if="item.youtubeShortId() !== ''")
            h4 動画 (切り抜き)
            YouTubeBlock(:videoId="item.youtubeShortId()" width="100%")

        .mb-3.border-top-2.border-400.py-5(class="text-left col-12" v-if="store.state.item['slide']" || [] !==[])
            h4 スライド資料
            SlideItemBlock(:item = "store.state.item['slide'][0]" style="max-width: 800px")

        .mb-3.border-top-2.border-400.py-5(class="text-left col-12 lg:col-6" v-if="store.state.item['countdown']" || [] !==[])
            h4 カウントダウン タイムライン
            CountdownBlock(:item = "store.state.item['countdown'][0]" mode="t-minus")
        .mb-3.border-top-2.border-400.py-5(class="text-left col-12 lg:col-6" v-if="store.state.item['countdown']" || [] !==[])
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
import CountDownClock from "@/components/01_Atoms/B-CountDownClock"

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
        YouTubeBlock,
        CountDownClock
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
