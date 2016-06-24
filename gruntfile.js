'use strict'
module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        imagemin: {
            index: {
                options: {
                    optimizationLevel: 5,
                    progressive: true
                },
                files: [{
                    expand: true,
                    cwd: 'src/img',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'dist/img'
                }]
            },
            pizza: {
                options: {
                    optimizationLevel: 5,
                    progressive: true
                },
                files: [{
                    expand: true,
                    cwd: 'src/views/images',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'dist/views/images'
                }]
            }
        },

        critical: {
            index: {
                options: {
                    minify: true,
                    base: './',
                    css: [
                        'src/css/print.css',
                        'src/css/style.css',
                    ],
                    width: 1200,
                    height: 800
                },
                files: [
                    {src: ['src/index.html'], dest: 'dist/index.html'},
                    {src: ['src/project-2048.html'], dest: 'dist/project-2048.html'},
                    {src: ['src/project-mobile.html'], dest: 'dist/project-mobile.html'},
                    {src: ['src/project-webperf.html'], dest: 'dist/project-webperf.html'}
                ]
            },
            pizza: {
                options:{
                    minify: true,
                    base: './',
                    css: [
                        'src/views/css/bootstrap-grid.css',
                        'src/views/css/style.css',
                    ],
                    width: 1200,
                    height: 800
                },
                src: 'src/views/pizza.html',
                dest: 'dist/views/pizza.html'
            }
        },

        uglify: {
            my_target: {
                files: [
                    {src: ['src/js/perfmatters.js'], dest: 'dist/js/perfmatters.min.js'},
                    {src: ['src/views/js/main.js'], dest: 'dist/views/js/main.min.js'}
                ]
            }
        },

        cssmin : {
            my_target: {
                files: [
                    {src: ['src/css/print.css'], dest: 'dist/css/print.min.css'},
                    {src: ['src/css/style.css'], dest: 'dist/css/style.min.css'},
                    {src: ['src/views/css/style.css'], dest: 'dist/views/css/style.min.css'},
                    {src: ['src/views/css/bootstrap-grid'], dest: 'dist/views/css/bootstrap-grid.min.css'}
                ]
            }
        },
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-critical');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['uglify', 'critical', 'cssmin', 'imagemin']);

};


