import { Injectable } from '@angular/core';
import { Record } from 'src/record';

@Injectable({
  providedIn: 'root',
})
export class RecordsServiceService {
  dataList: Record[] = [
    {
      id: 0,
      author: 'Анастасия Калитина',
      title: 'Бесплатный стендап в центре',
      category: 'Развлечение на вечер',
      content:
        'Когда: 1 июня в 19:00 (сбор с 18:30). Где: Red Lion Pub - Садово-Самотёчная улица, 13 стр.1. Классический британский паб и  компания профессиональных стендап-комиков, участников крупных YouTube и ТВ проектов, рассказывающих свои самые свежие шутки — лучшее решение для конца недели! Среди выступающих будут: Сергей Зорик (Stand Up на ТНТ); Настя Чубарова (Женщины комики на YouTube);  Саша Петросян (Открытый микрофон на ТНТ) и другие опытные комики.',
    },
  ];

  getDataList(): Record[] {
    return this.dataList;
  }
  id = 1;
  archive: any[] = [];
  addData(record: Record) {
    record.id = this.id++;
    this.dataList.push(record);
    this.id++;
  }
  deleteData(id: number) {
    return (this.dataList = this.dataList.filter((value) => value.id !== id));
  }
  toArchive(id: number) {
    const record = this.dataList.find((rec) => rec.id === id);
    this.archive.push(record?.title);
    this.dataList = this.dataList.filter((value) => value.id !== id)
  }
  getArhive(): Record[] {
    return this.archive;
  }
}
