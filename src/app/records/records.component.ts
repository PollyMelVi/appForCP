import { Component, OnInit } from '@angular/core';
import { RecordsServiceService } from '../records-service.service';
import { Record } from 'src/record';


@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss'],
})
export class RecordsComponent implements OnInit {
  items: Record[] = []
  constructor(private recordsService: RecordsServiceService) {}

  ngOnInit() {
    this.items = this.recordsService.getDataList()
  }

  remove(id: number){
    this.recordsService.deleteData(id);
    this.items = this.recordsService.getDataList();
  }

  arhive(id: number){
    this.recordsService.toArchive(id);
    this.items = this.recordsService.getDataList();
  }
}
