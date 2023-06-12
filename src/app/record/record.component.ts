import { Component } from '@angular/core';
import { RecordsServiceService } from '../records-service.service';
import { Record } from 'src/record';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss'],
})
export class RecordComponent {
  dataList: Record[] = [];
  archives: any[] = [];
  title: any = '';
  constructor(private recordsService: RecordsServiceService) {
    this.dataList = recordsService.dataList;
  }
  form = {
    id: 0,
    author: '',
    title: '',
    category: '',
    content: '',
  };
  printForm() {
    console.log(this.form);
  }
  addNewItem() {
    if (
      this.form.author != '' &&
      this.form.title != '' &&
      this.form.category != '' &&
      this.form.content != ''
    )
      this.recordsService.addData(
        new Record(
          this.form.id,
          this.form.author,
          this.form.title,
          this.form.category,
          this.form.content
        )
      );
  }
}
