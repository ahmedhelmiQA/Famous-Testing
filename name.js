function checkName (name){
if(name.includs('@')){
    return 'USER';
}
else if(name.includs('.')){
    return 'USER';
}
else{
    return name;
}
}

module.exports = checkName;