import { shallowMount } from '@vue/test-utils'
import ApexCom from '../src/components/Apex-com-subscribers.vue'
import expect from 'expect';
import moxios from 'moxios'
import axios from 'axios'
import routes from "../src/routes.js"

it("renders a username from query string", () => {
    const ApexcomName = "alice"
    const wrapper = shallowMount(ApexCom, {
      mocks: {
        $route: {
          params: { ApexcomName }
        }
      }
    })
    expect(wrapper.vm.ApexComName).toBe(ApexcomName);
  });

// describe('ApexCom test',()=>{
//     const wrapper = shallowMount(ApexCom);
//     beforeEach(()=> {
//         moxios.install();
//     });
//     afterEach(()=> {
//         moxios.uninstall();
//     });
//     it('has remove button',()=>{
//         expect(wrapper.contains('#removeButton')).toBe(true);
//     });
// });