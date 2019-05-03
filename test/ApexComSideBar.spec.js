import { shallowMount,mount, createLocalVue } from '@vue/test-utils'
import ApexComSideBar from '../src/components/ApexComSideBar.vue'
import expect from 'expect';
import moxios from 'moxios'
import axios from 'axios'


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
        if(wrapper.vm.isAdmin){
        expect(wrapper.find('#deteteApexCom').isVisible()).toBe(true);
        }
        else{
            expect(wrapper.find('#deteteApexCom').isVisible()).toBe(false);
        }
    });
    it(' has subscribe button',()=>{
        expect(wrapper.find('#subscribebutton').isVisible()).toBe(true);
    });
    it('change state',()=>{
        if(wrapper.vm.subscribed) {
            expect(wrapper.vm.subscribed).toBe(true);
            expect(wrapper.vm.state).toBe('subscribed');
        }
        else{
            expect(wrapper.vm.subscribed).toBe(false);
             expect(wrapper.vm.state).toBe('subscribe');
        }
        
    });
});
