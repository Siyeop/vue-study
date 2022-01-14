<template>
    <div class="hello">
        <h1> Jest </h1>
        <h1>{{ message }}</h1>
        <ul>
            <li><input type="text" v-model="first" /></li>
            <li><input type="text" v-model="second" /></li>
            <li> = {{ total }} </li>
        </ul>
        <ul>
            <li><input type="button" value="더하기" @click="plus(first, second)" /></li>
            <li><input type="button" value="빼기" @click="minus(first, second)" /></li>
            <li><input type="button" value="곱하기" @click="multiply(first, second)" /></li>
            <li><input type="button" value="나누기(반올림)" @click="divide(first, second)" /></li>
        </ul>
        <h2></h2> <!-- 결과값 -->
    </div>
</template>

<script>
export default {
    name: 'Jest',
    data () {
        return {
            message: 'Unit Test',
            first: 7,
            second: 2,
            total: 0
        }
    },
    methods: {
        plus (frist, second) {
            this.total = parseInt(frist) + parseInt(second)
            return this.total
        },
        minus (frist, second) {
            this.total = parseInt(frist) - parseInt(second)
            return this.total
        },
        multiply (frist, second) {
            if (parseInt(frist) == 0 || parseInt(second) == 0) {
                return false
            }
            this.total = parseInt(frist) * parseInt(second)
            return this.total
        },
        divide (frist, second) {
            if (parseInt(frist) == 0 || parseInt(second) == 0) {
                return false
            }
            this.total = parseInt(frist) / parseInt(second)
            this.total = Math.round(this.total) // 소스점 반올림
            return this.total
        }
    }
}
</script>
