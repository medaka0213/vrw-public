<template>
    <div class="launch-item px-3 py-1 my-1">
        <h3>{{item.get_jp_value('name')}}</h3>
        <p class="py-0 my-1 text-sm">🗓️ {{item.datetime_time_type === "CONFIRMED"? "日本時間" : ""}} {{ item.datetime_format_JP  }}</p>
        <p class="py-0 my-1 text-sm" v-if="item.get_jp_value('rocket')">🚀 {{ item.get_jp_value('provider') }} | {{ item.get_jp_value('rocket') }}</p>
        <p class="py-0 my-1 text-sm" v-if="item.get_jp_value('site')">🌍 {{ item.get_jp_value('site') }}</p>
        <p class="py-0 my-1 text-sm" v-if="item.get_jp_value('overview')">💬 {{ item.get_jp_value('overview') }}</p>
        <p class="py-0 my-1 text-xs">🔗 <a v-bind:href="item.nextSpaceFlightLink()" target="_blank">NextSpaceFlight.com</a></p>
    </div>
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