var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var RegistrationFormComponent = (function () {
    function RegistrationFormComponent() {
        this.checked = true;
        this.error = false;
        this.form = {
            surname: '',
            name: '',
            occupation: '',
            company: '',
            email: '',
            checked: true
        };
    }
    RegistrationFormComponent.prototype.ngOnInit = function () {
    };
    RegistrationFormComponent.prototype.onSubmit = function (f) {
        this.error = !f.valid;
        this.form.surname = f.value.surname;
        this.form.name = f.value.name;
        this.form.occupation = f.value.occupation;
        this.form.company = f.value.company;
        this.form.email = f.value.email;
    };
    RegistrationFormComponent.prototype.onToggle = function (checked) {
        this.form.checked = checked;
    };
    __decorate([
        core_1.Input()
    ], RegistrationFormComponent.prototype, "meetupName");
    RegistrationFormComponent = __decorate([
        core_1.Component({
            selector: 'app-registration-form',
            templateUrl: './registration-form.component.html',
            styleUrls: ['./registration-form.component.css']
        })
    ], RegistrationFormComponent);
    return RegistrationFormComponent;
})();
exports.RegistrationFormComponent = RegistrationFormComponent;
//# sourceMappingURL=registration-form.component.js.map