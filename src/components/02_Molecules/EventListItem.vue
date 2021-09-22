<template>
    <div class="launch-item p-px-3 p-py-1 p-my-3">
        <h2>{{item.missionName_JP || item.missionName}}</h2>
        <p>{{item.time_type === "CONFIRMED"? "日本時間" : ""}} {{ item.date_JP }}</p>
        <p>{{ item.description_JP || item.description }}</p>
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