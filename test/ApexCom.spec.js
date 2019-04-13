import { shallowMount,mount, createLocalVue } from '@vue/test-utils'
import ApexCom from '../src/components/ApexCom.vue'
import expect from 'expect';
import moxios from 'moxios'
import axios from 'axios'


describe('ApexCom test',()=>{
    const wrapper = shallowMount(ApexCom);
    beforeEach(()=> {
        moxios.install();
    });
    afterEach(()=> {
        moxios.uninstall();
    });
    it('has subscribe button',()=>{
        expect(wrapper.contains('#subscribebutton')).toBe(true);
    });
    it('stub response for any matching request URL',() =>{
        wrapper.find('#subscribebutton').trigger('click');
        // Match against an exact URL value
        moxios.stubRequest('http://localhost/subscribe', {
            status: 200,
            response: {
                ApexCom : 'ApexComName',
                token : 566
            }
        });
    });
    it(' do not show the subscribers list for the user',()=>{
        const link=wrapper.find('#subscribersListlink');
        if(wrapper.vm.type==3){
          expect((link).isVisible()).toBe(false);
        }
    });
});
describe('axios get requsts', () => {
    let axiosInstance;
    beforeEach(() => {
      axiosInstance = axios.create();
      moxios.install(axiosInstance);
    });
    afterEach(() => {
      moxios.uninstall(axiosInstance);
    });
    it('should axios get request', (done) => {
        moxios.stubRequest('http://localhost/about', {
          status: 200,
          response:{
              description:'uiuiuiui',
              rules:['op','opo','pop','oop'],
              subscribersCount:89,
              moderators:['ioi','oio'],
          }
        });
        axiosInstance.get('http://localhost/about')
            .then(res => assert(res.status === 200))
            .finally(done);
    });  
});


