export function loadStore<T = any>(): T | undefined {
    try {
      const serializedState = localStorage.getItem('state');

      if (serializedState === null) {
        return undefined;
      }
      
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
};
  
export function saveStore<T = any>(state: T): void {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (err) {}
};