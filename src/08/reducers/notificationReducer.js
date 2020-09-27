import {
  SHOW_NOTIFICATION,
  HIDE_NOTIFICATION,
} from "../actions/notificationActions";
//알림메시지 보여줌, 숨김 리듀서

const initState = {
  message: "",
  warning: false,
  showMessage: false,
};

export default (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SHOW_NOTIFICATION: {
      const { message, warning } = payload;
      return {
        ...state,
        showMessage: true,
        message,
        warning,
      };
    }
    case HIDE_NOTIFICATION: {
      return {
        ...state,
        message: "",
        showMessage: false,
      };
    }
    default:
      return state;
  }
};
