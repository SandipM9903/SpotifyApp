import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SongService } from '../song.service';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {


  constructor(private songService : SongService) { 
    this.getAllUserPlaylist();
  }
  ngOnInit() {
    
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

  deletePlaylist(playlistId:string)
  {
    this.songService.deletePlaylist(playlistId).subscribe(
      response =>{
        alert("Playlist Deleted");
        this.getAllUserPlaylist();
      }
    )
  }

  play()
  {
    alert("Playing");
  }
}
