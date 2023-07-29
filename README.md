example-project has two exports.
The JavaScript bundles (index.js and index.js.map) for both projects built with esbuild.

example-project/normal-typescript is built with TypeScript: each .ts file is compiled into its own .d.ts and .d.ts.map files.

example-project/api-extractor is built with api-extractor: the .d.ts files produced by TypeScript are combined into rolled up into one .d.ts file.
There is no .d.ts.map file for this rollup.

This cause Cmd-click in VSCode not to work for example-project/api-extractor.

To build the project

```sh
cd example-projects
npm i
npm run build
cd ../simple
npm i
code .
```
