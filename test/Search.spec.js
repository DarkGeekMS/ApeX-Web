import { createLocalVue, shallowMount } from '@vue/test-utils'
import Search from '../src/components/Search.vue';
import expect from 'expect';
import moxios from 'moxios';
import Vue from 'vue'

import VueRouter from "vue-router";
import Routes from '../src/routes'
import VueLocalStorage from 'vue-localstorage'

Vue.use(VueLocalStorage);
Vue.use(VueRouter);


describe ('Search' , () =>{
    let wrapper;

    beforeEach(() => {
    	wrapper = shallowMount(Search);
        moxios.install();
    });

    afterEach(() =>{
        moxios.uninstall();

    });

    it('header exist in search' , () =>{
        const localVue = createLocalVue();
        localVue.use(VueRouter);
        expect(wrapper.contains('div .header')).toBe(true);
    });

    

});
