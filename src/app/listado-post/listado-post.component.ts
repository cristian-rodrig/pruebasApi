import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { LoaderService } from '../loader.service';


export interface Post{
  userId: number;
  id: number;
  title: string;
  body?: string;
}



@Component({
  selector: 'app-listado-post',
  templateUrl: './listado-post.component.html',
  styleUrls: ['./listado-post.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
  })
export class ListadoPostComponent implements OnInit {

  

  constructor( public postService : PostService,
               private cdr : ChangeDetectorRef,
               private loader : LoaderService) { }

  ngOnInit(): void {
    this.getData();
  }

  dataApi : Post [] = [];

  getData(){
    this.loader.open();
    this.postService.getApi()
      .subscribe( (res: Post[]) =>{
        setTimeout(()=>{
          this.dataApi = res;
          this.cdr.markForCheck();
          this.loader.close();
          console.log(res);
        },3000)
      } );
     
  }

  trackByFn(index, item) {
    return item.id
  }

  deletePost(event){
    console.log(event);
    this.postService.deletePost(event)
      .subscribe(res =>{
        let itemBorrado = this.dataApi.findIndex(el => el.id === event)
        this.dataApi.splice(itemBorrado, 1)
       // this.cdr.markForCheck();
       this.dataApi = Object.assign([], this.dataApi)
      })
  }
}
