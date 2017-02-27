namespace Practest3 {
    let module: ng.IModule = angular.module('app', [
        'ngResource'
    ]);

    module.controller('HomeController', HomeController);
    module.service('PlayerService', Service.PlayerService);
}