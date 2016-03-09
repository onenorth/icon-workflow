# icon-workflow
A gulp-based workflow for generating icon systems from `SVG`s, with `.png` fallbacks for geriatric browsers.

You *should* be using SVGs, don't you know?

## Using This Project

Feel free to use and modify this project to suit your needs. It's meant to be a turn-key approach for generating icons with fallbacks from a bunch of source `SVG` files. All you have to do is dump a bunch of `.svg`s into folder, run `npm run buld-all`, and you'll quickly have a nice consolidated `SVG` spritesheet, plus a handy `.png` fallback spritesheet (for older browsers), both with accompanying `CSS`.

[Can I use](http://caniuse.com/) has a complete, up-to-date [list of browsers](http://caniuse.com/#feat=svg) that provide basic SVG support.

#### Setup

1. Grab the repo and put it on your box. Clone it, fork it, or download it.
2. Navigate to the folder on your machine when you put the project files, then open a command prompt and run `npm install` at the project root folder. This will install all the necessary dependencies.
3. Run `npm run build-all`. This will find all the SVG files within `assets/app/icons` folder, merge all `SVG`s together into `assets/dist/icons/svg-sprites.svg` file, then generate `PNG` fallbacks within `assets/dist/icons/png`, then copy all of the resulting output files to the 'build' folder at the root of the project.
4. Load the included `.html` file in your browser and see the glorious `SVG`s (use a decrepit browser like IE8 to see the `.png` fallbacks).

#### Other Tasks

##### Only Build SVG (no `.png` fallbacks)
If you don't care about older browser support, you can run the `npm run build-svg` task to only handle `.svg`s. You'll only get the consolidated `.svg` files, and the `.svg` spritesheet.

##### Only Build PNG (from `.svg` files)
Or, maybe you're only interested in creating a `.png` sprite and spritesheet from a bunch of `.svg` files, but you don't care about an `.svg` spritesheet. If that's the case, just run `npm run build-png`, and you'll only get a `.png` sprite with an accompanying `.css` with all the styles you'll need.

#### Using it

Once you've generated all your files, you're ready to use the output in your projects.

##### SVGs
- It would be best if you linked the `build/svg-sprites.svg` file right after the opening `<body>` tag.
- Include the `build/icon-fallback.js` external script file *after* all SVGs have loaded. Ideally, you'll reference the script right before the closing `</body>` tag.

## Feedback & Contributions

Feel free to leave us feedback on the workflow, or contribute to this project. Use the [Issues](https://github.com/onenorth/icon-workflow/issues) or [Pull Requests](https://github.com/onenorth/icon-workflow/pulls) to keep things on the rails.

## Roadmap

- Have a good idea, or a concern? Submit a pull request and we'll take a look!

## Credits

The following is a limited list of people and resources used to fuel this project.

#### Packages
- [gulp](https://github.com/gulpjs/gulp): The ultimate JS build tool
- [gulp-svg2png](https://github.com/akoenig/gulp-svg2png): Create PNG fallbacks for each SVG.
- [gulp-svg-symbols](https://github.com/Hiswe/gulp-svg-symbols): Create a file with all SVGs combined into a single `<symbol>` tag.
- [gulp.spritesmith](https://github.com/twolfson/gulp.spritesmith): Create a spritesheet from a bunch of `.png`s, with accompanying auto-generated `css`

#### Inspiration
- [Working with SVG, A Primer](http://slides.com/sarasoueidan/working-with-svg-a-primer#/), one of the many awesome SVG resources created by the awesomer [Sara Soueidan](https://sarasoueidan.com/)
- [SVG4Everybody](https://github.com/jonathantneal/svg4everybody): Workflow ideas and many indispensible SVG resources.
- [CSS Tricks](https://css-tricks.com/svg-sprites-use-better-icon-fonts/) and [Amelia Bellamy-Royds](https://css-tricks.com/a-complete-guide-to-svg-fallbacks/) - For their saved-our-souls blog posts on everything you need to know about SVG and otherwise trecherous fallbacks.

#### Other
- [Material Icons](https://design.google.com/icons): Material Design icons created by the Google designers, which are used in this project for demonstration purposes only.
