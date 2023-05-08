const STATUS = 'Under construction';

function categoriStatus() {
  return {
    type: STATUS,
  };
}

const initialState = {
  catagories: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUS:
      return {
        state,
      };
    default:
      return state;
  }
};

categoriStatus();
reducer();
