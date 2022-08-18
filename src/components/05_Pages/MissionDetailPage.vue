<template lang="pug">
MissionDetailTemplate(:pk="$route.params.pk" :type="$route.params.type")
</template>

<script>
import MissionDetailTemplate from "@/components/04_Templates/MissionDetailTemplate.vue"

export default {
    components: {
        MissionDetailTemplate
    }
}
</script>