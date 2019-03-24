import { shallowMount,mount, createLocalVue } from '@vue/test-utils'
import ApexCom from '../src/components/Apex-com.vue'
import expect from 'expect';
import moxios from 'moxios'
import axios from 'axios'
import VueRouter from "vue-router"
import NestedRoute from "../src/components/Apex-com-subscribers.vue"
import routes from "../src/routes.js"

const localVue = createLocalVue();
localVue.use(VueRouter);

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
    it("renders a child component via routing", () => {
        const router = new VueRouter({ routes });
        const wrapper = mount(ApexCom, { localVue, router });

        router.push("/ApexCom/subscribersList/:ApexComName");

        expect(wrapper.find(NestedRoute).exists()).toBe(true);
    });
});
describe('some-thing', () => {
    let axiosInstance;
    beforeEach(() => {
      axiosInstance = axios.create();
      moxios.install(axiosInstance);
    });
    afterEach(() => {
      moxios.uninstall(axiosInstance);
    });
    it('should axios a thing', (done) => {
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
  
// subscribersList/:ApexComName
// /ApexComsubscribersList/
