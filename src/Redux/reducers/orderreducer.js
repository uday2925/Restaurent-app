
const init=[];

export const orderreducer=(state=init,action)=>{
    const {type,payload}=action;
    //console.log("pl",payload)
    switch(type){
        case "ADDITEM":return [...state,payload]
        default:return [...state]
    }

}