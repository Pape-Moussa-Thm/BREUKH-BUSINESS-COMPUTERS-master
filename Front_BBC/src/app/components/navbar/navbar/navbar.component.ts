import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
constructor(private router: Router){}

// onSelectProduct(arg0: any) {
// throw new Error('Method not implemented.');
// }
onSelectProduct(event: Event) {
const selectedOption=event.target as HTMLSelectElement
console.log(selectedOption.value);

  switch (selectedOption.value) {
    case 'produit':
      this.router.navigate(['/produit']);
      break;
    case 'ajout':
      this.router.navigate(['/ajout-produits']);
      break;
    case 'liste':
      this.router.navigate(['/liste-produits']);
      break;
    default:
      // Gérer le cas par défaut si nécessaire
      break;
  }
}
}
