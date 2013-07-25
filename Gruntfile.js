'use strict';
 
module.exports = function (grunt) {
 
  grunt.loadNpmTasks('grunt-contrib-sass');
 
  // set up config
  grunt.initConfig({
  	sass: {                              // Task
	    dist: {                            // Target
	      options: {                       // Target options
	        style: 'expanded'
	      },
	      files: {                         // Dictionary of files
	        'css/main.css': 'sass/main.sass'
	      }
	    }
	  }
 
  });
 
  // register a few tasks
  grunt.registerTask('default', ['sass']);
};