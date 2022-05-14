<template>
    <div class="launch-item p-px-3 p-py-1 p-my-3">
        <h2>{{item.name_JP || item.name}}</h2>
        <p>{{item.datetime_time_type === "CONFIRMED"? "日本時間" : ""}} {{ item.datetime_format_JP }}</p>
        <p>{{ item.overview_JP || item.overview }}</p>
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