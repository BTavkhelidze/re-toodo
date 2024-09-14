const apiRequest = async (url = '', optionObj = null) => {
  let errMsg = null;
  try {
    const response = await fetch(url, optionObj);
    if (!response.ok) throw new Error('Please reload the page');
    return await response.json();
  } catch (err) {
    errMsg = err.message;
    return errMsg;
  }
};

export default apiRequest;
