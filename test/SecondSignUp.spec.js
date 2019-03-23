import { shallowMount } from '@vue/test-utils
import SignUp2 from '../src/components/DemoSign2Modal.vue';
import expect from 'expect';
import moxios from 'moxios'

describe ('SignUp2' , () =>{
    let wrapper;

    beforeEach(() => {
    	wrapper = shallowMount(SignUp2);
    	moxios.install();
    });

    afterEach(() =>{
      	moxios.uninstall();
    });

    it('default username and password equal to zero' , () =>{
 		    expect(wrapper.vm.username).toBe('');
        expect(wrapper.vm.pass).toBe('');
    });

    it('check value from input to variables' , () =>{
    	  let inputUser = wrapper.find('input[name=username]');
        inputUser.element.value = 'myName';
        inputUser.trigger('input');

        let inputPass = wrapper.find('input[name=password]');
        inputPass.element.value = 'password';
        inputPass.trigger('input');

 		    expect(wrapper.vm.username).toBe('myName');
        expect(wrapper.vm.pass).toBe('password');
    });


    it('check data send to the server', () =>{
     	let inputUser = wrapper.find('input[type=text]');
      inputUser.element.value = 'myName';
      inputUser.trigger('input');

      let inputPass = wrapper.find('input[type=password]');
      inputPass.element.value = 'password';
      inputPass.trigger('input');

      expect(wrapper.contains('button')).toBe(true);
      wrapper.find('button').trigger('click');

     	moxios.stubRequest('https://jsonplaceholder.typicode.com/',{
     		status:200,
     		response:{
     			Username : wrapper.vm.username,
         	password : wrapper.vm.pass
     		}
     	});

      moxios.wait(() => {
        expect(wrapper.contains('button')).toBe(false);
        done()
      }); 

    });

});
