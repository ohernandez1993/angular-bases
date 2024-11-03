import { NgModule } from "@angular/core";
import { CounterComponent } from "./counter.componet";

@NgModule({

  declarations:[

    CounterComponent,
  ],
   exports:[
     CounterComponent,
   ]

})
export class ConterModule{

}
