// skier-list.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({ 
  selector: 'app-skier-list',
  templateUrl: './list-skier.component.html',
})
export class ListSkierComponent implements OnInit {
  skiers: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getSkiers();
  }

  getSkiers() {
    this.http.get<any[]>('http://192.168.1.16:8089/api/skier/all').subscribe(
      data => {
        this.skiers = data;
      },
      error => {
        console.error('Error fetching skiers:', error);
      }
    );
  }
}
