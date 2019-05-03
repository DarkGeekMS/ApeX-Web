import { mount } from '@vue/test-utils'
import Message from '../src/components/Message.vue';
import expect from 'expect';
import moxios from 'moxios'


import VueLocalStorage from 'vue-localstorage'
import Vue from 'vue'
Vue.use(VueLocalStorage);

describe ('Message' , () =>{
    let wrapper;
    beforeEach(() => {
         wrapper = mount(Message);

    	moxios.install();
    });

    afterEach(() =>{
      	moxios.uninstall();
    });

    it('default' , () =>{
        expect(wrapper.vm.showReplyBox).toBe(false);
        expect(wrapper.vm.showMessage).toBe(true);
        expect(wrapper.vm.block).toBe(false);
        expect(wrapper.vm.permalink).toBe(false);
        expect(wrapper.vm.replies).toEqual([]);
        expect(wrapper.vm.typeBar).toBe(0);
    });

    it('has reply button pressed ', () => {
        // first press
        const replyButton = wrapper.find('#Reply');
        replyButton.trigger('click');
        expect(wrapper.vm.showReplyBox).toBe(true);
        // second press
        replyButton.trigger('click');
        expect(wrapper.vm.showReplyBox).toBe(false);
   });


   it('has block button pressed ', () => {
    // first press
    const blockButton = wrapper.find('#BlockUserBut');
    blockButton.trigger('click');
    expect(wrapper.vm.block).toBe(true);
    // second press
    blockButton.trigger('click');
    expect(wrapper.vm.block).toBe(false);
});

it('has yes block button pressed ', () => {
    const blockButton = wrapper.find('#BlockUserBut');
    blockButton.trigger('click');
    expect(wrapper.vm.block).toBe(true);

    const yesBlockButton = wrapper.find('#yes');
    yesBlockButton.trigger('click');
    expect(wrapper.vm.showMessage).toBe(false);
});


it('has no block button pressed ', () => {
    const blockButton = wrapper.find('#BlockUserBut');
    blockButton.trigger('click');
    expect(wrapper.vm.block).toBe(true);

    const noBlockButton = wrapper.find('#no');
    noBlockButton.trigger('click');
    expect(wrapper.vm.block).toBe(false);
});


it('has permalink button pressed ', () => {
    // first press
    const permalinkButton = wrapper.find('#Permalink');
    permalinkButton.trigger('click');
    expect(wrapper.vm.permalink).toBe(true);
    // second press
    permalinkButton.trigger('click');
    expect(wrapper.vm.permalink).toBe(false);
});







});
