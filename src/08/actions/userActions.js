import createActions from "../../11/api-redux-pack/createActions";

const { create } = createActions("users");

//onComplete 콜백함수 인자로 전달, 회원가입 끝나면 모달 닫힘
export function createUser(data, onComplete) {
  return create(
    data,
    {},
    {
      notification: { success: "회원 가입이 성공적으로 완료되었습니다." },
      onSuccess: onComplete,
    }
  );
}
