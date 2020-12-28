import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../listado-post/listado-post.component';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class PostComponent implements OnInit {

  @Input() post : Post
  @Output() onDelete = new EventEmitter();

  constructor(private cdr : ChangeDetectorRef) { }

  ngOnInit(): void {
    setTimeout(()=>{
    //  this.post.title = '';
      //this.cdr.markForCheck();
     //this.post = {title: "Ej Body"} as any
    },2000);
    
  }

}
