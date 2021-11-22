import { CatService } from './../../services/cat.service';
import { AfterContentInit, Component, OnChanges, OnInit } from '@angular/core';
import Cat from 'src/app/interfaces/cat';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  gato: Cat = { };

  constructor(private cat: CatService) {
  }

  request(){
    this.cat.getCat().subscribe(data=>{this.gato = data[0]});
  }

  ngOnInit(): void {
    this.request();
  }

}
