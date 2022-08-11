<template lang="pug">
DafaultLayout
    .grid.bg-white.p-4.my-3(v-if="store.state.item.isReceived")
        .text-left(class="col-12 lg:col-6")
            img(
                v-bind:src="posterUrl || 'https://img.virtualrocketwatching.net/VRWlogo_21-02-14_JP.png'"
                alt="Image" max-width="100%" preview
            )
            span(class="text-gray-600 text-sm" v-if="item.image_credit && !posterUrl")
                | Credit: {{item.image_credit}}
        .text-left(class="col-12 lg:col-6" v-if="item.pk")
            MeetupListItem(:item = "item")
            .pl-4
                Button( @click="handleClick($event)" label="Primary" class="p-button-outlined")
                    | ミッション詳細へ
    span(v-else) 
        | loading...
</template>

<script>
import { defineComponent, reactive, computed, onMounted } from 'vue'

import MeetupListItem from "@/components/02_Molecules/MeetupListItem"
import DafaultLayout from "@/components/04_Templates/DefaultLayout.vue"
import SlideItemBlock from "@/components/03_Organisms/SlideItemBlock"
import CountdownBlock from "@/components/03_Organisms/CountdownBlock"
import MissionTimer from "@/components/02_Molecules/MissionTimer"

import store from '@/store'


export default defineComponent({
    name: 'App',
    props: ["pk"],
    components: {
        MeetupListItem,
        SlideItemBlock,
        CountdownBlock,
        MissionTimer,
        DafaultLayout
    },
    setup(props){
        const item = computed(() => {
            if (store.state.item.isReceived){
                return store.state.item["meetup"][0]
            } else {
                return {}
            }
        })
        const posterUrl = computed(() => {
            if (store.state.item.isReceived){
                let imgs = store.state.item["image"] || []
                if (imgs.length > 0){
                    let res = imgs.filter(img => img.name.endsWith("JP"))
                    return res[0].src()
                }
            }
            return item.value.image_url
        })
        const mission = computed(() => {
            if (store.state.item.isReceived){
                if (store.state.item["event"]){
                    return store.state.item["event"][0]
                } else {
                    return store.state.item["launch"][0]
                }
            } 
            return {}
        })
        const handleClick = (e) => {
            const href = `/q/${mission.value.itemType()}/i/${mission.value.pk}`
            window.location.href = href
        }
        const state = reactive({
            item:{},
            relations: {},
            references: {},
            loaded: false,
        })
        async function getItems(){
            console.log(props)
            const _props = {
                type: "meetup",
                pk: props.pk
            }
            await store.commit('item/set_received', false)
            await store.dispatch('item/get_single_item', _props)
            await store.dispatch('item/get_item_relation', _props)
            await store.dispatch('item/get_item_reference', _props)
            await store.commit('item/set_received', true)
        }
        onMounted(() => {
            getItems()
        })
        return{
            item,
            posterUrl,
            handleClick,
            store,
            state,
            getItems,
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
