import {shallowMount } from '@vue/test-utils'
import CreatePost from '../src/components/CreatePost.vue'
import expect from 'expect'
import moxios from 'moxios'
import { RichTextEditorPlugin, Toolbar, HtmlEditor } from "@syncfusion/ej2-vue-richtexteditor";
// import sinon from 'sinon'
describe('Post' , (done)=>{
  let wrapper;
  wrapper = shallowMount(CreatePost);

  beforeEach(() => {
  
    moxios.install();

  });

  afterEach(() =>{
      moxios.uninstall();

  });

it('unit test of post', () => {
  
  // const button = wrapper.find('#button2')
  // button.trigger('click')
  // expect(wrapper.vm.submitPost).toBeCalled();

  expect(wrapper.findAll('div').exists()).toBe(true)
});

});
