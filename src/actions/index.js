export const removeFeature = item => {
    return{type:"REMOVE", payload: item}
  };

  export const buyItem = item => {
    return{type:"ADD", payload: item}
  };