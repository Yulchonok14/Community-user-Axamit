var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var PreviousMeetupComponent = (function () {
    function PreviousMeetupComponent(archiveService, route) {
        this.archiveService = archiveService;
        this.route = route;
    }
    PreviousMeetupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.currentId = +params['id'];
            _this.getData(+params['id']);
            //this.chosenArchive = this.archiveService.getArchiveById(+params['id']);
            //this.archivePrevNext = this.archiveService.getArchivePrevNext(+params['id']);
        });
        this.subscription = this.archiveService.archiveChanged.
            subscribe(function () {
            _this.getData(_this.currentId);
        });
    };
    PreviousMeetupComponent.prototype.getData = function (id) {
        this.chosenArchive = this.archiveService.getArchiveById(id);
        this.archivePrevNext = this.archiveService.getArchivePrevNext(id);
    };
    PreviousMeetupComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    PreviousMeetupComponent = __decorate([
        core_1.Component({
            selector: 'app-previous-meetup',
            templateUrl: './previous-meetup.component.html',
            styleUrls: ['./previous-meetup.component.css']
        })
    ], PreviousMeetupComponent);
    return PreviousMeetupComponent;
})();
exports.PreviousMeetupComponent = PreviousMeetupComponent;
//# sourceMappingURL=previous-meetup.component.js.map