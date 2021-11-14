import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as apodActions from '../store/app.actions';
import { IAPOD } from '../shared/interfaces/apod.interface';
import { NasaService } from '../shared/services/nasa.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public apods: IAPOD[] = [];

  constructor(
    private store: Store<{ apods: IAPOD[] }>,
    private nasaService: NasaService
  ) {}

  ngOnInit(): void {
    this.store.select('apods').subscribe((apods) => {
      console.log(apods);
      // this.apods = images;
    });
  }

  public loadImage(): void {
    this.nasaService.getAPOD().subscribe((apod: IAPOD) => {
      console.log(apod);
      this.store.dispatch(new apodActions.AddAPODPicture(apod));
    });
  }

  public deleteImage(index: number): void {
    this.store.dispatch(new apodActions.deleteAPODPicture(index));
  }

  public updateImage(apod: IAPOD, index: number): void {
    const updatedImage = {
      ...apod,
      title: 'New Title',
    };
    this.store.dispatch(
      new apodActions.updateAPODPicture({ apod: updatedImage, index })
    );
  }
}
