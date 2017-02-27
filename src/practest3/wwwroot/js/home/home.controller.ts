namespace Practest3 {
   
    export class HomeController {
        public players: Model.Player[];
        //private playerResource: ng.resource.IResourceClass<Model.Player>;
        static $inject = [
            'PlayerService'
        ];
        constructor(
            PlayerService: Service.PlayerService

        ) {
            this.players = PlayerService.getAllPlayers();
        }

   

    }
}