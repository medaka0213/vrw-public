<template>
<DafaultLayout>
    <div v-if="state.loaded">
        これでええやろ
        <EventListItem v-if="state.loaded" :item = "state.item" />
    </div>
    <span v-else>loading...</span>
</DafaultLayout>
</template>

<script>
import { get_single_item, get_item_relation,  get_item_reference} from '@/actions/webapi'
import { defineComponent, reactive, computed, onMounted } from 'vue'

import EventListItem from "@/components/02_Molecules/EventListItem"
import DafaultLayout from "@/components/04_Templates/DefaultLayout.vue"

export default defineComponent({
    name: 'App',
    props: ["type", "pk"],
    components: {
        EventListItem,
        DafaultLayout
    },
    setup(props){
        const state = reactive({
            item:{},
            relations: {},
            references: {},
            loaded: false,
        })
        async function getItems(){
            state.item = await get_single_item(props.type, props.pk)
            state.relations = await get_item_relation(props.type, props.pk)
            state.references = await get_item_reference(props.type, props.pk)
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
