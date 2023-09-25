import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandeComponent } from './components/commande/commande.component';
import { ProduitsComponent } from './components/produits/produits.component';
import { TabBordComponent } from './components/tab-bord/tab-bord.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ListProduitsComponent } from './components/produits/list-produits/list-produits.component';
import { AjoutProduitsComponent } from './components/produits/ajout-produits/ajout-produits.component';

const routes: Routes = [
  { path: 'home', component: AccueilComponent},
  { path: 'commande', component: CommandeComponent },
  { path: 'produit', component: ProduitsComponent },
  { path: 'ajout-produits', component: AjoutProduitsComponent },
  { path: 'liste-produits', component: ListProduitsComponent },
  { path: 'tabBord', component: TabBordComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
