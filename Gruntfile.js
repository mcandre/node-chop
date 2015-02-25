module.exports = function(grunt) {
  grunt.initConfig({
		exec: {
			test: "npm test",

      jshint: "jshint .",
      aspelllint: "bundle exec aspelllint",
      lili: "bundle exec lili ."
		}
  });

  grunt.loadNpmTasks("grunt-exec");

  grunt.registerTask("default", ["exec:test"]);
  grunt.registerTask("test", ["exec:test"]);

  grunt.registerTask("lint", [
    "exec:jshint",
    "exec:lili"
  ]);

  grunt.registerTask("jshint", ["exec:jshint"]);
  grunt.registerTask("aspelllint", ["exec:aspelllint"]);
  grunt.registerTask("lili", ["exec:lili"]);
};
