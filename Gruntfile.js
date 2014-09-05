module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);
  
  grunt.initConfig({
    jshint: {
      files: ['*.js']
    },
    sass: {
      dist: {
        'carousel.css': 'carousel.scss'
      }
    },
    karma: {
      watch: {
        configFile: 'karma.conf.js',
        autoWatch: false,
        background: true,
        singleRun: false
      }
    },
    watch: {
      karma: {
        files: ['*.js'],
        tasks: ['jshint', 'karma:watch:run']
      },
      sass: {
        files: ['*.scss'],
        tasks: ['sass']
      }
    }
  });
  
  grunt.registerTask('default', ['karma:watch:start', 'watch:karma']);

};
