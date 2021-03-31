import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { NotFoundError } from './../common/not-found-error';
import { BadInput } from './../common/bad-input';
import { AppError } from './../common/app-error';
import { UserService } from './../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EquipService } from '../equip.service';
import { httpFactory } from '@angular/http/src/http_module';
import { Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  animal: string;
  name: string;
equipment: any = [];
data=[]
id= 1;
  constructor(
    public dialog: MatDialog,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private service: EquipService,
    private router: Router,
    private http:Http
  )
  
  
  
  
  {{
    http.get('http://localhost:3000/api/equipments/equipment').subscribe(response=>
    {
      this.equipment=response.json();
      console.log(this.equipment);
      this.data= response.json();
    })
  } }
  

  ngOnInit(): void {
    this.service.getAll().subscribe(data=>{
      this.data = data;
    })
    
  }
  addEquipment(sf){
    // this.router.navigate(['/dashboard']);
    console.log('asd')
    alert("Equipments Added");
    console.log('asd')
    console.log(sf.value);
    let equipment = {      
      equipmentname: sf.value.registeration.eqname,
      EquipmentCategory: sf.value.registeration.equipmentcategory,
      quantity: sf.value.registeration.quantity,
      Price: sf.value.registeration.price,
      Summary: sf.value.registeration.summary,


    }
    this.service.create(equipment).subscribe(data =>{
      this.toastr.success(`equipment ${data.equipmentname} added for sell`);

    },
    (error: AppError)=>{
      if(error instanceof BadInput)
      this.toastr.error('incorrect Inputs');
      else
      throw error;
    }
    )
    sf.reset();
  }
 


}
