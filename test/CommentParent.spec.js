import { mount } from '@vue/test-utils'
import CommentParent from '../src/components/CommentParent.vue';
import expect from 'expect';
import moxios from 'moxios'


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

        wrapper.vm.addComment('content1','user1','parentID_1','currentID_1');
        wrapper.vm.addComment('content2','user2','parentID_2','currentID_2');
        expect(wrapper.vm.comments.length).toBe(2);

        wrapper.vm.addComment('','user3','parentID_3','currentID_3');
        expect(wrapper.vm.comments.length).toBe(2);

    });


    it('add replies in the array', () => {

        wrapper.vm.addComment('content1','user1','parentID_1','currentID_1');
        wrapper.vm.addComment('content2','user2','parentID_2','currentID_2');
        wrapper.vm.addComment('content3','user3','parentID_3','currentID_3');
        expect(wrapper.vm.comments.length).toBe(3);

        wrapper.vm.addReply('Reply to comment 2',1,1,'parentID_2','currentID_4');
        expect(wrapper.vm.comments[2]).toEqual(
            {
                user:this.$localStorage.userName,
                content:'Reply to comment 2',
                idx:2,
                level:1,
                parentIdx:1,
                parentID:'parentID_2',
                currentID:'currentID_4'
            }
        );



    });


    it('edit comments in the array', () => {

        wrapper.vm.addComment('content1','user1','parentID_1','currentID_1');
        wrapper.vm.addComment('content2','user2','parentID_2','currentID_2');
        expect(wrapper.vm.comments.length).toBe(2);
        wrapper.vm.editComment('content1_updated',0);

        expect(wrapper.vm.comments[0]).toEqual(
            {
                user:this.$localStorage.userName,
                content:'content1_updated',
                idx:0,
                level:0,
                parentIdx:-1,
                parentID:'parentID_1',
                currentID:'currentID_1'
            }
        );

    });

    it('delete comments and their children in the array', () => {

        wrapper.vm.addComment('content1','user1','parentID_1','currentID_1');
        wrapper.vm.addComment('content2','user2','parentID_2','currentID_2');


        wrapper.vm.addReply('Reply to comment 1',0,1,'parentID_2','currentID_4');
        wrapper.vm.addReply('Reply to reply of comment 1',1,2,'currentID_4','currentID_5');


        wrapper.vm.deleteComment(0);
        expect(wrapper.vm.comments[0]).toEqual(
            {
                user:this.$localStorage.userName,
                content:'content2',
                idx:0,
                level:0,
                parentIdx:-1,
                parentID:'parentID_2',
                currentID:'currentID_2'
            }
        );
        expect(wrapper.vm.comments.length).toBe(1);




    });




});
