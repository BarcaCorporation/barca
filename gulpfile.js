const gulp = require("gulp");
const gap = require("gulp-append-prepend");

gulp.task("licenses", async function () {
  // this is to add Barca Project licenses in the production mode for the minified js
  gulp
    .src("build/static/js/*chunk.js", { base: "./" })
    .pipe(
      gap.prependText(`/*!

=========================================================
* Barca CLI - v0.1.0 landing page based on Tailwind
=========================================================

* Product Page: https://github.com/project-barca/barca
* Copyright 2021 Creative Tim (https://cli.barca.io)
* Licensed under MIT (https://github.com/project-barca/barca/blob/main/LICENSE.md)

* Coded by Aníbal Henrique

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/`)
    )
    .pipe(gulp.dest("./", { overwrite: true }))
  gulp
    .src("build/index.html", { base: "./" })
    .pipe(
      gap.prependText(`<!--

      =========================================================
      * Barca CLI - v0.1.0 landing page based on Tailwind
      =========================================================
      
      * Product Page: https://github.com/project-barca/barca
      * Copyright 2021 Creative Tim (https://cli.barca.io)
      * Licensed under MIT (https://github.com/project-barca/barca/blob/main/LICENSE.md)
      
      * Coded by Aníbal Henrique
      
      =========================================================
      
      * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
        The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

-->`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));

  // this is to add Barca Project licenses in the production mode for the minified js
  gulp
    .src("build/static/css/*chunk.css", { base: "./" })
    .pipe(
      gap.prependText(`/*!

      =========================================================
      * Barca CLI - v0.1.0 landing page based on Tailwind
      =========================================================
      
      * Product Page: https://github.com/project-barca/barca
      * Copyright 2021 Creative Tim (https://cli.barca.io)
      * Licensed under MIT (https://github.com/project-barca/barca/blob/main/LICENSE.md)
      
      * Coded by Aníbal Henrique
      
      =========================================================
      
      * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
      
*/`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));
  return;
});
