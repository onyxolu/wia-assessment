import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WiaService } from 'src/app/services/wia.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {
  spaceId: string 
  devices: any = []
  isFetchingDevices: boolean = true
  constructor( private route: ActivatedRoute, private wiaService: WiaService, private router: Router) { }

  ngOnInit() : void{
    this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log(params['id']) //log the value of id
      this.spaceId = params['id'];
      this.getDevices()
    });
  }

  onDeviceClick(deviceId: string): void {
    console.log(deviceId)
    this.router.navigate([`/spaces/${this.spaceId}/devices/${deviceId}/events`]);
  }

  getDevices(): void{
    this.isFetchingDevices = true
    this.wiaService.getDevices(this.spaceId).subscribe(
      (response) => {
        console.log(response)
        this.devices = response.devices;
      },
      (err) => {
      },
      () => {
        this.isFetchingDevices = false
      }
    );
  }
}
