var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var upcoming_meetup_component_1 = require('./upcoming-meetup/upcoming-meetup.component');
var previous_meetup_component_1 = require('./previous-meetup/previous-meetup.component');
var appRoutes = [
    { path: '', component: upcoming_meetup_component_1.UpcomingMeetupComponent },
    { path: 'archive/:id', component: previous_meetup_component_1.PreviousMeetupComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(appRoutes)
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
})();
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map