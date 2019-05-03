import { mount } from '@vue/test-utils'
import CommentParent from '../src/components/CommentParent.vue';
import expect from 'expect';
import moxios from 'moxios'


import VueLocalStorage from 'vue-localstorage'
import Vue from 'vue'
Vue.use(VueLocalStorage);

describe ('Comment' , () =>{
    let wrapper;
    beforeEach(() => {
         wrapper = mount(CommentParent);

    	moxios.install();
    });

    afterEach(() =>{
      	moxios.uninstall();
    });


    it('add comments in the array', () => {

        wrapper.vm.addComment('content1',[],'user1','parentID_1','currentID_1');
        wrapper.vm.addComment('content2',[],'user2','parentID_2','currentID_2');
        expect(wrapper.vm.comments.length).toBe(2);

        wrapper.vm.addComment('',[],'user3','parentID_3','currentID_3');
        expect(wrapper.vm.comments.length).toBe(2);

    });


    it('add replies in the array', () => {

        wrapper.vm.addComment('content1',[],'user1','parentID_1','currentID_1');
        wrapper.vm.addComment('content2',[],'user2','parentID_2','currentID_2');
        wrapper.vm.addComment('content3',[],'user3','parentID_3','currentID_3');
        expect(wrapper.vm.comments.length).toBe(3);

        wrapper.vm.addReply('Reply to comment 2',[],1,1,'currentID_2','currentID_4');
       
        
        expect(wrapper.vm.comments[2].content).toEqual('Reply to comment 2');
        expect(wrapper.vm.comments[2].idx).toEqual(2);
        expect(wrapper.vm.comments[2].level).toEqual(1);
        expect(wrapper.vm.comments[2].parentIdx).toEqual(1);
        expect(wrapper.vm.comments[2].parentID).toEqual('currentID_2');
        expect(wrapper.vm.comments[2].currentID).toEqual('currentID_4');

        



    });


    it('edit comments in the array', () => {

        wrapper.vm.addComment('content1',[],'user1','parentID_1','currentID_1');
        wrapper.vm.addComment('content2',[],'user2','parentID_2','currentID_2');
        expect(wrapper.vm.comments.length).toBe(2);
        wrapper.vm.editComment('content1_updated',0);



        expect(wrapper.vm.comments[0].content).toEqual('content1_updated');
        expect(wrapper.vm.comments[0].idx).toEqual(0);
        expect(wrapper.vm.comments[0].level).toEqual(0);
        expect(wrapper.vm.comments[0].parentIdx).toEqual(-1);
        expect(wrapper.vm.comments[0].parentID).toEqual('parentID_1');
        expect(wrapper.vm.comments[0].currentID).toEqual('currentID_1');
            

    });

    it('delete comments and their children in the array', () => {

        wrapper.vm.addComment('content1',[],'user1','parentID_1','currentID_1');
        wrapper.vm.addComment('content2',[],'user2','parentID_2','currentID_2');


        wrapper.vm.addReply('Reply to comment 1',[],0,1,'parentID_2','currentID_4');
        wrapper.vm.addReply('Reply to reply of comment 1',[],1,2,'currentID_4','currentID_5');


        wrapper.vm.deleteComment(0);
       
        expect(wrapper.vm.comments[0].content).toEqual('content2');
        expect(wrapper.vm.comments[0].idx).toEqual(0);
        expect(wrapper.vm.comments[0].level).toEqual(0);
        expect(wrapper.vm.comments[0].parentID).toEqual('parentID_2');
        expect(wrapper.vm.comments[0].currentID).toEqual('currentID_2');
            
        expect(wrapper.vm.comments.length).toBe(1);




    });




});
