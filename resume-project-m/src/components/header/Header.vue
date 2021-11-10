<template>
    <div class="container" :class="{ bg: showBg }">
        <div class="content">
            <div class="title">Sandy's Website</div>
            <div class="nav">
                <Dropdown>
                    <span class="el-dropdown-link nav-item">
                        {{ page }}
                        <i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <dropdown-menu>
                        <dropdown-item>
                            <router-link to="/home" class="nav-item">
                                Home
                            </router-link>
                        </dropdown-item>
                        <dropdown-item>
                            <router-link to="/arts" class="nav-item">
                                Arts
                            </router-link>
                        </dropdown-item>
                        <dropdown-item>
                            <router-link to="/blog" class="nav-item">
                                Blog
                            </router-link>
                        </dropdown-item>
                        <dropdown-item>
                            <div @click="goToBlog" class="nav-item">Notes</div>
                        </dropdown-item>
                        <dropdown-item>
                            <div @click="github" class="nav-item">Github</div>
                        </dropdown-item>
                    </dropdown-menu>
                </Dropdown>
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
import { Dropdown, DropdownMenu, DropdownItem, Button } from 'element-ui';

@Component({
    components: {
        Dropdown,
        DropdownMenu,
        DropdownItem,
        Button
    }
})
export default class Header extends Vue {
    @Prop() private showBg!: boolean;
    @Prop() private page!: string;
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

$height: p2r(200);

.container {
    position: relative;
    @include wh(100vw, $height);

    .content {
        width: p2r(700);
        height: $height;
        padding-top: p2r(30);
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        box-sizing: border-box;
    }

    .dream {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: baseline;
        z-index: 0;
        div[class^='west-0'] {
            @include wh(p2r(200), p2r(180));
            float: left;
            background-repeat: no-repeat;
            background-position-y: center;
            background-size: cover;
            &.west-01 {
                background-image: url('~@images/west_01.png');
                animation: play01 1.4s steps(8) infinite;
            }
            &.west-02 {
                background-image: url('~@images/west_02.png');
                animation: play02 1.4s steps(8) infinite;
            }
            &.west-03 {
                @include wh(p2r(170), p2r(240));
                transform: translate(0, p2r(26));
                background-image: url('~@images/west_03.png');
                animation: play03 1.4s steps(8) infinite;
            }
            &.west-04 {
                @include wh(p2r(210), p2r(200));
                background-image: url('~@images/west_04.png');
                animation: play04 1.4s steps(8) infinite;
            }
        }
        @keyframes play01 {
            0% {
                background-position-x: 0px;
            }
            100% {
                background-position-x: p2r(-1600);
            }
        }
        @keyframes play02 {
            0% {
                background-position-x: 0px;
            }
            100% {
                background-position-x: p2r(-1600);
            }
        }
        @keyframes play03 {
            0% {
                background-position-x: 0px;
            }
            100% {
                background-position-x: p2r(-1360);
            }
        }
        @keyframes play04 {
            0% {
                background-position-x: 0px;
            }
            100% {
                background-position-x: p2r(-1680);
            }
        }
    }

    .title {
        padding-left: p2r(20);
        color: #fff;
        font-weight: bold;
        font-size: p2r(36);
    }

    .nav {
        padding-right: p2r(10);
        display: flex;
        position: relative;
        z-index: 1;

        .nav-item {
            color: #fff;
            font-size: p2r(30);
            margin: 0 p2r(10);
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
