<template>
    <div class="card-list">
        <div v-for="(item, i) in list" class="card" :key="i">
            <div class="cover-pic">
                <div class="structure" v-if="!item"></div>
                <img v-else :src="item.coverPic" />
            </div>
            <div class="title">
                <div v-if="!item" class="structure"></div>
                {{ item && item.title }}
            </div>
            <div class="discript">
                <div v-if="!item" class="structure"></div>
                {{ item && item.descript }}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import coverPic from '@images/helloworld.jpg';
// import coverPic from '@data/pic.d.ts';

@Component({
    components: {}
})
export default class Skeleton extends Vue {
    private data = {
        // coverPic: "helloworld.jpg", // 把这个图片地址换成自己的
        coverPic,
        title: '骨架屏数据标题',
        descript: '描述: 任意多行文本...'
    };

    private list = Array(20).fill(null);

    public delay(ms: number): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                setTimeout(resolve, ms);
            } catch (e) {
                reject(e);
            }
        });
    }

    public async init(): Promise<any> {
        await this.delay(5000);
        this.list.fill(this.data);
        this.$forceUpdate();
    }

    created(): void {
        this.delay(5000).then(() => {
            this.list = this.list.map(() => this.data);
            this.$forceUpdate();
        });
    }
}
</script>

<style lang="scss" scoped>
@import '@styles/_function';

.card-list {
    display: flex;
    flex-wrap: wrap;
}
.card {
    display: flex;
    flex-flow: column;
    gap: 0.3rem;
    width: 50%;
    padding: 0.3rem;
    box-sizing: border-box;
}
@media screen and (min-width: 1366px) {
    .card {
        width: 25%;
    }
}
.title {
    font-size: 0.5rem;
}
.discript {
    font-size: 0.3rem;
    color: #888;
}
.cover-pic > img {
    @include wh(100%, 80px);
    border-radius: 0.3rem;
}
.cover-pic > .structure {
    height: p2r(80);
}
.title > .structure {
    width: 80%;
}
.discript > .structure {
    width: 30%;
}
.structure {
    @include wh(100%, 100%);
    background: #bbb;
    min-height: 0.5rem;
    border-radius: 0.3rem;
    animation: structure_loading 1s ease-in-out infinite alternate;
}
@keyframes structure_loading {
    from {
        background: #dddddd90;
    }
    to {
        background: #dddddd20;
    }
}

.info {
    position: absolute;
    @include center();
    height: 300px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;

    .avatar {
        border: 4px solid #ffffff;
        border-radius: 50%;
        @include bg('~@images/avatar.jpg');
        @include wh(128px, 128px);
        box-sizing: border-box;
    }

    .greet {
        font-size: 56px;
        color: #ffffff;
        font-weight: 600;
        padding-top: 20px;
        box-sizing: border-box;
    }

    .job {
        font-size: 24px;
        color: #ffffff;
    }
}
</style>
