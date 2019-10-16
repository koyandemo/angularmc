import { Component, OnInit } from '@angular/core';
import {MasterCeremony} from '../model/MasterCeremony';
import {McService} from '../service/mc.service';
import {Router} from '@angular/router';
import {timeout} from 'rxjs/operators';

@Component({
  selector: 'app-mc-service-list',
  templateUrl: './mc-service-list.component.html',
  styleUrls: ['./mc-service-list.component.scss']
})
export class McServiceListComponent implements OnInit {

  mclist:MasterCeremony[];

  constructor(private mcserivce:McService,private route:Router) {

  }

  ngOnInit() {

      setTimeout(()=>{
        this.mcserivce.findAll().subscribe(
          data => this.mclist=data

        )
      },500)
    }



  public onSelect(mc){
    this.route.navigate(['mc-details',mc.name]);
  }






}
