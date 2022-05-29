<template lang="pug">
p.my-1.text-left(v-if="items") {{items.length}}件が見つかりました
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
    ]
}
</script>