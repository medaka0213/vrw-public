<template lang="pug">
DafaultLayout
    .text-left.bg-white.p-3
        h2 「ロケット打ち上げを観る集会」について
        p
            | VRChatでロケットの打ち上げ生中継・アーカイブ動画を同時視聴する、パブリックビューイングイベントを行っています。
            br
            | 実物大の3Dモデルや教材を用いて、最新の宇宙開発事情をお届けします。
        h3 各種リンク

        p
            |告知・スケジュール・打ち上げ情報の確認等にご利用ください
        
        span.pr-3  
            a(href="https://twitter.com/vr_launch" target="_blank")
                |Twitter
        
        span.pr-3
            a(href="https://t.co/cjfnxjZrZG" target="_blank")
                |Discord

        span.pr-3
            a(href="https://t.co/nL12021X0s" target="_blank")
                |Google Calendar

        h3 ご連絡先
        p
            | ご意見・ご要望等ございましたら、下記のGoogle Form までお問い合わせください。

        span.pr-3  
            a(href="https://docs.google.com/forms/d/e/1FAIpQLScESvA557taE0zYj8gzlx2cQwrUDWs3cPxDnCWlacfUWTVLwg/viewform" target="_blank") 
                |「ロケみる集会」参加者アンケート
        
        span.pr-3
            a(href="https://docs.google.com/forms/d/e/1FAIpQLSeA5e7jdzyvLZD9-fs01ixzUJjJhcZKN65pjGSYj46nYYDEPw/viewform" target="_blank")
                |「ロケみる集会」スタッフ参加希望フォーム

    
</template>

<script>
import { defineComponent} from "vue";
import DafaultLayout from "@/components/04_Templates/DefaultLayout.vue";
export default defineComponent({
    name: "App",
    components: {
        DafaultLayout,
    },
});

</script>