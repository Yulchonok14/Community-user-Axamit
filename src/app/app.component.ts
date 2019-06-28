import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  ngAfterViewInit() {
    const bgPreloader = <HTMLCanvasElement>document.querySelector('.s-bg-preloader');
    let loaderImg = document.createElement('img');
    loaderImg.style.display = 'none';
    loaderImg.onload = () => {
      const ctx: CanvasRenderingContext2D = bgPreloader.getContext('2d');
      //ctx.filter = 'blur(5px)';
      ctx.drawImage(loaderImg, 0, 0);

      const originalImg = document.createElement('div');
      const background = `url('${bgPreloader.dataset['srcOriginal']}')`;
      originalImg.style.cssText = "; backgroundImage:" + background + "; width:100%; height: 100%";
      originalImg.style.backgroundImage = `url('${bgPreloader.dataset['srcOriginal']}')`;
      originalImg.style.width = '100%';
      originalImg.style.height = '100%';
      bgPreloader.parentNode.insertBefore(originalImg, bgPreloader);
    };
    loaderImg.src = bgPreloader.dataset['src'];
  }
}
