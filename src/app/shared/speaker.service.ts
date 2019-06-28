import { Subject } from 'rxjs/Subject';

import { Speaker } from './speaker.model';
import { Employee } from './employee.model';

export class SpeakerService {
  speakersChanged = new Subject<Speaker[]>();

  private speakersRU: Speaker[] = [
    new Speaker(
      1,
      new Employee(
        1,
        'Никита Митрошин',
        '/images/avatars/mikita.jpg',
        'Certified AEM Developer в Axamit'
      ),
      'Правила работы AEM и Sonarqube',
      `В презентации будут рассмотрены особенности и способы работы с платформой SonarQube для проверки кода на качество
      по правилам, основанным на различных соглашениях, а также специальный плагин для АЕМ, которые содержит определенный
      набор советов и рекомендаций для разработки под АЕМ.`,
      '/pdf/meetup-1/AEM_Rules_for_SonarQube.pdf',
      ''
    ),
    new Speaker(
      1,
      new Employee(
        2,
        'Даниил Шейдак',
        '/images/avatars/daniil.jpg',
        'Certified AEM Developer в Epam'
      ),
      'Отзывчивый макет AEM',
      `В докладе мы обсудим, как AEM позволяет реализовать гибкий интерфейс вашего приложения. Разберем, как Responsive
      Layout предоставляет систему абзацев, которая позволяет размещать компоненты в чувствительной сетке, которая, в
      свою очередь, может изменять порядок расположения компонентов в соответствии с размером и форматом окна/устройства.`,
      '/pdf/meetup-1/Responsive_Layout.pdf',
      'https://www.youtube.com/watch?v=klRXo8lXiQY&index=3&list=PLQsw8jidJZIFs9jExFQhx0gVGWyWQG_Ej'
    )
  ];

  private speakersEN: Speaker[] = [
    new Speaker(
        1,
        new Employee(
            1,
            'Nikita Mytroshin',
            '/images/avatars/mikita.jpg',
            'Certified AEM Developer в Axamit'
        ),
        'AEM Rules for SonarQube',
        `In this presentation we will take a look at open source platform SonarQube for continuous inspection of code
        quality, different ways to work with it, and also special plugin for AEM, that contains set of rules with some
        best practices and specific advices for AEM development. Also we will review how to create your own custom rules.`,
        '/pdf/meetup-1/AEM_Rules_for_SonarQube.pdf',
        ''
    ),
    new Speaker(
        1,
        new Employee(
            2,
            'Daniil Sheidak',
            '/images/avatars/daniil.jpg',
            'Certified AEM Developer в Epam'
        ),
        'AEM Responsive Layout',
        `In the report we will discuss how AEM allows you to realize a Responsive Layout for your pagesby using the Layout
        Container component. We will consider how it provides a paragraph systemthat allows you components positioning
        within a responsive grid that in its turn can rearrange the layout according to the device/window size and format.`,
        '/pdf/meetup-1/Responsive_Layout.pdf',
        'https://www.youtube.com/watch?v=klRXo8lXiQY&index=3&list=PLQsw8jidJZIFs9jExFQhx0gVGWyWQG_Ej'
    )
  ];

  private speakers: Speaker[] = this.speakersRU;

  getSpeakersByArchiveId(archiveId: number): Speaker[]{
    const filteredSpeakers: Speaker[] = [];
    const speakersCopy = this.speakers.slice();
    for(let i = 0; i < speakersCopy.length; i++) {
      if(speakersCopy[i].archiveId === archiveId) {
        filteredSpeakers.push(speakersCopy[i]);
      }
    }
    return filteredSpeakers;
  }

  updateSpeakers(lang: string) {
    this.speakers = lang === 'ru' ? this.speakersRU : this.speakersEN;
  }
}
