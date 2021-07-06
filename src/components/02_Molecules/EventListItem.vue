<template>
    <div>
        <h2>{{item.missionName_JP || item.missionName}}</h2>
        <p>{{ item.date_JP  }}</p>
        <p>{{ item.description_JP || item.description }}</p>
    </div>
</template>

<script>
export default {
    props: ["item"]
}
</script>