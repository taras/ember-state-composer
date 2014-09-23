module.exports = function(grunt){

	grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	  broccoli: {
      dist: {
        config: function() {
          var dist = require('broccoli-dist-es6-module');
          var pickFiles = require('broccoli-static-compiler');
          var mergeTrees = require('broccoli-merge-trees');

          var addon = pickFiles('addon', {
            srcDir: '/',
            files: ['**/*.js'],
            destDir: '/'
          });

          var lib = 'lib';

          var merged = mergeTrees([addon, lib]);

          var built = dist(merged, {
            main: 'main',
            global: 'esc',
            // the prefix for named-amd modules
            packageName: 'ember-state-composer',
            // global output only: naive shimming, when the id 'ember' is imported,
            // substitute with `window.Ember` instead
            shim: {
              'ember': 'Ember'
            }
          });
          return built;
        },
        dest: 'dist'
      }
    },
    bump: {
      options: {
        files: ['package.json', 'bower.json'],
        updateConfigs: [],
        commit: true,
        commitMessage: 'Release %VERSION%',
        commitFiles: ['package.json', 'bower.json', 'dist'],
        createTag: true,
        tagName: '%VERSION%',
        tagMessage: 'Version %VERSION%',
        push: true,
        pushTo: 'master',
        gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d'
      }
    },
    shell: {
      test: {
        command: './node_modules/.bin/ember test'
      }
    }
  });

  grunt.registerTask('release', [
    'shell:test',
    'broccoli:dist:build',
    'bump'
  ]);

  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-broccoli');
  grunt.loadNpmTasks('grunt-bump');
};
