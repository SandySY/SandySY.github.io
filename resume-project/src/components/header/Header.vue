<template>
    <div class="container" :class="{ bg: showBg }">
        <div class="content">
            <div class="title">Sandy's Website</div>
            <div class="nav">
                <router-link to="/home" class="nav-item">Home</router-link>
                <router-link to="/arts" class="nav-item">Arts</router-link>
                <div @click="goToBlog" class="nav-item">Notes</div>
                <router-link to="/blog" class="nav-item">Blog</router-link>
                <div @click="github" class="nav-item">Github</div>
            </div>
            <div class="dream" v-if="showBg">
                <div class="west-01"></div>
                <div class="west-02"></div>
                <div class="west-03"></div>
                <div class="west-04"></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
    @Prop() private showBg!: boolean;
    public github(): void {
        window.location.href = 'https://github.com/SandySY';
    }

    public goToBlog(): void {
        window.location.href = 'https://SandySY.github.io';
    }
}
</script>

<style lang="scss" scoped>
@import '@styles/_function';

$height: 400px;

.container {
    position: relative;
    @include wh(100vw, $height);

    .content {
        min-width: 810px;
        max-width: 1185px;
        height: $height;
        padding-top: 30px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        box-sizing: border-box;
        position: relative;
    }

    .dream {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        z-index: 0;
        div[class^='west-0'] {
            width: 200px;
            height: 180px;
            float: left;
            background-repeat: no-repeat;
            background-position-y: center;
            &.west-01 {
                background-image: url('~@images/west_01.png');
                animation: play01 1.4s steps(8) infinite;
            }
            &.west-02 {
                background-image: url('~@images/west_02.png');
                animation: play02 1.4s steps(8) infinite;
            }
            &.west-03 {
                width: 170px;
                height: 240px;
                transform: translate(0, 26px);
                background-image: url('~@images/west_03.png');
                animation: play03 1.4s steps(8) infinite;
            }
            &.west-04 {
                width: 210px;
                height: 200px;
                background-image: url('~@images/west_04.png');
                animation: play04 1.4s steps(8) infinite;
            }
        }
        @keyframes play01 {
            0% {
                background-position-x: 0px;
            }
            100% {
                background-position-x: -1600px;
            }
        }
        @keyframes play02 {
            0% {
                background-position-x: 0px;
            }
            100% {
                background-position-x: -1600px;
            }
        }
        @keyframes play03 {
            0% {
                background-position-x: 0px;
            }
            100% {
                background-position-x: -1360px;
            }
        }
        @keyframes play04 {
            0% {
                background-position-x: 0px;
            }
            100% {
                background-position-x: -1680px;
            }
        }
    }

    .title {
        padding-left: 20px;
        color: #fff;
        font-weight: bold;
        font-size: 36px;
    }

    .nav {
        padding-right: 10px;
        display: flex;
        position: relative;
        z-index: 1;

        .nav-item {
            color: #fff;
            font-size: 18px;
            margin: 0 10px;
            font-weight: bold;
            cursor: pointer;

            &:hover,
            &.router-link-exact-active {
                color: #03aaaa;
            }
        }
    }
}

.bg {
    @include bg('~@images/dream.jpg', cover, center top);
    background-image: linear-gradient(
            to right,
            rgba(42, 42, 42, 0.21),
            rgba(38, 40, 40, 0.28)
        ),
        url('~@images/dream.jpg');
}
</style>
