import { Component, OnInit } from '@angular/core';
import { ProductionPlanApiService } from './productionplan-api.service';
import { Payload, Powerplant, PowerplantSolution } from './payload.model';

@Component({
  selector: 'app-productionplan',
  templateUrl: './productionplan.component.html',
  styleUrls: ['./productionplan.component.css']
})

export class ProductionplanComponent implements OnInit {
  title = 'Production plan from payload';
  selectedPowerplant?: Powerplant;
  powerplants:Powerplant[] = [];
  powerplantsolutions:PowerplantSolution[] = [];
  payload = new Payload();

  constructor(private productionPlanApiService:ProductionPlanApiService) { }

  ngOnInit(): void {
  }

  onSelect(powerplant: Powerplant): void {
    this.selectedPowerplant = powerplant;
  }

  addPowerplant() {
    this.powerplants.push(new Powerplant())
  }

  getProductionPlan() {
    this.payload.powerplants = this.powerplants;
    this.productionPlanApiService.getProductionPlan(this.payload)
      .subscribe(powerplantsolutions => this.powerplantsolutions = powerplantsolutions);      
  }
}
