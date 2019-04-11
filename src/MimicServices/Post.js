function save(request){
    if(request.token=="1" && request.ID=="1"){

        return true;

    }
    return false;


}


function Hide(request){
    if(request.name=="1" && request.ID=="1"){

        return true;
    }
    return false;

}

function vote(request){
    if(request.name=="1"  && request.ID=="1"){

        if(request.direction==1 || request.direction==-1 || request.direction==0){

            return 200;
        }


    }


}


function deletePost(request){
    if(request.name=="1" && request.ID=="1"){

        return true;


    }


}
