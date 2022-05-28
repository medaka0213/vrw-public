<template lang="pug">
.page-content.mx-auto.my-5.text-center
    slot
</template>

<style lang="scss">
body { 
    background-color: #eee;
}
.page-content {
    max-width: 1200px;
    background-color: #eee;
    text-align: left;
}
</style>