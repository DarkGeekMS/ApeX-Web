<template>
     <div>
            <div class="tabs">
                <ul class="nav nav-tabs">
                    <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive, }" class="tab" >
                        
                        <a :href="tab.href" @click="selectTab(tab)" >
                          
                            
                            <i v-if="tab.name==='Image'" class="glyphicon glyphicon-picture"></i>
                            <i v-if="tab.name==='Post'" class="glyphicon glyphicon-comment"></i>
                            <i v-if="tab.name==='Link'" class="glyphicon glyphicon-link"></i>
                            
                            {{ tab.name }} 
                          
                        </a>
                    </li>
                </ul>
            </div>
            <div class="tabs-details">
                <slot></slot>
            </div>
        </div>
        
</template>


<script>
import tab from './PostTab.vue';
export default {
    data() {
        return { tabs: [] 
       };
    },

    created() {
        this.tabs = this.$children;
    },

    methods: {
        selectTab(selectedTab) {
            this.tabs.forEach(tab => {
                tab.isActive = (tab.href == selectedTab.href);
            });
        },
        
    }
}
</script>

<style>
.nav>li {
    position: relative;
    display: block;
    width: 33%;
}
</style>


