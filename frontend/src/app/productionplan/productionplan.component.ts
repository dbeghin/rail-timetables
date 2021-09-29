import { Component, OnInit } from '@angular/core';
import { ProductionPlanApiService } from './productionplan-api.service';
import { Payload, Powerplant, PowerplantSolution } from './payload.model2';

@Component({
  selector: 'app-productionplan',
  templateUrl: './productionplan.component.html',
  styleUrls: ['./productionplan.component.css']
})
export class ProductionplanComponent implements OnInit {
  title = 'Production plan from payload';
  editPowerplant:Powerplant = new Powerplant();
  powerplants:Powerplant[] = [];
  powerplantsolutions:PowerplantSolution[] = [];
  payload = new Payload();

  constructor(private productionPlanApiService:ProductionPlanApiService) { }

  ngOnInit(): void {
  }

  addPowerplant() {
    this.powerplants.push(this.editPowerplant)
  }

  getProductionPlan() {
    this.productionPlanApiService.getProductionPlan(this.payload)
      .subscribe(powerplantsolutions => this.powerplantsolutions = powerplantsolutions);      
  }
}
