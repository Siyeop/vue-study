<template>
    <div>
        <div>
            <h1> Test Capturing </h1>
            <div class="outer" @click.capture.stop="onClickCaptureOuter">
                Outer
                <div class="inner" @click="onClickCaptureInner">
                    Inner
                </div>
            </div>
        </div>

        <div>
            <h1> Test Bubbling </h1>
            <div class="outer" @click.="onClickBubblingOuter">
                Outer
                <div class="inner" @click="onClickBubblingInner">
                    Inner
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'HelloWorld',
    data() {
        return {
            message: 'Unit Test',
            first: 7,
            second: 2,
            total: 0
        }
    },
    methods: {
        onClickCaptureOuter() {
            console.log('!! onClickCaptureOuter')
        },
        onClickCaptureInner() {
            console.log('!! onClickCaptureInner')
        },

        onClickBubblingOuter(e) {
            console.log(e)
            console.log('!!!! onClickBubblingOuter')
        },
        onClickBubblingInner(e) {
            console.log(e)
            console.log('!!!! onClickBubblingInner')
        }

    }
}
</script>

<style scoped>

    .outer {
        background-color: powderblue;
        border: 1px solid midnightblue;
    }
    .inner {
        background-color: cadetblue;
    }

</style>

