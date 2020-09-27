export const SHOW_NOTIFICATION = "notification/SHOW_NOTIFICATION";
//알림 메시지 보여줌
export const HIDE_NOTIFICATION = "notification/HIDE_NOTIFICATION";
//알림 메시지 숨김

export function showMessage(message, warning = false) {
  //알림 메시지 보여줌
  return {
    type: SHOW_NOTIFICATION,
    payload: { message, warning },
  };
}

export function hideMessage() {
  //알림 메시지 숨김
  return {
    type: HIDE_NOTIFICATION,
  };
}
