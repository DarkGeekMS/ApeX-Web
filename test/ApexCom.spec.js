import { shallowMount,mount, createLocalVue } from '@vue/test-utils'
import ApexCom from '../src/components/ApexCom.vue'
import expect from 'expect';
import moxios from 'moxios'
import axios from 'axios'


import VueLocalStorage from 'vue-localstorage'
import Vue from 'vue'
Vue.use(VueLocalStorage);

describe('ApexCom test',()=>{
    const wrapper = shallowMount(ApexCom);
    beforeEach(()=> {
        moxios.install();
    });
    afterEach(()=> {
        moxios.uninstall();
    });
    it('has post tab',()=>{
        expect(wrapper.contains('#postslink')).toBe(true);
    });
    it(' do not show the report tab for the user',()=>{
        if(wrapper.vm.isModerator){
        const link=wrapper.find('#reportlink');
        expect((link).isVisible()).toBe(true);
        }
        else{
            const link=wrapper.find('#reportlink');
            expect((link).isVisible()).toBe(false);
        }
    });
    it(' do not show the subscribers list for the user',()=>{
        if(wrapper.vm.isModerator){
        const link=wrapper.find('#subscribersListlink');
        expect((link).isVisible()).toBe(true);
        }
        else{
            const link=wrapper.find('#subscribersListlink');
            expect((link).isVisible()).toBe(false);
        }
    });
    it(' do not show add moderator tab for the user',()=>{
        if(wrapper.vm.isAdmin){
        const link=wrapper.find('#addmoderatorlink');
        expect((link).isVisible()).toBe(true);
        }
        else{
            const link=wrapper.find('#addmoderatorlink');
            expect((link).isVisible()).toBe(false);
        }
    });
});