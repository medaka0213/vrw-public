<template lang="pug">
ItemDetailTemplate(:pk="$route.params.pk" :type="$route.params.type")
</template>

<script>
import ItemDetailTemplate from "@/components/04_Templates/ItemDetailTemplate.vue"

export default {
    components: {
        ItemDetailTemplate
    }
}
</script>