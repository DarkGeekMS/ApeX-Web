import { shallowMount,mount, createLocalVue } from '@vue/test-utils'
import ApexComSideBar from '../src/components/ApexComSideBar.vue'
import expect from 'expect';
import moxios from 'moxios'
import axios from 'axios'


import VueLocalStorage from 'vue-localstorage'
import Vue from 'vue'
Vue.use(VueLocalStorage);


describe('ApexComSideBar test',()=>{
    const wrapper = shallowMount(ApexComSideBar);
    beforeEach(()=> {
        moxios.install();
    });
    afterEach(()=> {
        moxios.uninstall();
    });
    it('has subscribe button',()=>{
        expect(wrapper.contains('#subscribebutton')).toBe(true);
    });
    it('has create post button',()=>{
        expect(wrapper.contains('#createpostbutton')).toBe(true);
    });
    it(' do not show the delete button for the user',()=>{
        if(wrapper.vm.isAdmin()){
        expect(wrapper.find('#deteteApexCom').isVisible()).toBe(true);
        }
        else{
            expect(wrapper.find('#deteteApexCom').isVisible()).toBe(false);
        }
    });
    it('has change state',()=>{
        const subscribeButton = wrapper.find('#subscribebutton');
        expect(wrapper.vm.subscribed).toBe(false);
        expect(wrapper.vm.state).toBe('subscribe');
        subscribeButton.trigger('click');
        expect(wrapper.vm.subscribed).toBe(true);
        expect(wrapper.vm.state).toBe('subscribed');
    });
});
