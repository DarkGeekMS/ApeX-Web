import { mount } from '@vue/test-utils'
import MessageBar from '../src/components/MessageBar.vue';
import expect from 'expect';
import moxios from 'moxios'


import VueLocalStorage from 'vue-localstorage'
import Vue from 'vue'
Vue.use(VueLocalStorage);

describe ('MessageBar' , () =>{
    let wrapper;
    beforeEach(() => {
         wrapper = mount(MessageBar);

    	moxios.install();
    });

    afterEach(() =>{
      	moxios.uninstall();
    });

    it('default' , () =>{
        expect(wrapper.vm.send).toBe(true);
        expect(wrapper.vm.all).toBe(false);
        expect(wrapper.vm.read).toBe(false);
        expect(wrapper.vm.unread).toBe(false);
        expect(wrapper.vm.sent).toEqual(false);
        expect(wrapper.vm.inbox).toBe(false);
    });

    it('has Write Message button pressed ', () => {

        const sendButton = wrapper.find('#send');
        sendButton.trigger('click');
        expect(wrapper.vm.send).toBe(true);
        expect(wrapper.vm.all).toBe(false);
        expect(wrapper.vm.read).toBe(false);
        expect(wrapper.vm.unread).toBe(false);
        expect(wrapper.vm.sent).toBe(false);
        expect(wrapper.vm.inbox).toBe(false);

       
   });


   it('has inbox button pressed ', () => {

    const inboxButton = wrapper.find('#inbox');
    inboxButton.trigger('click');
    expect(wrapper.vm.send).toBe(false);
    expect(wrapper.vm.all).toBe(true);
    expect(wrapper.vm.read).toBe(false);
    expect(wrapper.vm.unread).toBe(false);
    expect(wrapper.vm.sent).toBe(false);
    expect(wrapper.vm.inbox).toBe(true);

   
});


it('has sent button pressed ', () => {

    const sentButton = wrapper.find('#sent');
    sentButton.trigger('click');
    expect(wrapper.vm.send).toBe(false);
    expect(wrapper.vm.all).toBe(false);
    expect(wrapper.vm.read).toBe(false);
    expect(wrapper.vm.unread).toBe(false);
    expect(wrapper.vm.sent).toBe(true);
    expect(wrapper.vm.inbox).toBe(false);

   
});



it('has all button pressed ', () => {

    const allButton = wrapper.find('#all');
    allButton.trigger('click');
    expect(wrapper.vm.send).toBe(false);
    expect(wrapper.vm.all).toBe(true);
    expect(wrapper.vm.read).toBe(false);
    expect(wrapper.vm.unread).toBe(false);
    expect(wrapper.vm.sent).toBe(false);

   
});


it('has read button pressed ', () => {

    const readButton = wrapper.find('#read');
    readButton.trigger('click');
    expect(wrapper.vm.send).toBe(false);
    expect(wrapper.vm.all).toBe(false);
    expect(wrapper.vm.read).toBe(true);
    expect(wrapper.vm.unread).toBe(false);
    expect(wrapper.vm.sent).toBe(false);

   
});


it('has unread button pressed ', () => {

    const unreadButton = wrapper.find('#unread');
    unreadButton.trigger('click');
    expect(wrapper.vm.send).toBe(false);
    expect(wrapper.vm.all).toBe(false);
    expect(wrapper.vm.read).toBe(false);
    expect(wrapper.vm.unread).toBe(true);
    expect(wrapper.vm.sent).toBe(false);

   
});








});
