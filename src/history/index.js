export const createHistory = () => {
  const listeners = createEvents();

  const history = {
    listen(listener) {
      const removeListener = listeners.push(listener);
      
      return removeListener;
    },
    push(path) {
      window.history.pushState({ path }, '', path);
      listeners.call(path);
    },
  };

  return history;
}

const createEvents = () => {
  let handlers = [];

  return {
    push(func) {
      handlers.push(func);
      
      const removeHandler = () => {
        handlers = handlers.filter(handler => handler !== func);
      };

      return removeHandler;
    },
    call(arg) {
      handlers.forEach(func => func(arg));
    },
  };
};
