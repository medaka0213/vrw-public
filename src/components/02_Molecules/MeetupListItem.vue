<template lang="pug">
.launch-item.px-3.py-1.my-1.text-left
    h3
        a(v-bind:href="`/q/meetup/i/${item.pk}`")
            | {{item.get_jp_value('title')}}
    p.py-0.my-1.text-sm 
        | 🗓️ 日本時間 {{ item.datetime_format()  }}
    p.py-0.my-1.text-sm
        | 👨‍🚀 VRChat: {{ item.user }} にJOIN
    p.py-0.my-1.text-sm(v-if="item.get_jp_value('tweet')")
        | 🔗 
        a(v-bind:href="item.twitterLinkJP()" target="_blank")
            | Twitter
</template>

<script>
import { defineComponent, reactive, computed, onMounted } from 'vue'

export default defineComponent({
    props: ["item"]
})
</script>

<style scoped>
.launch-item {
    background-color: #fff
}
</style>