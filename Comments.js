function addComment(commentParent){
    return commentParent+"_Child";
}

function vote(comment,type,current){
    if(type=='Up' && current == 0)
        return 1;
    if(type=='Up' && current == 1)
        return 0;
     if(type=='Up' && current == -1)
        return 1;
    if(type=='Down' && current == 0)
        return -1;
    if(type=='Down' && current == 1)
        return -1;
     if(type=='Down' && current == -1)
        return 0;
    
}