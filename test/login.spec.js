import { mount } from 'vue-test-utils';
import LogIn from '../src/components/DemoLoginModal.vue';
import expect from 'expect';
import moxios from 'moxios'

describe ('Login' , () =>{
    let wrapper;
    
    beforeEach(() => {
    	wrapper = mount(LogIn);
    	moxios.install();
    });

    afterEach(() =>{
      	moxios.uninstall();
    });

    it('default username and password equal to null' , () =>{
 		expect(wrapper.vm.username).toBe('');
        expect(wrapper.vm.pass).toBe('');
    }); 

    it('check value from input to variables' , () =>{
    	let inputUser = wrapper.find('input[type=text]');
        inputUser.element.value = 'myName';
        inputUser.trigger('input');

        let inputPass = wrapper.find('input[type=password]');
        inputPass.element.value = 'password';
        inputPass.trigger('input');

 		expect(wrapper.vm.username).toBe('myName');
        expect(wrapper.vm.pass).toBe('password');
    }); 

/*    it('increments the count when the button is clicked', () =>{
    	expect(wrapper.vm.count).toBe(0);
    	wrapper.find('button').trigger('click');
    	expect(wrapper.vm.count).toBe(1);
     }); */


     it('check data send to the server', () =>{
     	let inputUser = wrapper.find('input[type=text]');
        inputUser.element.value = 'myName';
        inputUser.trigger('input');

        let inputPass = wrapper.find('input[type=password]');
        inputPass.element.value = 'password';
        inputPass.trigger('input');

        expect(wrapper.contains('button.btn blue')).toBe(true);
        wrapper.find('button.btn blue').trigger('click');

     	maxios.stubRequest('https://jsonplaceholder.typicode.com/posts',{
     		status:200,
     		response:{
     			Username : 'myName',
         	    password : 'mypassword'
     		}
     	});

     });

});