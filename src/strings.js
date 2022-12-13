function strings(str) {
  let y = "I am calling this function and passing this text as an argument.";
  return str + y;
}

// console.log("hello");

function concatenated(con) {
  const x = " Now I have concatenated this sentence to the prior one.";
  //   console.log(con);
  //   console.log(x);
  return con + x;
  //   return "hello";
}

function templateLiterals(temp) {
//   return strings("") + concatenated("");
return `${strings('')} ${concatenated('')}`
}

// export default strings;

export { strings, concatenated, templateLiterals };
