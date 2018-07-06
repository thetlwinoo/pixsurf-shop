import { Component, OnInit, Input } from '@angular/core';
import { carousel } from './carousel';
import * as $ from 'jquery';

@Component({
  selector: 'content-top',
  templateUrl: './content-top.component.html',
  styleUrls: ['./content-top.component.scss']
})
export class ContentTopComponent implements OnInit {
  @Input() categories;

  carousel: any;
  carouselOptions: any;

  constructor() {
    this.carouselOptions = { "onTranslated": this.animated };
    Object.assign(carousel.options.main, this.carouselOptions);
    this.carousel = carousel;
  }

  ngOnInit() {
  }

  animated(): void {
    $('.banner-slider .owl-item').each(function () {
      var check = $(this).hasClass('active');
      if (check == true) {
        $(this).find('.animated').each(function () {
          var anime = $(this).attr('data-animated');
          $(this).addClass(anime);
        });
      } else {
        $(this).find('.animated').each(function () {
          var anime = $(this).attr('data-animated');
          $(this).removeClass(anime);
        });
      }
    });
  }
}
