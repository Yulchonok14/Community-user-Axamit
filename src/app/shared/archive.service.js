var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var Subject_1 = require('rxjs/Subject');
var archive_model_1 = require('./archive.model');
var ArchiveService = (function () {
    function ArchiveService(speakerService) {
        this.speakerService = speakerService;
        this.archiveChanged = new Subject_1.Subject();
        this.archiveRU = [
            new archive_model_1.Archive(1, 'Meetup #1', 'Открытие', '25 сентября, 2018', '18:00', '«Angels», ул. Толбухина 2, Минск, Беларусь', '', [
                {
                    url: 'images/photo/meetup-11/aem_community_meetup11_02.jpg',
                    title: 'AEM community meetup #11 picture 1'
                },
                {
                    url: 'images/photo/meetup-11/aem_community_meetup11_02.jpg',
                    title: 'AEM community meetup #11 picture 1'
                },
                {
                    url: 'images/photo/meetup-11/aem_community_meetup11_02.jpg',
                    title: 'AEM community meetup #11 picture 1'
                },
                {
                    url: 'images/photo/meetup-11/aem_community_meetup11_02.jpg',
                    title: 'AEM community meetup #11 picture 1'
                }
            ], []),
            new archive_model_1.Archive(2, 'Meetup #2', 'БЦ Тайм', '25 сентября, 2018', '18:00', '«Angels», ул. Толбухина 2, Минск, Беларусь', '', [
                {
                    url: 'images/photo/meetup-11/aem_community_meetup11_02.jpg',
                    title: 'AEM community meetup #11 picture 1'
                },
                {
                    url: 'images/photo/meetup-11/aem_community_meetup11_02.jpg',
                    title: 'AEM community meetup #11 picture 1'
                },
                {
                    url: 'images/photo/meetup-11/aem_community_meetup11_02.jpg',
                    title: 'AEM community meetup #11 picture 1'
                },
                {
                    url: 'images/photo/meetup-11/aem_community_meetup11_02.jpg',
                    title: 'AEM community meetup #11 picture 1'
                }
            ], []),
            new archive_model_1.Archive(3, 'Meetup #3', 'БЦ Тайм', '25 сентября, 2018', '18:00', '«Angels», ул. Толбухина 2, Минск, Беларусь', '', [
                {
                    url: 'images/photo/meetup-11/aem_community_meetup11_02.jpg',
                    title: 'AEM community meetup #11 picture 1'
                },
                {
                    url: 'images/photo/meetup-11/aem_community_meetup11_02.jpg',
                    title: 'AEM community meetup #11 picture 1'
                },
                {
                    url: 'images/photo/meetup-11/aem_community_meetup11_02.jpg',
                    title: 'AEM community meetup #11 picture 1'
                },
                {
                    url: 'images/photo/meetup-11/aem_community_meetup11_02.jpg',
                    title: 'AEM community meetup #11 picture 1'
                }
            ], []),
            new archive_model_1.Archive(13, 'Meetup #13', 'Imaguru', '20 февраля, 2019', '18:00', 'Бизнес-клуб Imaguru,  ул. Фабрициуса, 4 (ст. м. Институт Культуры), Минск, Беларусь', "\u041D\u0430 \u043F\u0440\u043E\u0448\u043B\u044B\u0445 \u043C\u0438\u0442\u0430\u043F\u0430\u0445, \u043A\u0440\u043E\u043C\u0435 AEM, \u043C\u044B \u0438\u043D\u043E\u0433\u0434\u0430 \u043A\u0430\u0441\u0430\u043B\u0438\u0441\u044C \u0434\u0440\u0443\u0433\u0438\u0445 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B Adobe Experience Cloud. \u0412 2019\n            \u043C\u044B \u0431\u0443\u0434\u0435\u043C \u0433\u043E\u0432\u043E\u0440\u0438\u0442\u044C \u043E \u043D\u0438\u0445 \u0431\u043E\u043B\u044C\u0448\u0435. \u041F\u043E\u044D\u0442\u043E\u043C\u0443 \u043F\u0440\u0438\u043D\u044F\u043B\u0438 \u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u043F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u0442\u044C \u0441\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432\u043E \u0432 Adobe Community.\n            <br>\u041D\u0430 \u0432\u0441\u0442\u0440\u0435\u0447\u0435 20 \u0444\u0435\u0432\u0440\u0430\u043B\u044F \u043C\u044B \u0434\u0430\u0434\u0438\u043C \u043E\u0431\u0437\u043E\u0440 \u0434\u0432\u0443\u043C \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u043E\u0432\u044B\u043C \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0430\u043C: Adobe Campaign \u0438 Adobe Analytics.\n            \u0410 \u0432\u043E \u0432\u0442\u043E\u0440\u043E\u043C \u0434\u043E\u043A\u043B\u0430\u0434\u0435 \u0440\u0430\u0441\u0441\u043A\u0430\u0436\u0435\u043C \u043D\u0430 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u043C \u043A\u0435\u0439\u0441\u0435, \u043A\u0430\u043A \u0438\u0445 \u201C\u043F\u043E\u0434\u0440\u0443\u0436\u0438\u0442\u044C\u201D", [], [])
        ];
        this.archiveEN = [
            new archive_model_1.Archive(1, 'Meetup #1', 'Opening', 'February 26, 2016', '18:00', 'BC Time,  2 Tolbuhina str., Minsk, Belarus', '', [
                {
                    url: 'images/photo/meetup-11/aem_community_meetup11_02.jpg',
                    title: 'AEM community meetup #11 picture 1'
                },
                {
                    url: 'images/photo/meetup-11/aem_community_meetup11_02.jpg',
                    title: 'AEM community meetup #11 picture 1'
                },
                {
                    url: 'images/photo/meetup-11/aem_community_meetup11_02.jpg',
                    title: 'AEM community meetup #11 picture 1'
                },
                {
                    url: 'images/photo/meetup-11/aem_community_meetup11_02.jpg',
                    title: 'AEM community meetup #11 picture 1'
                }
            ], []),
            new archive_model_1.Archive(2, 'Meetup #2', 'Office crawl', 'March 31, 2016', '18:00', 'BC Time,  2 Tolbuhina str., Minsk, Belarus', '', [
                {
                    url: 'images/photo/meetup-11/aem_community_meetup11_02.jpg',
                    title: 'AEM community meetup #11 picture 1'
                },
                {
                    url: 'images/photo/meetup-11/aem_community_meetup11_02.jpg',
                    title: 'AEM community meetup #11 picture 1'
                },
                {
                    url: 'images/photo/meetup-11/aem_community_meetup11_02.jpg',
                    title: 'AEM community meetup #11 picture 1'
                },
                {
                    url: 'images/photo/meetup-11/aem_community_meetup11_02.jpg',
                    title: 'AEM community meetup #11 picture 1'
                }
            ], []),
            new archive_model_1.Archive(3, 'Meetup #3', 'Office crawl', 'April 28, 2016', '18:00', 'BC Time,  2 Tolbuhina str., Minsk, Belarus', '', [
                {
                    url: 'images/photo/meetup-11/aem_community_meetup11_02.jpg',
                    title: 'AEM community meetup #11 picture 1'
                },
                {
                    url: 'images/photo/meetup-11/aem_community_meetup11_02.jpg',
                    title: 'AEM community meetup #11 picture 1'
                },
                {
                    url: 'images/photo/meetup-11/aem_community_meetup11_02.jpg',
                    title: 'AEM community meetup #11 picture 1'
                },
                {
                    url: 'images/photo/meetup-11/aem_community_meetup11_02.jpg',
                    title: 'AEM community meetup #11 picture 1'
                }
            ], []),
            new archive_model_1.Archive(13, 'Meetup #13', '“Imaguru”', 'April 28, 2016', '18:00', 'Business-hub “Imaguru”, Fabritsiusa str. 4 (Institut Cultury Metro Station)', "In past meetings, besides AEM, we sometimes touched other products of Adobe Experience Cloud. We are going\n            to discuss it more in 2019. Therefore, it was decided to rename the community in the Adobe Community.\n            <br>At the February 20 meetup, one of the speakers will make an overview of two digital-marketing tools:\n            Adobe Campaign \u0438 Adobe Analytics.  Moreover, in the second talk, we will present how to implement multiple\n            products in a real case study.", [], [])
        ];
        this.archives = this.archiveRU;
    }
    ArchiveService.prototype.getArchiveById = function (id) {
        var archiveCopy = this.archives.slice();
        archiveCopy[id - 1].speakers = this.speakerService.getSpeakersByArchiveId(id);
        return archiveCopy[id - 1];
    };
    ArchiveService.prototype.getArchivesNames = function () {
        var archiveCopy = this.archives.slice(0, this.archives.length - 1);
        return archiveCopy.map(function (archive) { return ({ id: archive.id, name: archive.name, shortLocation: archive.shortLocation }); });
    };
    ArchiveService.prototype.getArchivePrevNext = function (currentArchiveId) {
        var archiveCopy = this.archives.slice(0, this.archives.length - 1);
        var prevNextArchive = {};
        for (var i = 0; i < archiveCopy.length; i++) {
            if (archiveCopy[i].id === currentArchiveId) {
                if (i == 0 && i !== archiveCopy.length - 1) {
                    prevNextArchive = {
                        next: { id: archiveCopy[i + 1].id, name: archiveCopy[i + 1].name }
                    };
                }
                else if (i === archiveCopy.length - 1 && i !== 0) {
                    prevNextArchive = {
                        prev: { id: archiveCopy[i - 1].id, name: archiveCopy[i - 1].name }
                    };
                }
                else if (archiveCopy.length === 1) {
                    prevNextArchive = {};
                }
                else
                    prevNextArchive =
                        {
                            prev: { id: archiveCopy[i - 1].id, name: archiveCopy[i - 1].name },
                            next: { id: archiveCopy[i + 1].id, name: archiveCopy[i + 1].name }
                        };
                return prevNextArchive;
            }
        }
    };
    ArchiveService.prototype.updateArchive = function (lang) {
        this.archives = lang === 'ru' ? this.archiveRU : this.archiveEN;
        this.speakerService.updateSpeakers(lang);
        this.archiveChanged.next(this.archives);
    };
    ArchiveService.prototype.getUpcomingMeetup = function () {
        return this.archives.slice(this.archives.length - 1)[0];
    };
    ArchiveService = __decorate([
        core_1.Injectable()
    ], ArchiveService);
    return ArchiveService;
})();
exports.ArchiveService = ArchiveService;
//# sourceMappingURL=archive.service.js.map