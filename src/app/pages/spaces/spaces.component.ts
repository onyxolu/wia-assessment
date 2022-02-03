import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WiaService } from 'src/app/services/wia.service';

@Component({
  selector: 'app-spaces',
  templateUrl: './spaces.component.html',
  styleUrls: ['./spaces.component.scss']
})
export class SpacesComponent implements OnInit {

  spaces: any = []
  isFetchingSpaces: boolean = true

  constructor( private wiaService: WiaService, private router: Router) { }

  ngOnInit(): void {
    this.getSpaces()
  }

  getSpaces(): void {
    this.isFetchingSpaces = true
    this.wiaService.getSpaces().subscribe(
      (response) => {
        this.spaces = response.spaces;
      },
      (err) => {
      },
      () => {
        this.isFetchingSpaces = false
      }
    );
  }

  onSpaceClick(spaceId: string): void {
    console.log(spaceId)
    this.router.navigate([`/spaces/${spaceId}/devices`]);
  }

}
