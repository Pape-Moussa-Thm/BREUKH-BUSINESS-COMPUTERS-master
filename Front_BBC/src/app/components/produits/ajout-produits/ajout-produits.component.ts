import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ImagesService } from 'src/app/services/image/image.service';
import { ProduitsService } from 'src/app/services/produit/produits.service';

@Component({
  selector: 'app-ajout-produits',
  templateUrl: './ajout-produits.component.html',
  styleUrls: ['./ajout-produits.component.css']
})
export class AjoutProduitsComponent {

  imageSrc: any = 'assets/moi.jpg';
  produitForm: FormGroup
  allCaracts!: any
  allUnite!: any
  allCateg!: any
  allMark!: any
  name: string = ""
  img: string = ""

  ngOnInit()
  {
    this.all();
  }

  constructor(private fb: FormBuilder, private prodService: ProduitsService, private imageService: ImagesService) {
    this.produitForm = this.fb.group({
      succursale_id: ['1'],
      libelle: [''],
      prix: [''],
      qte: [''],
      marque: ['Choisie une marque'],
      categorie: ['Choisie une catégorie'],
      caracts: this.fb.array([
        this.fb.group({
          caracteristique: ['Choisie une caractéristique'],
          valeur: [''],
          unite: ["Choisie l'unité"]
        })
      ])
    });
  }

  get caracts(): FormArray {
    return this.produitForm.get('caracts') as FormArray;
  }

  supprimerCaract(index: number) {
    this.caracts.removeAt(index);
    // console.log(this.caracts.value);
  }

  addCaract() {
    // console.log(this.caracts.value);
    this.caracts.push(this.fb.group({
      caracteristique: ['Choisie une caractéristique'],
      valeur: [''],
      unite: ["Choisie l'unité"]
    }))
  }

  all()
  {
    this.prodService.allCaract().subscribe(result => {
      this.allCaracts = result
      // console.log(this.allCaracts);
    })

    this.prodService.allUnite().subscribe(result => {
      this.allUnite = result
      // console.log(this.allUnite);
    })

    this.prodService.allMarque().subscribe(result => {
      this.allMark = result
      // console.log(this.allMark);
    })

    this.prodService.allCategorie().subscribe(result => {
      this.allCateg = result
      // console.log(this.allCateg);
    })
  }

  uploadImage() {
    document.getElementById('fileInput')?.click();
  }

  onFileSelected(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const selectedImage = inputElement.files?.[0] as File;
    this.name = selectedImage.name

    if (selectedImage) {
      this.imageService.recupImg(selectedImage).subscribe({
        next: (arg) => {
          this.img = arg as string;
          this.imageSrc = this.img;
        }
      });
    }
    console.log(this.name);
    console.log(this.img);
  }

  addProd() {
    const data = this.produitForm.value;
    data.photo = this.name;
    data.photo_name = this.img;
    console.log(data);
    this.prodService.addProd(data).subscribe(res=>{
      console.log(res);
    })
  }


}
