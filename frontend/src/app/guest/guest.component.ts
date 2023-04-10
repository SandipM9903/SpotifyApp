import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GuestService } from '../guest.service';
import { SongService } from '../song.service';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {

  constructor(private songService : GuestService) {this.getAllUserPlaylist(); }

  ngOnInit(): void {
  }

  playlistForm = new FormGroup({
    "playlistId" : new FormControl(''),
    "playlistName" : new FormControl(''),
    "songName" : new FormControl(''),
    "songType" : new FormControl('')
  })

  playlistData:any;
  
  getAllUserPlaylist()
  {
    this.songService.getAllUserPlaylist().subscribe(
      response => {
        this.playlistData=response;
      }
    )
  }

  addPlaylist()
  {
    this.songService.addPlaylist(this.playlistForm.value).subscribe(
      response => {
        alert("Playlist Created");
        this.getAllUserPlaylist();
        this.playlistForm.reset();
      }
    )
  }
}