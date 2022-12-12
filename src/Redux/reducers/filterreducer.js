



const init={filter_name:"All Items"}


export const filterreducer=(store=init,action)=>{
    // console.log("hi",action);
const {type,payload}=action
switch(type){
    case "SETFILTER":return {...store,filter_name:payload}
    case "RESETFILTER":return {...store,filter_name:"All Items"}

    default:return store

}


}