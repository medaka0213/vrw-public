<template lang="pug">
DafaultLayout
    .p-p-5.p-my-5.page-item
        VRWLogo
    .p-p-5.p-my-5.page-item.p-text-left
        h2
            |「ロケット打ち上げを観る集会」について
        p
            | VRChatでロケットの打ち上げ生中継・アーカイブ動画を同時視聴する、パブリックビューイングイベントを行っています。
            br
            | 実物大の3Dモデルや教材を用いて、最新の宇宙開発事情をお届けします。
        p
            | 最新の打ち上げ情報については、下記のリンクをご確認ください。
        p
            span.p-mr-5
                a(href="/meetups")
                    | 集会一覧
            span.p-mr-5
                a(href="/events")
                    | 打ち上げ・イベント一覧

</template>

<script>
import VRWLogo from "@/components/01_Atoms/B-Logo.vue"
import DafaultLayout from "@/components/04_Templates/DefaultLayout.vue"

export default {
    components: {
        VRWLogo,
        DafaultLayout
    }
}
</script>

<style scoped>
.page-item {
    background-color: #fff;
}
</style>