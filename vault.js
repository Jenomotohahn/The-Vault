'use strict';
module.exports = function() {
    let vault = {};

    function getValue(key){
        if(vault[key] === undefined){
            return null;
        }else{
            return vault[key];
        }
    }
    function setValue(key, value){
        vault[key] = value;
        return vault[key];
        
    }

    return {
        getValue,
        setValue,
    }
  
};