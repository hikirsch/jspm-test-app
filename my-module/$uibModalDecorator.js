import template from './modal.html!';

export default function( $delegate, $window ) {
  $delegate.alert = function( message ) {
    return $delegate.open( {
      "template": template,
      "resolve": {
        title: () => $window.document.title,
        message: () => message
      },

      "size": "sm",
      "controllerAs": "modalCtrl",
      "controller": function( title, message ) {
        this.title = title;
        this.message = message;
      }
    } );
  };

  return $delegate;
}
