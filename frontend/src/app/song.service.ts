import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SongService {

  userName:any;

  baseUrl = "http://localhost:65100/api/v1"
  constructor(private httpClient : HttpClient) { 
  }

  addPlaylist(playlistobj:any)
  {
    return this.httpClient.post(this.baseUrl + "/user/" + this.userName + "/playlist",playlistobj);
  }

  getAllUserPlaylist()
  {
    let httpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer' + localStorage.getItem('jwt')
    });

    let requestOptions = {headers : httpHeaders}

    return this.httpClient.get(this.baseUrl + "/user/" + this.userName + "/playlists", requestOptions);
  }

  deletePlaylist(playlistId:any)
  {
    return this.httpClient.delete(this.baseUrl + "/user/" + this.userName +"/"+ playlistId);
  }

  play(playlistId:any)
  {
    return this.userName;
  }
}
