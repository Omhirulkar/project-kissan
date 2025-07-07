import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MandiService {
  private readonly baseUrl = 'https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070';
  private readonly apiKey = '579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b'; // Replace with your data.gov.in API key

  constructor(private http: HttpClient) {}

  getPrices(commodity: string, state: string, limit: number = 10): Observable<any> {
    const params = new HttpParams()
      .set('api-key', this.apiKey)
      .set('format', 'json')
      .set('filters[commodity]', commodity)
      .set('filters[state]', state)
      .set('limit', limit);

    return this.http.get<any>(this.baseUrl, { params });
  }

  getAllData(limit: number = 1000): Observable<any> {
  const params = new HttpParams()
    .set('api-key', this.apiKey)
    .set('format', 'json')
    .set('limit', limit);

  return this.http.get<any>(this.baseUrl, { params });
}

}
