const init={
    table_number:null
}

const tablereducer = (store=init,action) => {
  const {type,payload}=action;
  switch(type){
    case "SETNUMBER": return {...store,table_number:payload}
    case "RESETTABLENUMBER":return {...store,table_number:null}
    default:return store
  }
}

export default tablereducer