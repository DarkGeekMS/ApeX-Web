export default {
  
 /* data() {
    return {
      email: 'ayat.mostafa998@gmail.com',
      username: 'Ayat Mostafa',
      password: '00100'
    }
  }, */
  methods:{
    TestLogin: function(email,user,pass){
        if( user == 'ayat mostafa' && pass == '28121998')
        {
            return true;
        }
        else{
            return false;
        }    
    }
  }
}