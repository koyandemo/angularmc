import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {McService} from '../service/mc.service';
import {ImageService} from '../service/image.service';

@Component({
  selector: 'app-mc-service-create',
  templateUrl: './mc-service-create.component.html',
  styleUrls: ['./mc-service-create.component.scss']
})
export class McServiceCreateComponent implements OnInit {


  ngOnInit() {

  }

  form: FormGroup;

  constructor(private formbuilder: FormBuilder, private mcservice:McService,private imageservice:ImageService) {

    this.form = this.formbuilder.group({

      name: [null, Validators.required],
      image: [null, Validators.required],
      phone: [null, Validators.required],
      price:this.formbuilder.group({
        hourlyPrice:["",Validators.required],
        dailyPrice:["",Validators.required]
      }),
      city:[null,Validators.required],
      description:[null,Validators.required],
      email:[null,Validators.required]
    })

  }


  removePrice(i:any){
    let pprice =this.form.get('price') as FormArray;
    pprice.removeAt(i);
  }

  save(){
    this.mcservice.create(this.form.value).subscribe(data =>
      console.log(data));
  }

  upload(file:File,fc:FormControl){
    this.imageservice.upload(file).subscribe(
      data =>fc.setValue(data.imagePath)
    )
  }

  preview(file:any,mc:FormControl){
    let reader =new FileReader;
    reader.onloadend=()=>{
      mc.setValue(reader.result);
    }
    reader.readAsDataURL(file);
  }
}




// addPrice(){
//   let pprice=this.form.get('price') as FormArray;
//   pprice.push(this.formbuilder.group({
//     hourlyPrice:["",Validators.required],
//     dailyPrice:["",Validators.required]
//   }))
// }
