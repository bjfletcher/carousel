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
      options: {
        livereload: 35729
      },
      js: {
        files: ['*.js'],
        tasks: ['jshint', 'karma:watch:run']
      },
      sass: {
        files: ['*.scss'],
        tasks: ['sass']
      }
    },
    connect: {
      server: {
        options: {
          keepalive: true,
          livereload: 35729
        }
      }
    },
    concurrent: {
      all: {
        tasks: ['server', 'spy'],
        options: {
          logConcurrentOutput: true
        }
      }
    }
  });
  
  grunt.registerTask('default', ['concurrent:all']);
  grunt.registerTask('server', ['connect:server']);
  grunt.registerTask('spy', ['karma:watch:start', 'watch']);

};
