const fun1 = () => {
  console.log("I am fun1");
};

const fun2 = (fun1) => {
  console.log("I am fun2");
  fun1();
};

fun2(fun1);
