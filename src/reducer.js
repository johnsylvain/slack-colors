export const reducer = (action, state) => {
  switch (action.type) {
    case 'UPDATE_NAME':
      return { ...state, name: action.payload };
  }
};
