import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-preview-activitie',
  templateUrl: './preview-activitie.component.html',
  styleUrls: ['./preview-activitie.component.css']
})
export class PreviewActivitieComponent implements OnInit {

  @Input() recieveList: any;

  chronogramActivities: any = [];

  constructor() { }

  ngOnInit() {
  }

}
