import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { Types } from '../interfaces/types.interface';
import { baseUrl } from './varibles';

@Injectable({
  providedIn: 'root'
})
export class TypesService {

  constructor(private _http:HttpClient) { }

  public getType(url:string):Observable<Types>{
    return this._http.get<Types>(`${url}`);
  }

}
