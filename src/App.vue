<template>
    <div id="app">

        <div style="margin-left: 30px;">
            <div class="container__header">
                <div @click="moveToCalculator">Calculator</div>
                <div @click="moveToVuex">Vuex</div>
                <div @click="moveToJest">Jest</div>
            </div>
            <router-view/>
        </div>

    </div>
</template>

<script>

export default {
    name: 'App',

    methods: {
        moveToCalculator() {
            this.$router.push('/calc');
        },
        moveToVuex() {
            this.$router.push('/vuex');
        },
        moveToJest() {
            this.$router.push('/jest');
        },
    }
}
</script>

<style>


    .container__header {
        display: flex;
        margin-bottom: 30px;
    }

    .container__header div {
        flex: 0 0 120px;
        border: 1px solid gray;
        justify-content: flex-end;
    }


</style>
