import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  baseUrl = "http://localhost:65100/api/v1"
  constructor(private httpClient : HttpClient) { 
  }

  addPlaylist(playlistobj:any)
  {
    return this.httpClient.post(this.baseUrl + "/user/" + "guest" + "/playlist",playlistobj);
  }

  getAllUserPlaylist()
  {
    return this.httpClient.get(this.baseUrl + "/user/" + "guest" + "/playlists");
  }
}
