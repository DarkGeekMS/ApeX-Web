import { shallowMount } from '@vue/test-utils'
import Search from '../src/components/CommunitiesAndUsers.vue';
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

    it('default' , () =>{
        expect(wrapper.vm.exist).toBe(true);
        expect(wrapper.vm.error).toBe('');
    });

    it('have two sub Div' , () =>{
        const Div = wrapper.find('#subDiv');
        expect(wrapper.contains('#subDiv')).toBe(true);
    });

    it('there is no matching apexComs' , () =>{
        wrapper.setData({ error: 'no matching for this search value'});
        wrapper.setData({ exist:false});
        
        expect(wrapper.find('#subDiv').text()).toBe("no matching for this search value ''''");
    }); 

    it('there is matching apexComs' , () =>{
        wrapper.setData({ apexs:['Ayat']});
        
        expect(wrapper.find('#sub1 .name').text()).toBe("Members");
    }); 

    

});