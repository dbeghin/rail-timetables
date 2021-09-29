import { Component, OnInit } from '@angular/core';
import { ProductionPlanApiService } from './productionplan-api.service';
import { Payload, PowerplantSolution } from './payload.model2';

@Component({
  selector: 'app-productionplan',
  templateUrl: './productionplan.component.html',
  styleUrls: ['./productionplan.component.css']
})
export class ProductionplanComponent implements OnInit {
  title = 'Production plan from payload';
  powerplants:PowerplantSolution[] = [];
  payload = new Payload();

  constructor(private productionPlanApiService:ProductionPlanApiService) { }

  ngOnInit(): void {
    this.getProductionPlan()
  }

  getProductionPlan() {
    this.productionPlanApiService.getProductionPlan(this.payload)
      .subscribe(powerplants => this.powerplants = powerplants);      
  }
}
