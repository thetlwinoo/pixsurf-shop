import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'menu-left',
  templateUrl: './menu-left.component.html',
  styleUrls: ['./menu-left.component.scss']
})
export class MenuLeftComponent implements OnInit {
  @Input() category: any;
  constructor() { }

  get data(): object {
    return this.category.data;
  }

  ngOnInit() {
  }

}
