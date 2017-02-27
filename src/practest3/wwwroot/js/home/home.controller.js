var Practest3;
(function (Practest3) {
    var HomeController = (function () {
        function HomeController(PlayerService) {
            this.players = PlayerService.getAllPlayers();
        }
        return HomeController;
    }());
    //private playerResource: ng.resource.IResourceClass<Model.Player>;
    HomeController.$inject = [
        'PlayerService'
    ];
    Practest3.HomeController = HomeController;
})(Practest3 || (Practest3 = {}));
//# sourceMappingURL=home.controller.js.map