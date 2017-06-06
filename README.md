# agile-grenoble

## Install, Build, Run

```bash
npm install -g bower gulp
npm install && bower install
gulp [serve]
```

## Gulp tasks

```bash
gulp clean # delete public/build and public/dist folders
gulp build # build the project for dev (in public/build)
gulp [serve] # build & launch a browser-sync server (with a watch)
gulp dist # package the project for prod (in public/dist)
```

## Folder structure

```
/public
  - /src
    - /app
      - /shell # the "shell" of the website (header, footer, ...)
      app.ts # main module declaration & .config
    - /app.pages
      - /<page>
        - /i18n # i18n for this "page"
          <locale>.json # one json per locale
        <page>.ts # controller / state declaration and whatnot
        <page>.scss # page specific styles
        <page>.html # page template
      app.pages.ts # module declaration
    - /app.services
      - /<service>
        - <service>.service.ts # service declaration
    index.html # app entry point
    main.scss # app-wide styles
  - /images # image assets for the project
  - /lib # bower dependencies
  - /build # dest folder for dev build
  - /dist # dest folder for prod package
```

## Build process

### HTML

Templates (in `src/app/` & `src/app.pages`) are minified and put in `$templateCache`

`index.html` is minified and dependencies are:
 * injected via wiredep (build)
 * concatenated via useref (dist)

### Scripts

TypeScript is transpiled (build) and concatenated + uglyfied (dist)

### Styles

Sass (build) and concatenated + minified + purified (dist)

### Images & Fonts

Copied to dist (dist)

### I18N

json files are concatenated by locale (build) & copied to dist (dist)

## How to add a page

* Create a folder under `public/src/app.pages` named `<my-page>`

* Create ts, html & scss files inside

* create sub-folder `i18n` and `<locale>.json` files if needed

* Declare your state in ts file (see demo page for example)

  - /!\ your state must be a child of the `shell` state (e.g.: `shell.<my-page>`) if you want header, footer, ...

* Add logic, template, styles, whatever...