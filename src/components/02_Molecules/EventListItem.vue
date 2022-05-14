<template>
    <div class="launch-item px-3 py-1 my-1 text-left">
        <h3>{{item.get_jp_value('name')}}</h3>
        <p class="py-0 my-1 text-sm">🗓️ {{item.datetime_time_type === "CONFIRMED"? "日本時間" : ""}} {{ item.datetime_format_JP || item.date_JP  }}</p>
        <p class="py-0 my-1 text-xs">🔗 <a v-bind:href="item.nextSpaceFlightLink()" target="_blank">{{ item.nextSpaceFlightLink() }}</a></p>
    </div>
</template>

<script>
export default {
    props: ["item"]
}
</script>


<style scoped>
.launch-item {
    background-color: #fff
}
</style>