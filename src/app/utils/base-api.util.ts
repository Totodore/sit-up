import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { lastValueFrom } from "rxjs";
import { UserLoginReq, UserLoginRes, UserModel, UserRegisterReq } from "../models/user.model";
import { AnnouncementModel } from "../models/announcement.model";

export class BaseApi {

  constructor(
    protected http: HttpClient,
  ) { }

  public readonly root: string = `${environment.secured ? "https" : "http"}://${environment.api}`;


  public async login(body: UserLoginReq): Promise<boolean> {
    try {
      const res = await lastValueFrom(this.http.post<UserLoginRes>(`${this.root}/auth/login`, body));
      localStorage.setItem("jwt", "Bearer " + res.token);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  public async register(body: UserRegisterReq): Promise<boolean> {
    try {
      const res = await lastValueFrom(this.http.post<UserLoginRes>(`${this.root}/auth/register`, body));
      localStorage.setItem("jwt", res.token);
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }

  public logout(): boolean {
    try {
      localStorage.removeItem("jwt");
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }


  public post<Q, R>(path: string, payload?: Q): Promise<R> {
    return lastValueFrom(this.http.post<R>(`${this.root}/${path}`, payload, {
      headers: {
        "Authorization": this.jwt ?? "",
      }
    }));
  }

  public get<R>(path: string): Promise<R> {
    return lastValueFrom(this.http.get<R>(`${this.root}/${path}`, {
      headers: {
        "Authorization": this.jwt ?? "",
      },
      reportProgress: true,
      observe: "body"
    }));
  }

  public put<R>(path: string): Promise<R> {
    return lastValueFrom(this.http.put<R>(`${this.root}/${path}`, {}, {
      headers: {
        "Authorization": this.jwt ?? "",
      },
      reportProgress: true,
      observe: "body"
    }));
  }

  public delete(path: string): Promise<void> {
    return lastValueFrom(this.http.delete<void>(`${this.root}/${path}`, {
      headers: {
        "Authorization": this.jwt ?? "",
      }
    }));
  }

  public patch<Q, R>(path: string, payload?: Q): Promise<R> {
    return lastValueFrom(this.http.patch<R>(`${this.root}/${path}`, payload, {
      headers: {
        "Authorization": this.jwt ?? "",
      }
    }));
  }


  public get logged(): boolean {
    return localStorage.getItem("jwt") != null;
  }

  public get jwt(): string | null {
    return localStorage.getItem("jwt");
  }
  public get user(): UserModel {
    return JSON.parse(localStorage.getItem("me")!);
  }


  protected get headers(): HttpHeaders {
    if (!this.jwt) return new HttpHeaders();
    return new HttpHeaders({ "Authorization": this.jwt });
  }

  public async getfilterAnnouncements(params: any): Promise<AnnouncementModel[]> {
    try {
      const res = await lastValueFrom(this.http.get<AnnouncementModel[]>(`${this.root}/announcement/filter`, {
        headers: {
          "Authorization": this.jwt ?? "",
        },
        params: params,
        reportProgress: true,
        observe: "body"
      }));
      return res;
    } catch (error) {
      console.error(error);
      return [];
    }
  }
  
}