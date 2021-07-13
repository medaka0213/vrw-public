<template>
    <SVGElement />
</template>

<script>
import SVGElement from "@/assets/VRWlogo_21-02-14_JP.svg"

export default {
    name: "VRWLogo",
    props: {
        lang: {
            type: String,
        },
    },
    components: {
        SVGElement
    },
};
</script>