import { postlogout, refreshtoken } from "../services/api";
import {
  removeFromLocalStorage,
  saveToLocalStorage,
} from "../services/localstorage";

const handlerefreshtoken = async (response, fetchfunction) => {
  if (response.status === 403) {
    const responsetoken = await refreshtoken();

    if (responsetoken.status === 403 || responsetoken.status === 401) {
      const responselogout = await postlogout("user_admin/logout");
      if (responselogout.clearLocal) removeFromLocalStorage("token");
      if (responselogout.success) window.location.href = "/Login";
      return;
    }
    saveToLocalStorage("token", responsetoken.accessToken);

    if (fetchfunction) await fetchfunction();
    return { success: true };
  }
};

export default handlerefreshtoken;
