const process1 = (val: any) => {};
const process2 = (val: unknown) => {
  if (
    typeof val === 'object' &&
    !!val &&
    'log' in val &&
    typeof val.log == 'function'
  ) {
    val.log();
  }
};
