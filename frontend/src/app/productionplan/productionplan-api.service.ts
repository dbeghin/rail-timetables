import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Payload, PowerplantSolution } from './payload.model2';
import { Injectable } from '@angular/core';
import {API_URL} from '../env';
import { Observable, of } from 'rxjs';
import {catchError, map, tap } from 'rxjs/operators';
import { MessageService } from '../message.service';

 
@Injectable({providedIn:'root'})
export class ProductionPlanApiService {
  productionplanUrl = `${API_URL}/productionplan`;
 
  constructor(
      private http: HttpClient,
      private messageService: MessageService,
    ) {  }
 
  private log(message: string) {
    this.messageService.add(`ProductionPlanApiService: ${message}`);
  }

  getProductionPlan(payload:Payload): Observable<PowerplantSolution[]> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(payload);
    console.log(body)
    return this.http.post<PowerplantSolution[]>(this.productionplanUrl, body,{'headers':headers}).pipe(
        tap(_ => this.log('obtained production plan')),
        catchError(this.handleError<PowerplantSolution[]>('getProductionPlan', []))
      )
  }

  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

     // TODO: send the error to remote logging infrastructure
     console.error(error); // log to console instead

     // TODO: better job of transforming error for user consumption
     this.log(`${operation} failed: ${error.message}`);

     // Let the app keep running by returning an empty result.
     return of(result as T);
    };
  }
 
}