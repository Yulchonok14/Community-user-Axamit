var Subject_1 = require('rxjs/Subject');
var speaker_model_1 = require('./speaker.model');
var employee_model_1 = require('./employee.model');
var SpeakerService = (function () {
    function SpeakerService() {
        this.speakersChanged = new Subject_1.Subject();
        this.speakersRU = [
            new speaker_model_1.Speaker(1, new employee_model_1.Employee(1, 'Никита Митрошин', '/images/avatars/mikita.jpg', 'Certified AEM Developer в Axamit'), 'Правила работы AEM и Sonarqube', "\u0412 \u043F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0438\u0438 \u0431\u0443\u0434\u0443\u0442 \u0440\u0430\u0441\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u044B \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0438 \u0441\u043F\u043E\u0441\u043E\u0431\u044B \u0440\u0430\u0431\u043E\u0442\u044B \u0441 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u043E\u0439 SonarQube \u0434\u043B\u044F \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u043A\u043E\u0434\u0430 \u043D\u0430 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E\n      \u043F\u043E \u043F\u0440\u0430\u0432\u0438\u043B\u0430\u043C, \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u043D\u044B\u043C \u043D\u0430 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0445 \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u044F\u0445, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u043B\u0430\u0433\u0438\u043D \u0434\u043B\u044F \u0410\u0415\u041C, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0439\n      \u043D\u0430\u0431\u043E\u0440 \u0441\u043E\u0432\u0435\u0442\u043E\u0432 \u0438 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u0439 \u0434\u043B\u044F \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043F\u043E\u0434 \u0410\u0415\u041C.", '/pdf/meetup-1/AEM_Rules_for_SonarQube.pdf', ''),
            new speaker_model_1.Speaker(1, new employee_model_1.Employee(2, 'Даниил Шейдак', '/images/avatars/daniil.jpg', 'Certified AEM Developer в Epam'), 'Отзывчивый макет AEM', "\u0412 \u0434\u043E\u043A\u043B\u0430\u0434\u0435 \u043C\u044B \u043E\u0431\u0441\u0443\u0434\u0438\u043C, \u043A\u0430\u043A AEM \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0440\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u0442\u044C \u0433\u0438\u0431\u043A\u0438\u0439 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u0432\u0430\u0448\u0435\u0433\u043E \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F. \u0420\u0430\u0437\u0431\u0435\u0440\u0435\u043C, \u043A\u0430\u043A Responsive\n      Layout \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0441\u0438\u0441\u0442\u0435\u043C\u0443 \u0430\u0431\u0437\u0430\u0446\u0435\u0432, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0440\u0430\u0437\u043C\u0435\u0449\u0430\u0442\u044C \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u044B \u0432 \u0447\u0443\u0432\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u0441\u0435\u0442\u043A\u0435, \u043A\u043E\u0442\u043E\u0440\u0430\u044F, \u0432\n      \u0441\u0432\u043E\u044E \u043E\u0447\u0435\u0440\u0435\u0434\u044C, \u043C\u043E\u0436\u0435\u0442 \u0438\u0437\u043C\u0435\u043D\u044F\u0442\u044C \u043F\u043E\u0440\u044F\u0434\u043E\u043A \u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432 \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0440\u0430\u0437\u043C\u0435\u0440\u043E\u043C \u0438 \u0444\u043E\u0440\u043C\u0430\u0442\u043E\u043C \u043E\u043A\u043D\u0430/\u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430.", '/pdf/meetup-1/Responsive_Layout.pdf', 'https://www.youtube.com/watch?v=klRXo8lXiQY&index=3&list=PLQsw8jidJZIFs9jExFQhx0gVGWyWQG_Ej')
        ];
        this.speakersEN = [
            new speaker_model_1.Speaker(1, new employee_model_1.Employee(1, 'Nikita Mytroshin', '/images/avatars/mikita.jpg', 'Certified AEM Developer в Axamit'), 'AEM Rules for SonarQube', "In this presentation we will take a look at open source platform SonarQube for continuous inspection of code\n        quality, different ways to work with it, and also special plugin for AEM, that contains set of rules with some\n        best practices and specific advices for AEM development. Also we will review how to create your own custom rules.", '/pdf/meetup-1/AEM_Rules_for_SonarQube.pdf', ''),
            new speaker_model_1.Speaker(1, new employee_model_1.Employee(2, 'Daniil Sheidak', '/images/avatars/daniil.jpg', 'Certified AEM Developer в Epam'), 'AEM Responsive Layout', "In the report we will discuss how AEM allows you to realize a Responsive Layout for your pagesby using the Layout\n        Container component. We will consider how it provides a paragraph systemthat allows you components positioning\n        within a responsive grid that in its turn can rearrange the layout according to the device/window size and format.", '/pdf/meetup-1/Responsive_Layout.pdf', 'https://www.youtube.com/watch?v=klRXo8lXiQY&index=3&list=PLQsw8jidJZIFs9jExFQhx0gVGWyWQG_Ej')
        ];
        this.speakers = this.speakersRU;
    }
    SpeakerService.prototype.getSpeakersByArchiveId = function (archiveId) {
        var filteredSpeakers = [];
        var speakersCopy = this.speakers.slice();
        for (var i = 0; i < speakersCopy.length; i++) {
            if (speakersCopy[i].archiveId === archiveId) {
                filteredSpeakers.push(speakersCopy[i]);
            }
        }
        return filteredSpeakers;
    };
    SpeakerService.prototype.updateSpeakers = function (lang) {
        this.speakers = lang === 'ru' ? this.speakersRU : this.speakersEN;
    };
    return SpeakerService;
})();
exports.SpeakerService = SpeakerService;
//# sourceMappingURL=speaker.service.js.map