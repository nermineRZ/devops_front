import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-skier',
  templateUrl: './add-skier.component.html',
})
export class AddSkierComponent {
  firstName: string = '';
  lastName: string = '';


  constructor(private http: HttpClient) {}

  addSkier() {
    // Only send firstName (nom) and lastName (prenom)
    const skier = {
      firstName: this.firstName,
      lastName: this.lastName,
      subscription: {
        typeSub: 'MONTHLY', // or fetch this dynamically if required
        price: 100.0,
        startDate: new Date(),
        endDate: new Date(),
      },
    };
    
    this.http.post('http://192.168.1.16:8089/api/skier/add', skier).subscribe(
      response => {
        console.log('Skier added:', response);
        // Reset form fields after successful add
        this.firstName = '';
        this.lastName = '';
      },
      error => {
        console.error('Error adding skier:', error);
      }
    );
  }
}
