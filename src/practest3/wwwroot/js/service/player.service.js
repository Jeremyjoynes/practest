var Practest3;
(function (Practest3) {
    var Service;
    (function (Service) {
        var PlayerService = (function () {
            function PlayerService($resource) {
                this.playerResource = $resource('api/players');
            }
            PlayerService.prototype.getAllPlayers = function () {
                return this.playerResource.query();
            };
            return PlayerService;
        }());
        PlayerService.$inject = [
            '$resource'
        ];
        Service.PlayerService = PlayerService;
    })(Service = Practest3.Service || (Practest3.Service = {}));
})(Practest3 || (Practest3 = {}));
//# sourceMappingURL=player.service.js.map