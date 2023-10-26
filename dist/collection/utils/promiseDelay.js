export function promiseDelay(ms = 5000) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}
//# sourceMappingURL=promiseDelay.js.map
