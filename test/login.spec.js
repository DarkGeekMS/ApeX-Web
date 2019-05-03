import { shallowMount } from '@vue/test-utils'
import LogIn from '../src/components/DemoLoginModal.vue'
import expect from 'expect'
import moxios from 'moxios'


import VueLocalStorage from 'vue-localstorage'
import Vue from 'vue'
Vue.use(VueLocalStorage);

describe ('Login' , () =>{
    let wrapper;

    beforeEach(() => {
    	wrapper = shallowMount(LogIn);
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


     it('check data send to the server', (done) =>{
     	let inputUser = wrapper.find('input[type=text]');
        inputUser.element.value = 'myName';
        inputUser.trigger('input');

        let inputPass = wrapper.find('input[type=password]');
        inputPass.element.value = 'password';
        inputPass.trigger('input');

       expect(wrapper.contains('button.btn')).toBe(true);
        wrapper.find('button.btn').trigger('click');

     	moxios.stubRequest('http://127.0.0.1:8000/api/Sign_in',{
     		status:200,
     		response:{
     			Username : wrapper.vm.username,
         	    password : wrapper.vm.pass
     		}
     	});

     	moxios.wait(() => {
        done()
        });

    });


  /*   it('Visits the app root url', () => {
         wrapper.server()
         wrapper.route('https://jsonplaceholder.typicode.com/posts/1', {
           title: 'This is a stubbed title'
         })

         wrapper.visit('/')
         wrapper.contains('div', 'This is a stubbed title')
       });

       */



});
