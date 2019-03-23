export default { 
  data() {
    return {
      email: 'ayat.mostafa998@gmail.com',
      username: 'Ayat Mostafa',
      password: '00100',
      token: '01aabb'
    }
  },
  methods:{
    TestSignUp: function(email,user,pass){
        if( user == this.username && pass == this.password && email == this.email)
        {
            return true;
        }
        else{
            return false;
        }    
    },

    TestLogIn: function(user,pass){
        if( user == this.username && pass == this.password)
        {
            return true;
        }
        else{
            return false;
        } 
    },

    TestLogOut: function(token){
      if(token == this.token)
      {
        return true;
      }
      else
      {
        return false
      }
    }
  }
}