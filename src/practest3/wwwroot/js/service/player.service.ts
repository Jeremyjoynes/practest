namespace Practest3.Service {
    export class PlayerService {
        private playerResource: ng.resource.IResourceClass<Model.Player>;
        static $inject = [
            '$resource'
        ];
        constructor(
            $resource: ng.resource.IResourceService
        ) {
            this.playerResource = $resource <Model.Player>('api/players');
        }

        public getAllPlayers() {
            return this.playerResource.query();
        }
    }
}