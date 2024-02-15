export const validMail = (email) => {
  const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  if (reg.test(email) && email.length !== 0) {
    return true;
  } else {
    return false;
  }
};
export const validText = (text) => {

  if (text.length > 10) {
    return true;
  } else {
    return false;
  }
};

