import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { throwError as observableThrowError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { WiaConfig } from '../common/config';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root',
})

export class WiaService {

    EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    EXCEL_EXTENSION = '.xlsx';

    headers: HttpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.wiaConfig.getKey()}`
    })

    constructor(private http: HttpClient, private wiaConfig: WiaConfig) {
    }

    getSpaces() {
        return this.http.get(`${this.wiaConfig.getBaseUrl()}/spaces`, {headers: this.headers}).pipe(
          tap((res: any) => res),
          catchError(this.handleError)
        );
    }

    getDevices(spaceId: string) {
        return this.http.get(`${this.wiaConfig.getBaseUrl()}/devices?space.id=${spaceId}`, {headers: this.headers}).pipe(
          tap((res: any) => res),
          catchError(this.handleError)
        );
    }

    getEvents(deviceId: string) {
        return this.http.get(`${this.wiaConfig.getBaseUrl()}/events?device.id=${deviceId}&processed=true`, {headers: this.headers}).pipe(
          tap((res: any) => res),
          catchError(this.handleError)
        );
    }

    public exportAsExcelFile(json: any[], excelFileName: string): void {

        const myworksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
        const myworkbook: XLSX.WorkBook = { Sheets: { 'data': myworksheet }, SheetNames: ['data'] };
        const excelBuffer: any = XLSX.write(myworkbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, excelFileName);
    }
    
    private saveAsExcelFile(buffer: any, fileName: string): void {
        const data: Blob = new Blob([buffer], {
            type: this.EXCEL_TYPE
        });
        FileSaver.saveAs(data, fileName + '_exported'+ this.EXCEL_EXTENSION);
    }
    
    private handleError(error: any) {
        return observableThrowError(error.error || 'Server error');
    }


}