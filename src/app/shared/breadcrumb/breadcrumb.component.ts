import { Location } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  routeList: any = []
  constructor( private router: Router) {
  }

  ngOnInit(): void {
    let currentRoute = this.router.url
    console.log(currentRoute)
    const routeList = currentRoute.split("/").slice(1)
    let formattedRouteList = []
    for(let i = 0; i < routeList.length; i += 2){
      formattedRouteList.push(routeList[i])
    }
    this.routeList = formattedRouteList
    console.log(this.routeList)
  }


}


