module.exports = function(grunt)
{
    grunt.initConfig(
    {
        pkg: grunt.file.readJSON('package.json'),

        simplemocha:
        {
            options:
            {
                fullTrace: true,
            },
            all:
            {
                src: './rest-api-sdk/test/api/**/*.js'
            }
        }

    });
    var samplesList = (function getFiles() {
        var files = [];
        files = grunt.file.expand("./rest-api-sample/api/*.js");
        return files;
    }());

    grunt.loadNpmTasks('grunt-run');
    grunt.loadNpmTasks('grunt-simple-mocha');
    grunt.registerTask('test', ['simplemocha']);
    grunt.registerTask('allSamples', 'Run all samples', function(arg)
    {
        var samples = samplesList;
        var config = {
            run:
            {}
        };
        for(var i=0; i < samples.length; i++) {
            var filePath = samples[i].split('/');
            var fileName = filePath[filePath.length-1];
            config.run['' + fileName.replace('.js','')] = {
                options:
                {
                    wait: true
                },
                args: [samples[i]]
            };
            grunt.config.merge(config);
        }
        var target = grunt.config('run');
        for (var task in target)
        {
            grunt.task.run('run:' + task);
        }


    });

    grunt.registerTask('Sample', 'Run sample', function()
    {
        var samples = samplesList;         
        var config = {
                run:
                {}
            };
        for(var i = 0; i < samples.length; i++) {
            var filePath = samples[i].split('/');
            var fileName = filePath[filePath.length-1];
            config.run['' + fileName.replace('.js','')] = {
                options:
                {
                    wait: true
                },
                args: [samples[i]]
            };
            grunt.config.merge(config);
        }
        if (arguments.length === 0)
        {
            grunt.log.writeln('Usage - Sample:<SampleFileName1>:<SampleFileName2>');
        }
        else
        {
            var target = grunt.config('run');
            var flag;
            for (var arg in arguments)
            {
                flag = 0;
                for (var i in target)
                {
                    if (arguments[arg] === i) {
                        grunt.task.run('run:' + arguments[arg]);
                        flag = 1;
                    }
                }
                if(flag === 0)
                {
                    grunt.log.writeln('Please give the correct sample name for '+ arguments[arg]);
                }
            }
        }

    });

    grunt.registerTask('ListTask', 'List of tasks in grunt ', function() {
        grunt.log.writeln('List of Tasks:');
        grunt.log.writeln('Sample:<SampleFileName1>:<SampleFileName2>   Run samples with name <SampleFileName1> and <SampleFileName2>');
        grunt.log.writeln('test     Run all testcases');
        grunt.log.writeln('allSamples     Run all Samples');

    });

    grunt.registerTask('default', ['ListTask']);

};
