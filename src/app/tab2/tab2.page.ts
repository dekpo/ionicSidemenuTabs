import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  public folder: string;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    const param = this.activatedRoute.snapshot.paramMap.get('id');
    this.folder = param ? param : 'Tab 2';
  }

}
