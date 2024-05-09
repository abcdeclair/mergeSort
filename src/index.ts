import readline from "readline";
import merge from "./merge";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter input for collection1 (separated by space): ", (input1) => {
  rl.question(
    "Enter input for collection2 (separated by space): ",
    (input2) => {
      rl.question(
        "Enter input for collection3 (separated by space): ",
        (input3) => {
          const collection1 = input1.trim()
            ? input1.split(" ").map(Number)
            : [];
          const collection2 = input2.trim()
            ? input2.split(" ").map(Number)
            : [];
          const collection3 = input3.trim()
            ? input3.split(" ").map(Number)
            : [];

          const mergedArray = merge(collection1, collection2, collection3);
          console.log("The result:", mergedArray);

          rl.close();
        }
      );
    }
  );
});
