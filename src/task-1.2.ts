function promisify<T>(value: T): Promise<T> {
  return Promise.resolve(value);
}

(async () => {
  const age = await promisify<number>(2);
  console.log(age);
})();
