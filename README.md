# Unhandled Exception in TypeScript Arithmetic Functions

This repository demonstrates a common error in TypeScript: failing to handle potential runtime exceptions.  The `bug.ts` file contains a set of arithmetic functions (`add`, `subtract`, `multiply`, `divide`). The `divide` function correctly throws an error if division by zero is attempted, but this error isn't handled by the calling code, leading to the program crashing.

The `bugSolution.ts` file provides a corrected version demonstrating how to use `try...catch` blocks to gracefully handle potential errors and prevent program termination.

## How to Run

1. Clone the repository.
2. Compile the code using the TypeScript compiler (tsc):
   ```bash
   tsc bug.ts
   tsc bugSolution.ts
   ```
3. Run the compiled JavaScript files using Node.js:
   ```bash
   node bug.js
   node bugSolution.js
   ```

Observe the difference in behavior between the original and corrected versions.