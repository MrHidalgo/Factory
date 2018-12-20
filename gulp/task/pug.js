const gulp        = require('gulp'),
	gulpif          = require('gulp-if'),
	pug             = require('gulp-pug'),
	plumber         = require('gulp-plumber'),
	frontMatter     = require('gulp-front-matter'),
	emitty          = require('emitty').setup('src/pug', 'pug', {
		makeVinylFile: true
	}),
	htmlmin         = require('gulp-htmlmin');


/**
 *
 * @type {{src, dest, errorHandler}}
 */
const configPath  = require('../config/configPath'),
	configOption    = require('../config/configOption');


/**
 *
 * @type {*[]}
 */
const srcPath = configPath.src.templates + '/*.pug';

/**
 * @description Gulp PUG/JADE watch - keeps track of changes in files.
 */
gulp.task('pug:watch', function() {
	global.watch = true;

	gulp.watch(configPath.src.templates + '/**', ['pug']).on('all', (event, filepath) => {
		global.emittyChangedPugFile = filepath;
	});
});


/**
 * @description Gulp PUG/JADE - preprocessor for creating html files.
 */
const renderPug = () => {
	const sourceOptions = global.watch ? { read: false } : {};

	new Promise((resolve, reject) => {

		const sourceOptions = global.watch ? { read: false } : {};

		emitty.scan(global.emittyChangedPugFile).then(() => {
			gulp
				.src(srcPath, sourceOptions)
				.pipe(plumber(configOption.pipeBreaking.err))
				.pipe(gulpif(global.watch, emitty.filter(global.emittyChangedFile)))
				.pipe(frontMatter({
					property: 'data'
				}))
				.pipe(pug({
					pretty: true,
					data: {
						env : (argv.prod) ? 'production' : ""
					},
				}))
				.pipe(gulpif(argv.prod, htmlmin({
					collapseBooleanAttributes: true,
					collapseWhitespace: true,
					removeEmptyAttributes: true,
					removeComments: true
				})))
				.pipe(gulp.dest(configPath.dest.html))
				.on('end', resolve)
				.on('error', reject);
		});
	})
};

gulp.task('pug', function() {
	return renderPug();
});

