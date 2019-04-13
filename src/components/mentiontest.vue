<template>
<div>
    <button v-on:click = "stringOp">slice</button>
   <p> {{con}} </p> 
   <p>{{content.length}}</p>

<div class = "condiv" v-for = "part in con" :key="part.start">
    <p class="content"  v-if = "!part.type" >{{part.c}}</p>
    <a class="user" href="" v-if = "part.type" >{{part.c}}</a>
</div>
</div>
</template>

<script>

export default {
  props:{

   
  },
   
  data(){
    return{
   content : " Double's Profile is u/Double u/OKgjhj u/hhh hhh ",
   con : []
    }
  },
  methods:{
      stringOp:function(){
          for (var i = 0;i<this.content.length;i++)
          {
              if (this.content[i]=='u' && this.content[i+1]=='/' && this.content[i+2]!=' ')
              {
                for (var x = i;x<this.content.length;x++)
                {
                    if (this.content[x+1]==' '|| x==this.content.length-1)
                    {
                    var str = this.content.slice(i,x+1);
                    this.con.push({c:str , type:1});
                    i=x+1;
                    break;
                    }
                }
              }
             
                    for (var x = i;x<this.content.length;x++)
                    {
                        if((this.content[x+1]=='u' && this.content[x+2]=='/' && this.content[x]==' ')||x==this.content.length-1)
                        {
                            var str = this.content.slice(i,x+1);
                            this.con.push({c:str , type:0});
                            i=x;
                            break;
                        }
                    }   

              
          }
      }
  },

  components: {
  }

}
</script>

<style scoped>
.condiv ,.content, .user  { 
display: inline;
 }


</style>
