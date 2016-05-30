"use strict";
module.exports = function(grunt){
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-concurrent');
    
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
                    "src/tool/TextFix.ts"
                ],
                dest: 'bin/tool/TextFix.js'
            }
        },
        karma:{
            unit:{
                configFile:'karma.conf.js',
                autoWatch:true
            }
        },
        concurrent:{
            target:{
                tasks:['karma','typescript']
            }
        }
    })
    
    grunt.registerTask('async-karma','Run async: karma', function(){
        let done = this.async();
        setTimeout(()=>{
            grunt.task.run('karma');
            done();
        },0);
    })
    grunt.registerTask('async-typescript','Run async: typescript',function(){
        let done = this.async();
        setTimeout(()=>{
            grunt.task.run('typescript');
            done();
        },0);
    })
    
    grunt.registerTask('default',['concurrent:target']);
}