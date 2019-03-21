import { mount } from 'vue-test-utils'
import hotposts from '../src/components/HotPosts.vue'
 import expect from 'expect';

describe ('hotposts',()=>{
it('defaults to marc',()=>{
let wrapper =mount(hotposts);
expect(wrapper.vm.Title).toBe('marc');

});


});
