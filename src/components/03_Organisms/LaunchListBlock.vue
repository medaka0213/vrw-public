<template lang="pug">
.grid
    div(v-for="(item, key) in items" :key="key" class="text-left col-12 md:col-6 lg:col-3")
        LaunchListItem(:item="item")
</template>

<script>
import LaunchListItem from "@/components/02_Molecules/LaunchListItem"

export default {
    components: {
        LaunchListItem
    },
    props: [
        "items"
    ],
    onMounted(){
        console.log(this.items)
    }
}
</script>