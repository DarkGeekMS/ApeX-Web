import { shallowMount } from '@vue/test-utils'
import UserProfile from '../src/components/UserProfile.vue'
import expect from 'expect';
import moxios from 'moxios'
import axios from 'axios'


import VueLocalStorage from 'vue-localstorage'
import Vue from 'vue'
Vue.use(VueLocalStorage);

describe('user profile test', () => {
  const wrapper = shallowMount(UserProfile);
        beforeEach(() => {
          moxios.install();
        });
        afterEach(() => {
          moxios.uninstall();
        });
        it('has post tab',()=>{
          expect(wrapper.contains('#posttab')).toBe(true);
      });
      it('does not show saved tab for guests',()=>{
        if(wrapper.vm.notGuest){
          const link=wrapper.find('#savedtab');
          expect((link).isVisible()).toBe(true);
          }
          else{
              const link=wrapper.find('#savedtab');
              expect((link).isVisible()).toBe(false);
          }
       
      });
      it('does not show hidden tab for guests',()=>{
        if(wrapper.vm.notGuest){
          const link=wrapper.find('#hiddentab');
          expect((link).isVisible()).toBe(true);
          }
          else{
              const link=wrapper.find('#hiddentab');
              expect((link).isVisible()).toBe(false);
          }
      });
      it(' do not show block list tab for the user',()=>{
        const link=wrapper.find('#blocklistab');
          if(wrapper.vm.notGuest){
          expect((link).isVisible()).toBe(true);
            }
            else{
               const link=wrapper.find('#blocklistab');
                expect((link).isVisible()).toBe(false);
            }
      });
});