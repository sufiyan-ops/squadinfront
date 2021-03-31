import { Injectable } from '@angular/core';
import { DataService } from './services/data.service';
import { Http } from '@angular/http';
import { Equipment } from './equipment/equipment.model';

@Injectable({
  providedIn: 'root'
})
export class EquipService extends DataService {
  selectedEquipment: Equipment;
  employees: Equipment[];
  constructor(http:Http) {
    super("http://localhost:3000/api/equipments",http)
   }
}


