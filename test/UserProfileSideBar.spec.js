import { shallowMount,mount, createLocalVue } from '@vue/test-utils'
import UserProfileSideBar from '../src/components/UserProfileSideBar.vue'
import expect from 'expect';
import moxios from 'moxios'
import axios from 'axios'


describe('userProfileSideBar test',()=>{
    const wrapper = shallowMount(UserProfileSideBar);
    beforeEach(()=> {
        moxios.install();
    });
    afterEach(()=> {
        moxios.uninstall();
    });
    it('has create post button',()=>{
        if(wrapper.vm.notGuest){
        expect(wrapper.find('#createpostbutton').isVisible()).toBe(true);
        }
        else{
            expect(wrapper.find('#createpostbutton').isVisible()).toBe(false);
        }
    });
    it(' do not show the delete button for the user',()=>{
        if(wrapper.vm.isAdmin&&!wrapper.vm.notGuest){
        expect(wrapper.find('#deletebutton').isVisible()).toBe(true);
        }
        else{
            expect(wrapper.find('#deletebutton').isVisible()).toBe(false);
        }
    });
    it(' show the block button for Guest only',()=>{
        if(!wrapper.vm.notGuest){
        expect(wrapper.find('#blocktbutton').isVisible()).toBe(true);
        }
        else{
            expect(wrapper.find('#blocktbutton').isVisible()).toBe(false);
        }
    });
});