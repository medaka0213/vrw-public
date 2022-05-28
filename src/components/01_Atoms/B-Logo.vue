<template lang="pug">
img(type="image/svg+xml" src="/logo/VRWlogo_21-09-22_JP.svg" alt="VRW-Logo")
</template>

<script>
export default {
    name: "VRWLogo",
    props: {
        lang: {
            type: String,
        },
    },
};
</script>

<style lang="scss" scoped>
img {
    display: block;
    max-width: 100%;
    height: auto;
}
</style>