//Gruntfile.js
module.exports = function (grunt) {
  grunt.initConfig({

    // Watch task config
    watch: {
      //cssmin: {
      //files: ["css/**/*.css", "!css/**/*.min.css"],
      //tasks: ['cssmin']
      //},
      //uglify: {
      //files: ["js/**/*.js", "!js/**/*.min.js"],
      //tasks: ['uglify']
      //},
      //imagemin: {
      //files: ['img/**/*.{png,jpg,gif,svg}'],
      //tasks: ['newer:imagemin'],
      //options: {
      //spawn: false,
      //}
      //}
    },

    // BrowserSync task config
    browserSync: {
      default_options: {
        bsFiles: {
          src: [
            "css/*.css",
            "js/*.js",
            "*.html"
          ]
        },
        options: {
          watchTask: true,
          server: {
            baseDir: "./"
          }
        }
      }
    },

    // UnCSS task config  
    uncss: {
      dist: {
        options: {
          //Estilos que queremos limpiar
          stylesheets: ['css/materialize.min.css'],
          //Estilos que no queremos limpiar
          ignoreSheets: [/style.css/],
        },
        files: {
          //Archivo css de salida    //Scanea las clases, ids, etc de este html
          'css/materialize.min.css': ['index.html']
        }
      }
    },

    // Cssmin task config
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1,
        keepSpecialComments: 0
      },
      target: {
        files: {
          'css/style.min.css': [
            'css/materialize.min.css',
            'css/responsiveslides.css',
            'css/style.css'
          ]
        }
      }
    },

    //Uglify task config  
    uglify: {
      options: {
        preserveComments: false
      },
      my_target: {
        files: {
          'js/script.min.js': [
            'js/lib/jquery-2.2.3.min.js',
            'js/lib/materialize.min.js',
            'js/lib/jquery.fullpage.min.js', 
            'js/lib/responsiveslides.min.js', 
            'js/lib/angular.min.js', 
            'js/lib/angular-route.min.js',              
            'js/ngApp.js', 
            'js/ngConstants.js', 
            'js/ngRoutes.js', 
            'js/app/directives/directives.js', 
            'js/app/controllers/landingPageCtrl.js'
          ]
        }
      }
    },

    //Imagemin task config  
    imagemin: {
      main: {
        files: [{
          expand: true,
          cwd: 'img/', //todas las imágenes de esta ruta
          src: ['**/*.{png,jpg,gif,.svg}'], //patrón de tipos de imagen
          dest: 'img/' //carpeta destino una vez optimizadas
        }]
      }
    }
  });

  //Cargamos los grunt plugins
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-newer');

  //Tarea por defecto
  grunt.registerTask('default', ['browserSync', 'watch']);
};