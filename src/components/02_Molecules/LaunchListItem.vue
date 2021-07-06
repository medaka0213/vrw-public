<template>
    <div>
        <h2>{{item.rocket_JP || item.rocket}} | {{item.missionName_JP || item.missionName}}</h2>
        <p>{{ item.date_JP  }}</p>
        <p>{{ item.missionOverview_JP || item.missionOverview }}</p>
        <p>{{ item.provider_JP || item.provider }}, {{ item.launchSite_JP || item.launchSite }}</p>
    </div>
</template>

<script>
export default {
    props: ["item"]
}
</script>