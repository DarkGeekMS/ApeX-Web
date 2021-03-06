import { shallowMount } from '@vue/test-utils'
import NavBar from '../src/components/NavBar.vue';
import expect from 'expect';
import moxios from 'moxios'

import VueLocalStorage from 'vue-localstorage'
import Vue from 'vue'
Vue.use(VueLocalStorage);



describe ('NavBar' , () =>{
    let wrapper;

    beforeEach(() => {
    	wrapper = shallowMount(NavBar);
        moxios.install();
    });

    afterEach(() =>{
        moxios.uninstall();

    });

    it('Login button and sign up button exist in navBar' , () =>{
        expect(wrapper.contains('div.form-group')).toBe(true);
    });

    it('hide userLogin' , () =>{
        expect(wrapper.find('div .log button').isVisible()).toBe(true);
    });


    it('logout send token to server ', () =>{

       expect(wrapper.contains('a.logOut')).toBe(true);
        wrapper.find('a.logOut').trigger('click');

        moxios.stubRequest('http://127.0.0.1:8000/api/sign_out',{
            status:200,
            response:{
                token : 1001
            }
        });
    });

});
