import { shallowMount } from '@vue/test-utils';
import forgetUser from '../src/components/ForgetUser.vue';
import expect from 'expect';

describe ('forgetUser' , () =>{
    let wrapper;

    beforeEach(() => {
    	wrapper = shallowMount(forgetUser);
    });

    it('default email and username equal to null' , () =>{
 		expect(wrapper.vm.email).toBe('');
        expect(wrapper.vm.pass).toBe('');
    });

    it('check value from input to variables' , () =>{
    	let inputUser = wrapper.find('input[type="email"]');
        inputUser.element.value ='myEmail' ;
        inputUser.trigger('input');

 		expect(wrapper.vm.email).toBe('myEmail');
    });


    it('check username value and its error', () =>{
        let inputUserp = wrapper.find('input[type="password"]');
        inputUserp.element.value ='1245675' ;
        inputUserp.trigger('input');

        wrapper.find('button.btn').trigger('click');

        expect(wrapper.vm.errorP).toBe('');

     	expect(wrapper.vm.errorE).toBe('Please enter an email address');

    }); 

    it('check password value and its error', () =>{
        let inputUserE = wrapper.find('input[type="email"]');
        inputUserE.element.value ='myEmail' ;
        inputUserE.trigger('input');
        let inputUserN = wrapper.find('input[type="password"]');
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
