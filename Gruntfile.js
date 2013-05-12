module.exports = function(grunt) {

  // Project configuration.

  var pkg = require('./package.json');


  grunt.initConfig({


  	/* uglify */

  	uglify: {

  		options: {
  			banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
  		},
  		build: {
  			src: 'assets/src/<%= pkg.name %>.js',
  			dest: 'assets/build/<%= pkg.name %>.min.js'
  		},

  		dist: {
  			options: {
  				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
  			},
  			build: {
  				src: 'assets/src/<%= pkg.name %>.js',
  				dest: 'assets/build/<%= pkg.name %>.min.js'
  			}
  		}
  	},

  	/* bake */

  	bake: {

  		compile: {
  			options: {
  				//content: "content.json"
  			},
  			files: {
  				"public/about.html": "src/about.html",
  				"public/code-of-conduct.html": "src/code-of-conduct.html",
  				"public/conference.html": "src/conference.html",
  				"public/fringe.html": "src/fringe.html",
  				"public/guide.html": "src/guide.html",
  				"public/index.html": "src/index.html",
  				"public/register.html": "src/register.html",
  				"public/team-and-contacts.html": "src/team-and-contacts.html",
  				"public/workshops.html": "src/workshops.html",
  				"public/speakers/index.html": "src/speakers/index.html",
				"public/speakers/mike-brevoort.html": "src/speakers/mike-brevoort.html",
        "public/speakers/adam-baldwin.html": "src/speakers/adam-baldwin.html",
        "public/speakers/jonathan-lipps.html": "src/speakers/jonathan-lipps.html",
				"public/speakers/sara-chipps.html": "src/speakers/sara-chipps.html",
				"public/speakers/vyacheslav-egorov.html": "src/speakers/vyacheslav-egorov.html",
				"public/speakers/dustin-diaz.html": "src/speakers/dustin-diaz.html",
        "public/speakers/brian-leroux.html": "src/speakers/brian-leroux.html",
        "public/speakers/laura-kalbag.html": "src/speakers/laura-kalbag.html",
        "public/speakers/shane-hudson.html": "src/speakers/shane-hudson.html",
        "public/speakers/jed-schmidt.html": "src/speakers/jed-schmidt.html"

  			}
  		},


  		dist: {
  			options: {
  				//content: "content.json"
  			},
  			files: {
  				"public/about.html": "src/about.html",
  				"public/code-of-conduct.html": "src/code-of-conduct.html",
  				"public/conference.html": "src/conference.html",
  				"public/fringe.html": "src/fringe.html",
  				"public/guide.html": "src/guide.html",
  				"public/index.html": "src/index.html",
  				"public/register.html": "src/register.html",
  				"public/team-and-contacts.html": "src/team-and-contacts.html",
  				"public/workshops.html": "src/workshops.html",
    			"public/speakers/index.html": "src/speakers/index.html",
				"public/speakers/mike-brevoort.html": "src/speakers/mike-brevoort.html",
				"public/speakers/adam-baldwin.html": "src/speakers/adam-baldwin.html",
        "public/speakers/jonathan-lipps.html": "src/speakers/jonathan-lipps.html",
				"public/speakers/sara-chipps.html": "src/speakers/sara-chipps.html",
				"public/speakers/vyacheslav-egorov.html": "src/speakers/vyacheslav-egorov.html",
				"public/speakers/dustin-diaz.html": "src/speakers/dustin-diaz.html",
				"public/speakers/brian-leroux.html": "src/speakers/brian-leroux.html",
        "public/speakers/laura-kalbag.html": "src/speakers/laura-kalbag.html",
        "public/speakers/shane-hudson.html": "src/speakers/shane-hudson.html",
        "public/speakers/jed-schmidt.html": "src/speakers/jed-schmidt.html"
			}
  		}
  	},

  	/* compass */

  	compass: {
  		compile: {
  			options: {
  	  			force: true,

  			require: ['zurb-foundation'],
	  		sassDir: 'src/sass',
	  		cssDir: 'public/css',
	  		environment: 'production'
	  		}
  		},
  		build: {
  			options: {
   			force: true,
  			require: ['zurb-foundation'],
	  		sassDir: 'src/sass',
	  		cssDir: 'public/css',
	  		environment: 'development'
	  		}
  		}
  	},

  	/* concat */

  	concat: {
  		dist: {
  			src: ['assets/src/**/*.js'],
  			dest: 'public/js/app.js'
  		}
  	},

  	/* uglify */

  	uglify: {
  		dist: {
  			src: ['src/js/main.js'],
  			dest: 'public/js/main.js'
  		}
  	},




  	/* watch */


  	watch: {

  		compass: {
  			files: ['src/sass/*.sass', 'src/sass/*.scss'],
  			tasks: 'compass:compile',
  			options: {
	  			force: true,
  				require: ['zurb-foundation'],
  				sassDir: 'src/sass',
  				cssDir: 'public/css',

  			}
  		},

  		bake: {
  			files: [ "src/**/*" ],
  			tasks: ["bake:compile","compass:compile"]
  		}
  	}
  });





   // Dependencies
  // ============
  for(var name in pkg.devDependencies) {
  	if(name.substring(0, 6) === 'grunt-') {
  		grunt.loadNpmTasks(name);
  	}
  }



  // Default task(s).
  grunt.registerTask('prepare', ['bower:install']);
  grunt.registerTask('default', ['compass:compile','bake:compile','watch']);
  grunt.registerTask('dist', ['compass:build','concat','uglify','bake:dist']);

};