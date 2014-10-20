module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		assemble: {
			options: {
				layout: 'page.hbs',
				layoutdir: './source/assemble/templates/layouts/',
				partials: './source/assemble/templates/partials/**/*.hbs'
			},
			dev: {
				files: [
					{
						cwd: 'source/assemble/content/_pages/',
						dest: 'build/',
						expand: true,
						flatten: true,
						src: ['**/*.hbs']
					}
				]
			}
		},

		sass: {
			dist: {
				files: {
					'build/css/main.css': 'source/sass/*.scss'
				}
			}
		},

		uglify: {
    		my_target: {
      			files: {
					'build/js/main.min.js': ['source/js/jquery.js', 'source/js/main.js']
				}
			}
  		},

		watch: {
			scripts: {
				files: [
					'source/sass/**/*.scss'
				],
				tasks: ['sass']
			}
		},

		connect: {
			dev: {
				options: {
					port: 8000,
					base: './dist/'
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('assemble');

	grunt.registerTask('default', ['build']);

	grunt.registerTask('build', [
		'assemble',
		'sass',
		'uglify',
		'connect',
		'watch'
	]);

};