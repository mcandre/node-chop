'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        exec: {
            aspelllint: 'bundle exec aspelllint',
            eslint: 'node node_modules/eslint/bin/eslint .',
            jsdoc: 'jsdoc -d html -r lib',
            jshint: 'node node_modules/jshint/bin/jshint .',
            test: 'npm test'
        }
    });

    grunt.loadNpmTasks('grunt-exec');
    grunt.registerTask('default', ['exec:test']);

    grunt.registerTask('doc', ['exec:jsdoc']);
    grunt.registerTask('test', ['exec:test']);

    grunt.registerTask('lint', [
        'exec:jshint',
        'exec:eslint'
    ]);

    grunt.registerTask('aspelllint', ['exec:aspelllint']);
    grunt.registerTask('eslint', ['exec:eslint']);
    grunt.registerTask('jsdoc', ['exec:jsdoc']);
    grunt.registerTask('jshint', ['exec:jshint']);
};
