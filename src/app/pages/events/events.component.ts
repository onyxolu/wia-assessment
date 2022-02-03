import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { WiaService } from 'src/app/services/wia.service';
import {Chart} from 'chart.js';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  deviceId: string;
  events: any = [];

  lineChartData: any[];
  lineChartLabels: any[];
  lineChartOptions: any;
  lineChartColors: any[];
  lineChartLegend: boolean;
  lineChartType: string;

  constructor( private route: ActivatedRoute, private wiaService: WiaService, private router: Router) {
    // this.lineChartData = [
    //   {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', },
    //   {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
    // ];
    this.lineChartLabels = [
      '1 Day',
      '2 days',

    ];
    this.lineChartOptions = {
      responsive: true
    };
    this.lineChartColors = [
      {
        backgroundColor: 'rgba(255,116,19,0.2)',
        borderColor: 'rgba(255,116,19,1)',
        pointBackgroundColor: 'rgba(255,116,19,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255,116,19,0.8)'
      },
      {
        backgroundColor: 'rgba(225,122,180,0.2)',
        borderColor: 'rgba(225,122,180,1)',
        pointBackgroundColor: 'rgba(225,122,180,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(225,122,180,1)'
      },
      {
        backgroundColor: 'rgba(145,55,63,0.2)',
        borderColor: 'rgba(145,55,63,1)',
        pointBackgroundColor: 'rgba(145,55,63,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(145,55,63,0.8)'
      }
    ];
    this.lineChartLegend = true;
    this.lineChartType = 'line';
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log(params['id']) //log the value of id
      this.deviceId = params['id2'];
      this.getEvents()
    });
  }

  exportAsXLSX():void {
    this.wiaService.exportAsExcelFile(this.events, 'DeviceEvents');
  }

  onEventClick(deviceId: string): void {
    console.log(deviceId)
    // this.router.navigate([`/spaces/${this.spaceId}/devices/${deviceId}/events`]);
  }

  getEvents() : void {
    this.wiaService.getEvents(this.deviceId).subscribe(
      (response) => {
        console.log(response)
        this.events = this.formatEvents(response.events);
        this.setUpChart(response.events)
      },
      (err) => {
      },
      () => {
        
      }
    );
  }

  formatEvents(events: any) {
    let formattedEvents: any = []
    events.forEach((element: { name: any; data: any; timestamp: any; }) => {
      formattedEvents.push({
        name: element.name,
        data: element.data ,
        date: this.convertTimeStampToDate(element.timestamp)
      })
    });
    return formattedEvents

  }

  convertTimeStampToDate(timestamp: any) {
    var date = new Date(timestamp);
    return date
  }


  setUpChart(events: any){
    const dict: any = {}
    events.forEach((element: { data: any; name: any; }) => {
      if(dict[element.name]){
        let val = dict[element.name]
        if (element.data) {
          val.push(element.data)
        }
        dict[element.name] = val
      }
      else {
        dict[element.name] = [element.data]
      }
    });
    const lineChartData = []
    for (const key in dict){
      console.log(key)
      lineChartData.push({
        data: dict[key], label: key
      })
    }
    this.lineChartData = lineChartData
    // this.lineChartData = lineChartData
  }

}
