<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreClientRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'nomComplet' => 'required|string', // Exemple de règle de validation pour le champ "nomComplet"
            'telephone' => 'required|string',
            'adresse' => 'required|string',
            // Définissez d'autres règles de validation pour les autres champs si nécessaire
        ];
    }
}
