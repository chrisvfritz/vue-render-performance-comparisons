# Vue Render Performance Comparisons

> Very simple project to benchmark Vue's render performance in comparison to other libraries - currently only React, though other contributions are welcome.

## Usage

```
npm install
npm start
```

Then run the benchmarks for:

- Vue at `http://localhost:8080`
- React at `http://localhost:9090`

## Rules / Constraints

- Use one component per element to establish a nested hierarchy.
- Where libraries offer multiple component types, use the most performant type possible. Since state updates are not part of this benchmark, these components can be stateless and instanceless.
