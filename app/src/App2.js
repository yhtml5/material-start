// Load libraries
import angular from 'angular'
import Users from 'src/users/Users'

export default angular
  .module( "UsersApp", [ 'ngMaterial', Users.name ] )
  .config(($mdIconProvider, $mdThemingProvider) => {
      console.log("UsersApp loaded: ", Users);
      const URL_AVATAR_ICONS = 'assets/svg/avatars.svg';

      $mdIconProvider
        .defaultIconSet( URL_AVATAR_ICONS, 128 )
        .icon("menu", "assets/svg/menu.svg", 24)
        .icon("share", "assets/svg/share.svg", 24)
        .icon("google_plus", "assets/svg/google_plus.svg", 24)
        .icon("hangouts", "assets/svg/hangouts.svg", 24)
        .icon("twitter", "assets/svg/twitter.svg", 24)
        .icon("phone", "assets/svg/phone.svg", 24);

      $mdThemingProvider.theme('default')
        .primaryPalette('brown')
        .accentPalette('red');
    });
