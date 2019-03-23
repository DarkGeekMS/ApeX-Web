import { mount } from '@vue/test-utils'
import WriteComment from '../src/components/WriteComment.vue';
import expect from 'expect';
import moxios from 'moxios'


describe ('WriteComment' , () =>{
    let wrapper;
    beforeEach(() => {
         wrapper = mount(WriteComment);

    	moxios.install();
    });

    afterEach(() =>{
      	moxios.uninstall();
    });

    it('default' , () =>{
 		expect(wrapper.vm.editClicked).toBe(false);
        expect(wrapper.vm.currentID).toBe('');
    });

    it('has edit button pressed ', () => {
        // first press
        const editButton = wrapper.find('#Edit');

        editButton.trigger('click');
        expect(wrapper.vm.editClicked).toBe(true);
        // second press
        editButton.trigger('click');
        expect(wrapper.vm.editClicked).toBe(false);

   });

   it('has reply button pressed ', () => {
    // first press
    const replyButton = wrapper.find('#Reply');

    replyButton.trigger('click');
    expect(wrapper.vm.replyClicked).toBe(true);
    // second press
    replyButton.trigger('click');
    expect(wrapper.vm.replyClicked).toBe(false);

});


});
