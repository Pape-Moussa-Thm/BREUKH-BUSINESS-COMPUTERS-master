<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Client extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'nomComplet', // Ajoutez le champ "nomComplet" à la liste des champs fillables
        'telephone',
        'adresse',
        // Ajoutez d'autres champs si nécessaire
    ];

    public function commandes()
    {
        return $this->hasMany(Commande::class);
    }


}
