module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),


        sass:  {
            dist: {
                files: {
                    'dist/css/style.css' : 'source/css/style_min.scss' 
                }
            }
        },

        cssmin: {
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'dist/css/',
                    src: ['*.css', '!*_min.css'],
                    dest: 'dist/css/',
                    ext: '_min.css'
                }]
  
            }
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'source/./images/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'dist/images/'
                }]
            }
        },

        connect: {
            server: {
              options: {
                hostname: 'localhost',
                port: 3000,
                base: 'dist/',
                livereload: true
              }
            }
          },
 
          watch: {
            files: [
              'dist/*.html',
              'dist/css/*.css',
              
            ],
            options: {
              livereload: true
             }
 
          },





    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.registerTask('default', ['sass','cssmin', 'imagemin','connect','watch']);

};