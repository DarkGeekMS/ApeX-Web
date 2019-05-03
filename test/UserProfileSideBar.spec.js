import { shallowMount,mount, createLocalVue } from '@vue/test-utils'
import UserProfileSideBar from '../src/components/UserProfileSideBar.vue'
import expect from 'expect';
import moxios from 'moxios'
import axios from 'axios'

import VueLocalStorage from 'vue-localstorage'
import Vue from 'vue'
Vue.use(VueLocalStorage);


describe('ApexComSideBar test',()=>{
    const wrapper = shallowMount(UserProfileSideBar);
    beforeEach(()=> {
        moxios.install();
    });
    afterEach(()=> {
        moxios.uninstall();
    });
    it('has create post button',()=>{
        if(wrapper.vm.notGuest()){
        expect(wrapper.find('#createpostbutton').isVisible()).toBe(true);
        }
        else{
            expect(wrapper.find('#createpostbutton').isVisible()).toBe(false);
        }
    });
    it(' do not show the delete button for the user',()=>{
        if(wrapper.vm.isAdmin()){
        expect(wrapper.find('#deletebutton').isVisible()).toBe(true);
        }
        else{
            expect(wrapper.find('#deletebutton').isVisible()).toBe(false);
        }
    });
});