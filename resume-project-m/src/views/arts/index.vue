<template>
    <div class="container">
        <div class="banner">
            <Header :showBg="true" />
            <!-- 西游动画 skip(8) -->
            <Skeleton />
            <!-- 骨架屏demo -->
        </div>
        <Footer />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@components/header/Header.vue';
import Footer from '@components/footer/Footer.vue';
import Skeleton from '@components/skeleton/Skeleton.vue';

@Component({
    components: {
        Header,
        Footer,
        Skeleton
    }
})
export default class Artrs extends Vue {}
</script>

<style lang="scss" scoped>
@import '@styles/_function';

.container {
    .banner {
    }
}
</style>
