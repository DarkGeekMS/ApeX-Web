import { mount } from '@vue/test-utils'
import Comment from '../src/components/Comment.vue';
import WriteComment from '../src/components/WriteComment.vue';
import expect from 'expect';
import moxios from 'moxios'
import {globalStore} from '../src/main.js'


describe ('Comment' , () =>{
    let wrapper;
    let wrapper2;
    beforeEach(() => {
         wrapper = mount(Comment);
         wrapper2 = mount(WriteComment);

    	moxios.install();
    });

    afterEach(() =>{
      	moxios.uninstall();
    });

    it('default' , () =>{
 		expect(wrapper.vm.user).toBe(globalStore.Username);
        expect(wrapper.vm.upVoted).toBe(false);
        expect(wrapper.vm.downVoted).toBe(false);
        expect(wrapper.vm.points).toBe(0);
        expect(wrapper.vm.time).toBe(0);
        expect(wrapper.vm.showReplyBox).toBe(0);
        expect(wrapper.vm.showEditBox).toBe(0);
        expect(wrapper.vm.deleted).toBe(1);
        expect(wrapper.vm.unSaved).toBe('Save');

    });

    it('has upvote button pressed ', () => {
        // first press
        const upvoteButton = wrapper.find('#Up');
        upvoteButton.trigger('click');
        expect(wrapper.vm.upVoted).toBe(true);
        expect(wrapper.vm.downVoted).toBe(false);
        // second press
        const upvoteButton2 = wrapper.find('#Up2');
        upvoteButton2.trigger('click');
        expect(wrapper.vm.upVoted).toBe(false);
        expect(wrapper.vm.downVoted).toBe(false);
   });


   it('has downvote button pressed ', () => {
    // first press
    const downvoteButton = wrapper.find('#Down');
    downvoteButton.trigger('click');
    expect(wrapper.vm.downVoted).toBe(true);
    expect(wrapper.vm.upVoted).toBe(false);
    // second press
    const downvoteButton2 = wrapper.find('#Down2');
    downvoteButton2.trigger('click');
    expect(wrapper.vm.upVoted).toBe(false);
    expect(wrapper.vm.downVoted).toBe(false);
});


it('has edit button pressed ', () => {
    const editButton = wrapper.find('#Edit');
    //const editBox = wrapper.find('#EditBox');
    editButton.trigger('click');
    expect(wrapper.vm.showEditBox).toBe(true);
    //wrapper.vm.edit();
    //console.log(wrapper.emitted().Edit);
    //expect(wrapper.emitted().content).toBe(wrapper.vm.content);
    editButton.trigger('click');
    expect(wrapper.vm.showEditBox).toBe(false);
});


it('has reply button pressed ', () => {
    const replyButton = wrapper.find('#Reply');
    replyButton.trigger('click');
    expect(wrapper.vm.showReplyBox).toBe(true);
    replyButton.trigger('click');
    expect(wrapper.vm.showReplyBox).toBe(false);
});



it('has save button pressed ', () => {
    const saveButton = wrapper.find('#Save');
    expect(wrapper.vm.unSaved).toBe('Save');
    saveButton.trigger('click');
    expect(wrapper.vm.unSaved).toBe('Unsave');
    saveButton.trigger('click');
    expect(wrapper.vm.unSaved).toBe('Save');

});



});
