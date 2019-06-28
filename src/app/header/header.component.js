var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var HeaderComponent = (function () {
    function HeaderComponent(archiveService, translate) {
        this.archiveService = archiveService;
        this.translate = translate;
        this.activeRus = true;
        this.archiveNames = [];
        translate.setDefaultLang('ru');
    }
    HeaderComponent.prototype.switchLanguage = function (language) {
        this.activeRus = language === 'ru';
        this.translate.use(language);
        this.archiveService.updateArchive(language);
        this.archiveNames = this.archiveService.getArchivesNames().reverse();
    };
    HeaderComponent.prototype.ngOnInit = function () {
        this.archiveNames = this.archiveService.getArchivesNames().reverse();
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.scss']
        })
    ], HeaderComponent);
    return HeaderComponent;
})();
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map