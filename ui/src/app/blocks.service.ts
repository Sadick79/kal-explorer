import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlocksService {

  constructor(private http: HttpClient) { }

  blocksUrl = `${environment.url_base}/blocks`;

  getBlocks() {
    return this.http.get(this.blocksUrl);
  }

  getBlock(blockhash : String) {
    return this.http.get(`${environment.url_base}/block/${blockhash}`);
  }
}