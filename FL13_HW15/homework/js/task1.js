function assign(){
    if (arguments.length > 0){
        for (let i = 0; i < arguments.length; i++){
            let argument = arguments[i];
            
            for(var propertyName in argument) {
                arguments[0][propertyName] = argument[propertyName];
            }
        }   
        
        return arguments[0];
    }
}
