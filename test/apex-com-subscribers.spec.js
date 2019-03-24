import { shallowMount } from '@vue/test-utils'
import ApexCom from '../src/components/Apex-com-subscribers.vue'
import expect from 'expect';
import moxios from 'moxios'
import axios from 'axios'


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
            moxios.stubRequest('http://localhost/get_subscribers', {
              status: 200,
              response:{
                  subscribersList:['op','opo','pop','oop'],
              }
            });
            axiosInstance.get('http://localhost/get_subscribers')
                .then(res => assert(res.status === 200))
                .finally(done);
        });  
    });