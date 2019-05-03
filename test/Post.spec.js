import { mount } from '@vue/test-utils'
import Post from '../src/components/Post.vue'
import DisplayPosts from '../src/components/DisplayPosts.vue';
import expect from 'expect'
import moxios from 'moxios'
// import sinon from 'sinon'
import VueLocalStorage from 'vue-localstorage'
import Vue from 'vue'
Vue.use(VueLocalStorage);

describe('Post' , ()=>{
  let wrapper;

  beforeEach(() => {
     wrapper = mount(Post);

    moxios.install();

  });

  afterEach(() =>{
      moxios.uninstall();

  });

it('unit test of post', () => {
  const d=wrapper.find('button.buttonDelete');

  if(expect(wrapper.vm.moderator).toBe(false)){

    expect((d).isVisible()).toBe(false);

  }

  expect(wrapper.isVisible()).toBe(true)


});


it('show the delete button for the moderator',()=>{
  const d2=wrapper.find('button.buttonDelete');
  if(wrapper.vm.moderator){
    expect((d2).isVisible()).toBe(true);
  }

});



it('has a button', () => {
  expect(wrapper.contains('button')).toBe(true)
});



it('has upvote button pressed ', () => {

     expect(wrapper.vm.votes).toBe(0)
     const button = wrapper.find('button')
     button.trigger('click')
     expect(wrapper.vm.votes).toBe(1);
     expect(wrapper.vm.className_down).toBe('btn btn-light btn-sm is-gray');

});





it('has downvote button pressed ', () => {

     expect(wrapper.vm.votes).toBe(0)
     const button = wrapper.find('button.DOWN')
     button.trigger('click')
     expect(wrapper.vm.votes).toBe(-1);
     expect(wrapper.vm.className_up).toBe('btn btn-light btn-sm is-gray');

});



it('save button pressed',()  =>  {
  expect(wrapper.vm.Saved).toBe('Save');
  const button = wrapper.find('button.SAVE');
  button.trigger('click');
  expect(wrapper.vm.Saved).toBe('unsave');


});


it('Hide button is pressed and the post has been Hidden',()=>{


const post=wrapper.find('div.panel');
expect((post).isVisible()).toBe(true);
wrapper.find('a.HIDE').trigger('click');
expect((post).isVisible()).toBe(false);

});

});
