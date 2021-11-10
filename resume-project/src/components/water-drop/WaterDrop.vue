<template>
    <div class="banner">
        <div class="drops">
            <!-- https://9elements.github.io/fancy-border-radius/   -->
            <div class="drop"></div>
            <div class="drop"></div>
            <div class="drop"></div>
            <div class="drop"></div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';

export default class WaterDrop extends Vue {

}
</script>

<style lang="scss" scoped>
@import '@styles/_function';

    .banner {
        position: relative;
        @include wh(100vw, 500px);
        display: flex;
        justify-content: center;
        align-content: center;
        background-color: #edeeed;

        .drops {
            position: relative;
            display: flex;
            justify-content: center;
            align-content: center;
            left: -50px;
            top: -30px;
        }
        .drop {
            position: absolute;
            @include wh(150px, 150px);
            @include center();
            background-color: transparent;
            border-radius: 57% 43% 37% 63% / 45% 52% 48% 55%;
            box-shadow: inset 10px 10px 10px rgba($color: #000000, $alpha: 0.05),
                            15px 25px 10px rgba($color: #000000, $alpha: 0.1),
                            15px 20px 20px rgba($color: #000000, $alpha: 0.05),
                            inset -10px -10px 15px rgba($color: #ffffff, $alpha: 0.9);
            &::before{
                content: '';
                position: absolute;
                top: 25px;
                left: 35px;
                background: #ffffff;
                @include wh(20px, 20px);
                border-radius: 42% 58% 37% 63% / 40% 43% 57% 60%;
            }
            &::after{
                content: '';
                position: absolute;
                top: 25px;
                left: 65px;
                background: #ffffff;
                @include wh(10px, 10px);
                border-radius: 57% 43% 37% 63% / 48% 37% 63% 52%;
            }
            &:nth-child(2){
                transform: scale(0.5) translate(-200px, 180px);
                border-radius: 64% 36% 42% 58% / 42% 37% 63% 58%;
            }
            &:nth-child(3){
                transform: scale(0.5) translate(280px, 10px);
                border-radius: 49% 51% 42% 58% / 56% 47% 53% 44%;
            }
            &:nth-child(4){
                transform: scale(0.5) translate(120px, -350px);
                border-radius: 39% 61% 63% 37% / 77% 47% 53% 23%;
            }
        }

    }
</style>
