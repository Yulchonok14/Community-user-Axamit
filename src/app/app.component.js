var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        var bgPreloader = document.querySelector('.s-bg-preloader');
        var loaderImg = document.createElement('img');
        loaderImg.style.display = 'none';
        loaderImg.onload = function () {
            var ctx = bgPreloader.getContext('2d');
            //ctx.filter = 'blur(5px)';
            ctx.drawImage(loaderImg, 0, 0);
            var originalImg = document.createElement('div');
            var background = "url('" + bgPreloader.dataset['srcOriginal'] + "')";
            originalImg.style.cssText = "; backgroundImage:" + background + "; width:100%; height: 100%";
            originalImg.style.backgroundImage = "url('" + bgPreloader.dataset['srcOriginal'] + "')";
            originalImg.style.width = '100%';
            originalImg.style.height = '100%';
            bgPreloader.parentNode.insertBefore(originalImg, bgPreloader);
        };
        loaderImg.src = bgPreloader.dataset['src'];
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
        })
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map