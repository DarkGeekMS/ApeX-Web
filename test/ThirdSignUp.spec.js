import { shallowMount } from '@vue/test-utils'
import SignUp3 from '../src/components/Sign3Modal.vue';
import expect from 'expect';


import VueLocalStorage from 'vue-localstorage'
import Vue from 'vue'
Vue.use(VueLocalStorage);

describe ('SignUp3' , () =>{
    let wrapper;

    beforeEach(() => {
    	wrapper = shallowMount(SignUp3);
    });

    it('button exist in the modal' , () =>{
 		expect(wrapper.contains('button')).toBe(true);
    });



});
