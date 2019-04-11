<template id="reportspagedesign">
<div id='reports'>
    
</div>
</template>

<script>
import axios from 'axios'
import {globalStore} from '../main.js'

export default {
  data () {
    return {
      token:globalStore.token,
      ApexComName:'',
      reports:[],
    }
  },
  methods:
  {
  },
  mounted()
  {
    axios.get('http://localhost/review_reports', {
    params: {
      Token:this.token,
      ApexCom_id:this.ApexComName,
    }
  })
  .then(function (response) {
      this.reports = response.report;
  })
  .catch(function (error) {
    console.log(error);
  });
  }
}
</script>

<style scoped>

</style>
