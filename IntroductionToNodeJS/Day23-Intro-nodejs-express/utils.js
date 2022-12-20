function multiply(a, b) {
  return a * b;
}

const log = {
  warning: (info) => {
    console.log("warning :", info);
  },
  error: (info) => {
    console.log("error :", info);
  },
};
const hello = "hello There";




module.exports = { multiply, log,hello };
