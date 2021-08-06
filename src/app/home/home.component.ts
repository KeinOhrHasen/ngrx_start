import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as apodActions from '../store/app.actions';
import { IAPOD } from '../shared/interfaces/apod.interface';
import { NasaService } from '../shared/services/nasa.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public apod: IAPOD;

  constructor(
    private store: Store<{apod: IAPOD | any}>,
    private nasaService: NasaService
    ) { }

  ngOnInit(): void {
    this.store.select('apod').subscribe((image) => {
      console.log(image)
      this.apod = image.apod;
    });
  }

  public loadImage(): void {
    this.nasaService.getAPOD().subscribe((apod: IAPOD) => {
      console.log(apod);
      this.store.dispatch(new apodActions.AddAPODPicture(apod));
    });
  }


}
