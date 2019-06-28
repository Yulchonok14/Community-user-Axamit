import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Archive } from './archive.model';

import { SpeakerService } from './speaker.service';

@Injectable()
export class ArchiveService {

    constructor(private speakerService:SpeakerService) {
    }

    archiveChanged = new Subject<Archive[]>();

    private archiveRU:Archive[] = [
        new Archive(
            1,
            'Meetup #1',
            'Открытие',
            '25 сентября, 2018',
            '18:00',
            '«Angels», ул. Толбухина 2, Минск, Беларусь',
            '',
            [
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
            ],
            []
        ),
        new Archive(
            2,
            'Meetup #2',
            'БЦ Тайм',
            '25 сентября, 2018',
            '18:00',
            '«Angels», ул. Толбухина 2, Минск, Беларусь',
            '',
            [
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
            ],
            []
        ),
        new Archive(
            3,
            'Meetup #3',
            'БЦ Тайм',
            '25 сентября, 2018',
            '18:00',
            '«Angels», ул. Толбухина 2, Минск, Беларусь',
            '',
            [
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
            ],
            []
        ),
        new Archive(
            13,
            'Meetup #13',
            'Imaguru',
            '20 февраля, 2019',
            '18:00',
            'Бизнес-клуб Imaguru,  ул. Фабрициуса, 4 (ст. м. Институт Культуры), Минск, Беларусь',
            `На прошлых митапах, кроме AEM, мы иногда касались других продуктов платформы Adobe Experience Cloud. В 2019
            мы будем говорить о них больше. Поэтому приняли решение переименовать сообщество в Adobe Community.
            <br>На встрече 20 февраля мы дадим обзор двум маркетинговым инструментам: Adobe Campaign и Adobe Analytics.
            А во втором докладе расскажем на реальном кейсе, как их “подружить”`,
            [],
            []
        )
    ];

    private archiveEN:Archive[] = [
        new Archive(
            1,
            'Meetup #1',
            'Opening',
            'February 26, 2016',
            '18:00',
            'BC Time,  2 Tolbuhina str., Minsk, Belarus',
            '',
            [
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
            ],
            []
        ),
        new Archive(
            2,
            'Meetup #2',
            'Office crawl',
            'March 31, 2016',
            '18:00',
            'BC Time,  2 Tolbuhina str., Minsk, Belarus',
            '',
            [
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
            ],
            []
        ),
        new Archive(
            3,
            'Meetup #3',
            'Office crawl',
            'April 28, 2016',
            '18:00',
            'BC Time,  2 Tolbuhina str., Minsk, Belarus',
            '',
            [
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
            ],
            []
        ),
        new Archive(
            13,
            'Meetup #13',
            '“Imaguru”',
            'April 28, 2016',
            '18:00',
            'Business-hub “Imaguru”, Fabritsiusa str. 4 (Institut Cultury Metro Station)',
            `In past meetings, besides AEM, we sometimes touched other products of Adobe Experience Cloud. We are going
            to discuss it more in 2019. Therefore, it was decided to rename the community in the Adobe Community.
            <br>At the February 20 meetup, one of the speakers will make an overview of two digital-marketing tools:
            Adobe Campaign и Adobe Analytics.  Moreover, in the second talk, we will present how to implement multiple
            products in a real case study.`,
            [],
            []
        )
    ];

    private archives:Archive[] = this.archiveRU;

    getArchiveById(id:number):Archive {
        const archiveCopy = this.archives.slice();
        archiveCopy[id - 1].speakers = this.speakerService.getSpeakersByArchiveId(id);

        return archiveCopy[id - 1];
    }

    getArchivesNames() {
        const archiveCopy = this.archives.slice(0, this.archives.length-1);

        return archiveCopy.map(archive => ({id: archive.id, name: archive.name, shortLocation: archive.shortLocation}));
    }

    getArchivePrevNext(currentArchiveId:number) {
        const archiveCopy = this.archives.slice(0, this.archives.length - 1);
        let prevNextArchive = {};
        for (let i = 0; i < archiveCopy.length; i++) {
            if (archiveCopy[i].id === currentArchiveId) {
                if (i == 0 && i !== archiveCopy.length - 1) {
                    prevNextArchive = {
                        next: {id: archiveCopy[i + 1].id, name: archiveCopy[i + 1].name}
                    };

                } else if (i === archiveCopy.length - 1 && i !== 0) {
                    prevNextArchive = {
                        prev: {id: archiveCopy[i - 1].id, name: archiveCopy[i - 1].name}
                    };
                } else if (archiveCopy.length === 1) {
                    prevNextArchive = {};
                } else
                    prevNextArchive =
                    {
                        prev: {id: archiveCopy[i - 1].id, name: archiveCopy[i - 1].name},
                        next: {id: archiveCopy[i + 1].id, name: archiveCopy[i + 1].name}
                    };
                return prevNextArchive;
            }
        }
    }

    updateArchive(lang:string) {
        this.archives = lang === 'ru' ? this.archiveRU : this.archiveEN;
        this.speakerService.updateSpeakers(lang);
        this.archiveChanged.next(this.archives);
    }

    getUpcomingMeetup() {
        return this.archives.slice(this.archives.length - 1)[0];
    }
}
