<?php

namespace App\Policies;

use App\Models\Produit;
use App\Models\User;
use App\Models\Utilisateur;
use Illuminate\Auth\Access\Response;

class ProduitPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return true;
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Produit $produit): bool
    {
        return $user->can('view-product', $produit);
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(Utilisateur $Utilisateur): bool
    {
        return $Utilisateur->role == 'caissier';
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Produit $produit): bool
    {
        return true;
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Produit $produit): bool
    {
        return true;
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, Produit $produit): bool
    {
        return true;
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Produit $produit): bool
    {
        return true;
    }
}
