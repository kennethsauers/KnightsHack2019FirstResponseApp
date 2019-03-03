import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pin } from './entities';

@Injectable({
  providedIn: 'root'
})
export class PinService {
  constructor(private http: HttpClient) { }

  clearPins() {
    const headers = new HttpHeaders({
        'Content-Type': 'application/json'
    });

    interface ClearPinResponse {
      success: boolean;
      msg?: string;
    }

    return this.http.delete<ClearPinResponse>('/api/pin/all', { headers: headers });
  }

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

  getRolePins(role) {
    if (role == 0) return this.getPins();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.get<Pin[]>('/api/pin/get/' + role, { headers: headers });
  }

  getPins() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.get<Pin[]>('/api/pin/get', { headers: headers });
  }
}
