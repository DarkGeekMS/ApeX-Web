import { mount } from '@vue/test-utils'
import DisplayPosts from '../src/components/DisplayPosts.vue';
import expect from 'expect';
import moxios from 'moxios'

describe ('DisplayPosts' , () =>{
  let wrapper;
  beforeEach(() => {
       wrapper = mount(DisplayPosts);

  });

    it('default postInfo to be null' , () =>{
 		expect(wrapper.vm.postInfo).toBe('');
    });



});
