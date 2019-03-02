import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pin } from './entities';

@Injectable({
  providedIn: 'root'
})
export class PinService {
  constructor(private http: HttpClient) { }

  createPin(newPin: Pin){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    interface CreatePinResponse {
      success: boolean;
      msg?: string;
      event?: Pin;
    }

    return this.http.put<CreatePinResponse>('/api/pin/create', newPin, { headers: headers });
  }
}
