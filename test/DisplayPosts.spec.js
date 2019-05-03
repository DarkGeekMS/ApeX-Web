import { shallowMount } from '@vue/test-utils'
import DisplayPosts from '../src/components/DisplayPosts.vue';
import expect from 'expect';
import moxios from 'moxios'


import VueLocalStorage from 'vue-localstorage'
import Vue from 'vue'
Vue.use(VueLocalStorage);

describe ('DisplayPosts' , () =>{
  let wrapper;
  beforeEach(() => {
       wrapper = shallowMount(DisplayPosts);

  });

    it('default postInfo to be null' , () =>{
 		expect(wrapper.vm.postInfo).toBe('');
    });



});
