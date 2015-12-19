:: "mkdir -p public/js && mkdir -p public/css && npm run build-css && npm run build-js && npm run build-html"
@if NOT EXIST public\js  mkdir public\js  >NUL
@if NOT EXIST public\css mkdir public\css >NUL
npm run bin\build-css.cmd
::npm run build-js.cmd
::npm run build-html.cmd

