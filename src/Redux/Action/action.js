export const setTablenumberag = (number) => {    
  return {
    type: "SETNUMBER",
    payload: number,
  };
};

export const resettableag = () => {    
    return {
      type: "SETNUMBER",
      payload: null,
    };
  };
  