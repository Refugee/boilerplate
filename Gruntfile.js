module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

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

	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['build']);

	grunt.registerTask('build', [
		'sass',
		'uglify',
		'watch'
	]);

};