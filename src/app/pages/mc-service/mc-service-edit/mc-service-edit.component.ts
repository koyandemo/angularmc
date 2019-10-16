import { Component, OnInit } from '@angular/core';
import {Form, FormArray, FormBuilder, FormControl, FormControlName, FormGroup, Validators} from '@angular/forms';
import {McService} from '../service/mc.service';
import {ImageService} from '../service/image.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {MasterCeremony} from '../model/MasterCeremony';

@Component({
  selector: 'app-mc-service-edit',
  templateUrl: './mc-service-edit.component.html',
  styleUrls: ['./mc-service-edit.component.scss']
})
export class McServiceEditComponent implements OnInit {




  form: FormGroup;
  mcname;
  mcobj:MasterCeremony;


  constructor(private formbuilder: FormBuilder, private mcservice:McService,
              private imageservice:ImageService,private route:ActivatedRoute,private router:Router) {

    this.form = this.formbuilder.group({
      name: [null, Validators.required],
      image: [null, Validators.required],
      phone: [null, Validators.required],
      price:this.formbuilder.group({
        hourlyPrice:[null,Validators.required],
        dailyPrice:[null,Validators.required]
      }),
      city:[null,Validators.required],
      description:[null,Validators.required],
      email:[null,Validators.required]
    })

  }

  ngOnInit() {
    this.route.paramMap.subscribe((param:ParamMap)=>{
      this.mcname=param.get('name');

    })
    this.mcservice.findMcByName(this.mcname).subscribe(data=>{
      this.mcobj=data;
      console.log("Edit data "+data);
    })
  }


  mcUpdate(){

    this.addMc();
    this.mcservice.updatepatch(this.mcname, this.form.value).subscribe(data => {
      console.log(data);
    });
    this.router.navigate(['mc-list']);

  }


  addMc() {

    if (this.form.get('name').value == null) {
      this.form.get('name').setValue(this.mcobj.name);
    }
    if (this.form.get('phone').value == null) {
      this.form.get('phone').setValue(this.mcobj.phone);
    }
    if (this.form.get('city').value == null) {
      this.form.get('city').setValue(this.mcobj.city);
    }

    // if(this.form.get('image').value==null){
    //   this.form.get('image').setValue(this.mcobj.image);
    // }

    if (this.form.get('description').value == null) {
      this.form.get('description').setValue(this.mcobj.description);
    }

    if (this.form.get('email').value == null) {
      this.form.get('email').setValue(this.mcobj.email);
    }

     if(this.form.get('price').get('hourlyPrice').value==null){

       this.form.get('price').get('hourlyPrice').setValue(this.mcobj.price.hourlyPrice);
     }

     if(this.form.get('price').get('dailyPrice').value==null){
       this.form.get('price').get('dailyPrice').setValue(this.mcobj.price.dailyPrice);
     }

  }


  removePrice(i:any){
    let pprice =this.form.get('price') as FormArray;
    pprice.removeAt(i);
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






// else if(this.form.get('image')==null){
//   this.form.get('image').setValue(this.mcobj.image);
// }
// if(this.form.get('price').get('hourlyPrice')==null){
//    this.form.get('price').get('hourlyPrice').setValue(this.mcobj.price[0].hourlyPrice);
//  }
//  if(this.form.get('price').get('dailyPrice')==null){
//    this.form.get('price').get('dailyPrice').setValue(this.mcobj.price[0].dailyPrice);
// }
