import Vue from 'vue'
import Jest from "../../../src/components/Jest";

let Constructor;
let vm;
let first;
let second;


// 초기화
beforeEach(() => {
    Constructor = Vue.extend(Jest)
    vm = new Constructor().$mount()
    first = vm._data.first
    second = vm._data.second
})

describe('Jest.vue', () => {
    describe('유효성 검사', () => {
        it('숫자가 아닌 Null 또는 문자열을 입력할 경우 결과값이 에러(NaN)인지 확인한다.', () => {
            second = '가'
            // NaN값인 경우
            expect(vm.plus(first, second)).toBeNaN()
            expect(vm.minus(first, second)).toBeNaN()
            expect(vm.multiply(first, second)).toBeNaN()
            expect(vm.divide(first, second)).toBeNaN()
        })
        it('0으로 곱하기 또는 나누기 하려고 하는지 확인한다.', () => {
            second = 0
            // toBeFalsy : if 문의 리턴값이 false 인 경우
            expect(vm.multiply(first, 0)).toBeFalsy()
            expect(vm.divide(first, 0)).toBeFalsy()
        })
    })
    describe('사칙연산 테스트', () => {
        it('더하기의 결과값을 비교하여 일치한지 확인한다.', () => {
            // toBe : 기본값을 비교할때 사용
            expect(vm.plus(first, second)).toBe(9)
        })
        it('뺴기 결과값을 비교하여 정수인지 음수인지 확인한다.', () => {
            expect(vm.minus(first, second)).toBe(5)
        })
        it('곱하기의 결과값을 비교하여 일치한지 확인한다.', () => {
            expect(vm.multiply(first, second)).toBe(14)
        })
        it('나누기의 결과값을 비교하여 소스점 반올림이 되었는지 확인한다.', () => {
            // toBeCloseTo : 소수점 다음에 확인할 자리 수를 제어하는데 사용
            expect(vm.divide(first, second)).toBeCloseTo(4, 5)
        })
    })
})
