import React from 'react';


export const findByTestAttr=(wrapper:any, title:string)=>{
    return wrapper.find(`[data-test="${title}"]`)
}