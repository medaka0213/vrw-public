<template lang="pug">
MeetupDetailTemplate(:pk="$route.params.pk")
</template>

<script>
import MeetupDetailTemplate from "@/components/04_Templates/MeetupDetailTemplate.vue"

export default {
    components: {
        MeetupDetailTemplate
    }
}
</script>