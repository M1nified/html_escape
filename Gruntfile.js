"use strict";
module.exports = function(grunt){
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-karma');
    
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        typescript:{
            base:{
                options: {
                    module: "none",
                    noImplicitAny: true,
                    removeComments: true,
                    preserveConstEnums: true,
                    sourceMap: true,
                    watch:true
                },
                src: [
                    "src/jsHtmlTextEscape/HtmlTextEscape.ts"
                ],
                dest: 'bin/jsHtmlTextEscape/HtmlTextEscape.js'
            }
        },
        karma:{
            unit:{
                configFile:'karma.conf.js',
                autoWatch:true
            }
        }
    })
    
    // grunt.registerTask('default',['concurrent:target']);
    grunt.registerTask('tsc',['typescript']);
}