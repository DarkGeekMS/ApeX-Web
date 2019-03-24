function subscribe(request){
    if(request.username='nour'&& request.ApexCom=='apex-com'&&request.token==1){
        return true;
    }
    else{
        return false;
    }
}
function blockUser(request){
    if(request.username='nour'&& request.ApexCom=='apex-com'&&request.token==78){
        return true;
    }
    else{
        return false;
    }
}