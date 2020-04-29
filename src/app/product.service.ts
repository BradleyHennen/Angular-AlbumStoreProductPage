import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { map } from "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";

import { Album } from "./album";

@Injectable()
export class ProductService {
  constructor(private _http: Http) {}

  private _albumUrl = "../assets/album.json";

  getAlbum(id: number): Observable<Album> {
    return this._http
      .get<Album>(this._albumUrl)
      .pipe(map((response): Album => response.json()));
  }
}
