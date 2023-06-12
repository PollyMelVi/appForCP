import { Component, OnInit } from '@angular/core';
import { RecordsServiceService } from '../records-service.service';

@Component({
  selector: 'app-arhive',
  templateUrl: './arhive.component.html',
  styleUrls: ['./arhive.component.scss']
})
export class ArhiveComponent implements OnInit {
  arhive: any[] = []
  constructor(private recordsService: RecordsServiceService){}
  ngOnInit(): void {
    this.arhive = this.recordsService.getArhive()
  }
}
