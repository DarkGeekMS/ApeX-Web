import {shallowMount } from '@vue/test-utils'
import CreatePost from '../src/components/CreatePost.vue'
import expect from 'expect'
import moxios from 'moxios'
// import { RichTextEditorPlugin, Toolbar, HtmlEditor } from "@syncfusion/ej2-vue-richtexteditor";
// import sinon from 'sinon'
import VueLocalStorage from 'vue-localstorage'
import Vue from 'vue'
Vue.use(VueLocalStorage);

describe('CreatePost' , (done)=>{
  let wrapper;
  wrapper = shallowMount(CreatePost);

  beforeEach(() => {
  
    moxios.install();

  });

  afterEach(() =>{
      moxios.uninstall();

  });

it.only('test submit post function is called', () => {
 
  const button = wrapper.find('#button2')
  button.trigger('click')
  expect(wrapper.vm.submitPost).toBeCalled();

  // expect(wrapper.findAll('div').exists()).toBe(true)
});

it('CreatePost component has div tags', () => {
 
   expect(wrapper.findAll('div').exists()).toBe(true)
});

it('emit is working', () => {
  wrapper.vm.$emit('PostEmit')

});

it('has Post button', () => {
  expect(wrapper.contains('#button3')).toBe(true);

});
const wrapper = shallowMount(CreatePost, {
  parentComponent: CreatePost
})
expect(wrapper.vm.$parent.$options.name).toBe('foo')



it('div test',()=>{
  expect(wrapper.is('div')).toBe(true)

});
});

