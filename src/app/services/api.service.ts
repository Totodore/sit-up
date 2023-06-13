import { Injectable } from "@angular/core";
import { BaseApi } from "../utils/base-api.util";
import { HttpClient } from "@angular/common/http";
import { LocationResponse } from "../models/location.model";
import { lastValueFrom } from "rxjs";

@Injectable({ providedIn: 'root' })
export class ApiService extends BaseApi {

  constructor(http: HttpClient) {
    super(http);
  }

  public async getLocationFromSearch(search: string): Promise<LocationResponse> {
    return lastValueFrom(this.http.get<LocationResponse>(`https://api-adresse.data.gouv.fr/search?q=${search}`));
  }
}