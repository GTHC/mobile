const initalState = {
    notifications: [],
    announcements: [],
    isLoading: false,
    error: false,
    errorMessage: '',
  };
  
  const notifications = (state = initalState, action) => {
    switch (action.type) {
      // get all team data (used in sign up)
      case 'BEGIN_GET_NOTIFICATIONS': {
        return {
          ...state,
          isLoading: true,
        };
      }
  
      case 'FAILED_GET_NOTIFICATIONS': {
        console.log("Failed", action.payload);

        return {
          ...state,
          error: true,
          errorMessage: action.payload,
          isLoading: false,
        };
      }  
  
      case 'END_GET_NOTIFICATIONS': {
       
        console.log("End",action.payload.data);

        return {
          ...state,
          notifications: action.payload.data.data.notifications,
          announcements: action.payload.data.data.announcements,
          isLoading: false,
        };
      }
      default:
        return state;
    }
  };
  
  export default notifications;
  