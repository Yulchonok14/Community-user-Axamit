var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var animations_1 = require('@angular/platform-browser/animations');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/common/http');
var core_2 = require('@ngx-translate/core');
var http_loader_1 = require('@ngx-translate/http-loader');
var app_component_1 = require('./app.component');
var header_component_1 = require('./header/header.component');
var footer_component_1 = require('./footer/footer.component');
var upcoming_meetup_component_1 = require('./upcoming-meetup/upcoming-meetup.component');
var previous_meetup_component_1 = require('./previous-meetup/previous-meetup.component');
var speaker_item_component_1 = require('./previous-meetup/speaker-item/speaker-item.component');
var registration_form_component_1 = require('./upcoming-meetup/registration-form/registration-form.component');
var app_routing_module_1 = require('./app-routing.module');
var archive_service_1 = require('./shared/archive.service');
var speaker_service_1 = require('./shared/speaker.service');
function HttpLoaderFactory(http) {
    return new http_loader_1.TranslateHttpLoader(http);
}
exports.HttpLoaderFactory = HttpLoaderFactory;
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                upcoming_meetup_component_1.UpcomingMeetupComponent,
                previous_meetup_component_1.PreviousMeetupComponent,
                speaker_item_component_1.SpeakerItemComponent,
                registration_form_component_1.RegistrationFormComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                core_2.TranslateModule.forRoot({
                    loader: {
                        provide: core_2.TranslateLoader,
                        useFactory: HttpLoaderFactory,
                        deps: [http_1.HttpClient]
                    }
                })
            ],
            providers: [archive_service_1.ArchiveService, speaker_service_1.SpeakerService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
})();
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map