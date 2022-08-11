<template lang="pug">
.page-content.mx-auto.my-5.text-center
    .row.text-left
        .col-xl-9.col-md-8.col-sm-12
            slot
        .col-xl-3.col-md-4
            .bg-white.p-4.my-3.sidebar_fixed
                GoogleCalendar
</template>

<script>
import GoogleCalendar from "@/components/03_Organisms/GoogleCalendar"

export default {
    components: {
        GoogleCalendar
    }
}
</script>

<style lang="scss">
body { 
    background-color: #eee;
}
.page-content {
    background-color: #eee;
    text-align: left;
    max-width: 1500px;
}
.sidebar_fixed {
    position: sticky;
    top: 25px;
    }
.sidebar_content {
    margin-bottom: 100px;
}
</style>