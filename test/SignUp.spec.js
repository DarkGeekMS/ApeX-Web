
import { shallowMount } from '@vue/test-utils';
import SignUp from '../src/components/DemoSignModal.vue';
import expect from 'expect';

describe ('SignUp' , () =>{
    let wrapper;

    beforeEach(() => {
    	wrapper = shallowMount(SignUp);
    });

    it('default email equal to null' , () =>{
 		expect(wrapper.vm.Value).toBe('');
    });

    it('check value from input to variables' , () =>{
    	let inputUser = wrapper.find('input[type="email"]');
        inputUser.element.value ='myEmail' ;
        inputUser.trigger('input');

 		expect(wrapper.vm.Value).toBe('myEmail');
    });


    it('check data valid', () =>{
     	let inputUser = wrapper.find('input[type="email"]');
        inputUser.element.value ='myEmail' ;
        inputUser.trigger('input');

        wrapper.find('button.btn').trigger('click');

     	expect(wrapper.vm.error).toBe('please fix your email to continue');

    });

});
