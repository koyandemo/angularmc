import { Component, OnInit } from '@angular/core';
import {MasterCeremony} from '../model/MasterCeremony';
import {McService} from '../service/mc.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-mc-service-detail',
  templateUrl: './mc-service-detail.component.html',
  styleUrls: ['./mc-service-detail.component.scss']
})
export class McServiceDetailComponent implements OnInit {


  mcname;
  masterc:MasterCeremony;

  constructor(private mcserive:McService,private route:ActivatedRoute,private router:Router) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe((param:ParamMap)=>{
      this.mcname=param.get('name');
    })

    this.mcserive.findMcByName(this.mcname).subscribe(data=>{
      this.masterc=data;
    })


  }



  editmc(name){
    this.router.navigate(['mc-edit',name]);
  }

  delete(name){
    this.mcserive.deletemc(name);

  }







}
