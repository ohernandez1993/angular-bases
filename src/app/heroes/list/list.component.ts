import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public herNames: string[] = ['Spiderman','Ironman','Hulk','she hulk','Thor'];
  public deteledHero?:string;

  removeLastHero():void{

    this.deteledHero = this.herNames.pop();

  }

}
