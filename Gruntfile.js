module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
    	my_target: {
      	files: {
					'build/js/main.min.js': ['source/js/jquery.js', 'source/js/main.js']
				}
			}
  	}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default', ['uglify']);

};