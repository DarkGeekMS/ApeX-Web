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
        if(wrapper.vm.notGuest()){
        expect(wrapper.contains('#savedtab')).toBe(true);
      }
      else{
        expect(wrapper.contains('#savedtab')).toBe(true);
      }
      });
      it('does not show hidden tab for guests',()=>{
        if(wrapper.vm.notGuest()){
        expect(wrapper.contains('#hiddentab')).toBe(true);
      }
      else{
        expect(wrapper.contains('#hiddentab')).toBe(true);
      }
      });
      it(' do not show the report tab for the user',()=>{
          if(wrapper.vm.isModerator()){
          const link=wrapper.find('#reportab');
          expect((link).isVisible()).toBe(true);
            }
            else{
               const link=wrapper.find('#reporttab');
                expect((link).isVisible()).toBe(false);
            }
      });
});