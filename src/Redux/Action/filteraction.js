export const filterag=(itemcat)=>{
    return {
        type:"SETFILTER",
        payload:itemcat,
    }
}

export const resetfilterag=()=>{
    return {
        type:"RESETFILTER",
        payload:"",
    } 
}