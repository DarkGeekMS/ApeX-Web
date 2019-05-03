import { shallowMount } from '@vue/test-utils';
import forgetPass from '../src/components/ForgetPass.vue';
import expect from 'expect';

describe ('forgetPass' , () =>{
    let wrapper;

    beforeEach(() => {
    	wrapper = shallowMount(forgetPass);
    });

    it('default email and username equal to null' , () =>{
 		expect(wrapper.vm.email).toBe('');
        expect(wrapper.vm.username).toBe('');
    });

    it('check value from input to variables' , () =>{
    	let inputUser = wrapper.find('input[type="email"]');
        inputUser.element.value ='myEmail' ;
        inputUser.trigger('input');

 		expect(wrapper.vm.email).toBe('myEmail');
    });


    it('check username value and its error', () =>{
        let inputUserN = wrapper.find('input[type="text"]');
        inputUserN.element.value ='myname' ;
        inputUserN.trigger('input');

        wrapper.find('button.btn').trigger('click');

        expect(wrapper.vm.errorU).toBe('');

     	expect(wrapper.vm.errorE).toBe('Please enter an email address');

    }); 

    it('check username value and its error', () =>{
        let inputUserE = wrapper.find('input[type="email"]');
        inputUserE.element.value ='myEmail' ;
        inputUserE.trigger('input');
        let inputUserN = wrapper.find('input[type="text"]');
        inputUserN.element.value ='myname' ;
        inputUserN.trigger('input');

        wrapper.find('button.btn').trigger('click');
        expect(wrapper.vm.errorE).toBe('That email is invalid');
    });

    it('close Modal' , () =>{
        const close = wrapper.find('#closebtn');
        close.trigger('click');
        expect(wrapper.contains('div .box')).toBe(false);
    });

});
