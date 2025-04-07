const add = (a: number, b: number) => {
    return a + b;
};

type AddFn = typeof add; // extract function types

type ReturnValueType<T> = T extends (...args: any[]) => infer RV ? RV : T; // extracts function return value

type AddFnReturnValueType = ReturnValueType<AddFn>; // applies return extraction function to the extracted function type <- this sounds horrible :D
