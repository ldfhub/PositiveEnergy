import { LOGIN_STATUS } from "../constants/login"

export const addLoginStatus = (status: boolean) => {
  return {
    type: LOGIN_STATUS,
    payload: status
  }
}
