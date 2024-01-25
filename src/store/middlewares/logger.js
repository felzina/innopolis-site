let loggerCounter = 0;

export const logger = (store) => (next) => (action) => {
  console.log(`Количество обработанных действий: ${++loggerCounter}`);

  console.log('action', action);
  const result = next(action);

  console.log("next state", store.getState())
  return result;
}