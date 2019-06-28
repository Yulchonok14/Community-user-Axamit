var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var UpcomingMeetupComponent = (function () {
    function UpcomingMeetupComponent(archiveService) {
        this.archiveService = archiveService;
        this.meetupName = 'Meetup #13';
        this.meetupDate = '20 февраля';
        this.meetupTime = '18.00';
        this.meetupShortPlace = 'Imaguru';
        this.meetupFullPlace = 'Бизнес-клуб Imaguru,';
        this.meetupLocation = 'ул. Фабрициуса, 4 (ст. м. Институт Культуры)';
        this.meetupDescr = "\u041D\u0430 \u043F\u0440\u043E\u0448\u043B\u044B\u0445 \u043C\u0438\u0442\u0430\u043F\u0430\u0445, \u043A\u0440\u043E\u043C\u0435 AEM, \u043C\u044B \u0438\u043D\u043E\u0433\u0434\u0430 \u043A\u0430\u0441\u0430\u043B\u0438\u0441\u044C \u0434\u0440\u0443\u0433\u0438\u0445 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B Adobe Experience Cloud. \u0412 2019 \u043C\u044B \u0431\u0443\u0434\u0435\u043C \u0433\u043E\u0432\u043E\u0440\u0438\u0442\u044C \u043E \u043D\u0438\u0445 \u0431\u043E\u043B\u044C\u0448\u0435. \u041F\u043E\u044D\u0442\u043E\u043C\u0443 \u043F\u0440\u0438\u043D\u044F\u043B\u0438 \u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u043F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u0442\u044C \u0441\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432\u043E \u0432 Adobe Community.\n    <br>\u041D\u0430 \u0432\u0441\u0442\u0440\u0435\u0447\u0435 20 \u0444\u0435\u0432\u0440\u0430\u043B\u044F \u043C\u044B \u0434\u0430\u0434\u0438\u043C \u043E\u0431\u0437\u043E\u0440 \u0434\u0432\u0443\u043C \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u043E\u0432\u044B\u043C \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0430\u043C: Adobe Campaign \u0438 Adobe Analytics. \u0410 \u0432\u043E \u0432\u0442\u043E\u0440\u043E\u043C \u0434\u043E\u043A\u043B\u0430\u0434\u0435 \u0440\u0430\u0441\u0441\u043A\u0430\u0436\u0435\u043C \u043D\u0430 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u043C \u043A\u0435\u0439\u0441\u0435, \u043A\u0430\u043A \u0438\u0445 \u201C\u043F\u043E\u0434\u0440\u0443\u0436\u0438\u0442\u044C\u201D";
    }
    UpcomingMeetupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.upcomingMeetup = this.archiveService.getUpcomingMeetup();
        this.subscription = this.archiveService.archiveChanged.
            subscribe(function () {
            _this.upcomingMeetup = _this.archiveService.getUpcomingMeetup();
        });
    };
    UpcomingMeetupComponent.prototype.getShortDate = function () {
        var index = this.upcomingMeetup.date.indexOf(',');
        return this.upcomingMeetup.date.slice(0, index);
    };
    UpcomingMeetupComponent.prototype.getPlace = function () {
        this.index = this.upcomingMeetup.fullLocation.indexOf(',');
        return this.upcomingMeetup.fullLocation.slice(0, this.index + 1);
    };
    UpcomingMeetupComponent.prototype.getAddress = function () {
        return this.upcomingMeetup.fullLocation.slice(this.index + 1);
    };
    UpcomingMeetupComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    UpcomingMeetupComponent = __decorate([
        core_1.Component({
            selector: 'app-upcoming-meetup',
            templateUrl: './upcoming-meetup.component.html',
            styleUrls: ['./upcoming-meetup.component.css']
        })
    ], UpcomingMeetupComponent);
    return UpcomingMeetupComponent;
})();
exports.UpcomingMeetupComponent = UpcomingMeetupComponent;
//# sourceMappingURL=upcoming-meetup.component.js.map