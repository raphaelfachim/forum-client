import { Component, OnInit } from '@angular/core';
import { ForumService } from 'src/app/_services/forum.service';

@Component({
  selector: 'app-forum-main',
  templateUrl: './forum-main.component.html',
  styleUrls: ['./forum-main.component.css']
})
export class ForumMainComponent implements OnInit{

  constructor(private readonly forumService: ForumService){ }

  ngOnInit(): void {
    
  }
}
