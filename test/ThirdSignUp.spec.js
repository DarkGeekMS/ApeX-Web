import { shallowMount } from '@vue/test-utils'
import SignUp3 from '../src/components/DemoSign3Modal.vue';
import expect from 'expect';

describe ('SignUp3' , () =>{
    let wrapper;

    beforeEach(() => {
    	wrapper = shallowMount(SignUp3);
    });

    it('button exist in the modal' , () =>{
 		expect(wrapper.contains('button')).toBe(true);
    });



});
