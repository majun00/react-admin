export const filterData = (state, stateName) => (typeof state === 'object' ? state[stateName] : state)
