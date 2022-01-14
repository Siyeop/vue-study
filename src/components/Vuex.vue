<template>
    <div class="hello">
        <div> getters :: {{ $store.getters.getCount }} :: {{ $store.getters.getUserName }} </div>
        <div> mapGetters :: {{ count }} :: {{ userName }} </div>

        <button @click="increase"> increase </button>
        <button @click="decrease"> decrease </button>

        <button @click="increaseByMutations(count + 1)"> increaseByMutation </button>
        <button @click="decreaseByMutations(count - 1)"> decreaseByMutation </button>


    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

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

    computed: {
        ...mapGetters({
            count: 'getCount',
            userName: 'getUserName'
        }),
    },

    methods: {
        increase() {
            this.$store.dispatch('increment', this.$store.getters.getCount + 1);
        },
        decrease() {
            this.$store.dispatch('decrement', this.$store.getters.getCount - 1);
        },
        ...mapMutations({
            increaseByMutations: 'increment',
            decreaseByMutations: 'decrement'
        })
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
