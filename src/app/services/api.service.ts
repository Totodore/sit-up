import { Injectable } from "@angular/core";
import { BaseApi } from "../utils/base-api.util";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: 'root' })
export class ApiService extends BaseApi {

  constructor(http: HttpClient) {
    super(http);
  }
}