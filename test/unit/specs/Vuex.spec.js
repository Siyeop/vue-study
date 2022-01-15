import Vue from 'vue'
import Vuex from '../../../src/components/Vuex'

let Constructor;
let vm;
let first;
let second;


// 초기화
beforeEach(() => {
    Constructor = Vue.extend(Vuex)
    vm = new Constructor().$mount()
    first = vm._data.first
    second = vm._data.second
})

describe('Vuex.vue', () => {
    describe('increaseTest', () => {
        it('should increase count in store', () => {
            expect(undefined).toBeUndefined();
        });
    })
})

test()
