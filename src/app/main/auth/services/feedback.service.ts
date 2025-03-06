import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

interface FeedbackData {
  txtContactNumber: string;
  txtEmail: string;
  txtFeedback: string;
  txtFlightDate: string;
  txtFlightNumber: string;
  txtName: string;
  txtType: 'Complement' | 'Complaint' | 'Suggestion';
}


@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private apiUrl = 'https://www.flynovoair.com/feedback';

  constructor(private http: HttpClient) {}

  sendFeedback(formData: FormData): Observable<FeedbackData> {
    return this.http.post<FeedbackData>(this.apiUrl, formData);
  }

}
