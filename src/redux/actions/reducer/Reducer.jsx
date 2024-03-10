const initial_state = {
    user_data: []
  };
  
  export const todoreducers = (state = initial_state, action) => {
    switch (action.type) {
      case 'ADD_DATA':
        return {
          ...state,
          user_data: [...state.user_data, action.payload]
        };
  
      case 'RMV_DATA':
        const dltdata = state.user_data.filter((ele, k) => k !== action.payload); // Use strict inequality !==
  
        return {
          ...state,
          user_data: dltdata
        };

        case 'UPDATE_DATA':
            const updatedata = state.user_data.map((ele,k)=>k==action.d?action.payload:ele)

            return {
                ...state,
                user_data: updatedata
              };
  
      default:
        return state;
    }
  };
  