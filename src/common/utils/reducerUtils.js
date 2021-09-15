export function createReducer(initial_state, func) {
  return (state = initial_state, { type, payload }) => {
    const handler = func[type];

    return handler ? handler(state, payload) : state;
  };
}
