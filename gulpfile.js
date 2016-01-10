var gulp = require( 'gulp' );
var Builder = require( 'jspm' ).Builder;

gulp.task( 'default', [ 'jspm'] );

gulp.task( 'jspm', function( done ) {
  var builder = new Builder( '.' );

  builder.loadConfig( "./jspm.config.js" )
    .then( function() {
      var value = 'my-module - angular';

      builder.buildStatic( value, './dist/angular-my-module.js', {
          format: 'global',
          encodeNames: false,
          config: {
            map: {
              'angular-bootstrap': '@empty'
            }
          },
          globalDeps: {
            'angular': 'angular'
          }
        } )

        .then( () => done() )

        .catch( ( ex ) => done( new Error( ex ) ) );
    } );
} );
