<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreClientRequest;
use App\Http\Requests\UpdateClientRequest;
use App\Models\Client;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreClientRequest $request)
{
    try {
        // Récupérez les données validées à partir de la requête
        $data = $request->validated();

        // Vérifiez si la clé "nomComplet" existe dans le tableau $data
        if (array_key_exists('nomComplet', $data)) {
            // Créez un nouveau client en utilisant les données
            $client = Client::create([
                'nomComplet' => $data['nomComplet'],
                'telephone' => $data['telephone'],
                'adresse' => $data['adresse'],
            ]);

            return response()->json([
                'status' => true,
                'message' => 'Client créé avec succès',
                'client' => $client,
            ], 201); // Réponse HTTP 201 pour la création réussie.
        } else {
            return response()->json([
                'status' => false,
                'message' => 'La clé "nomComplet" n\'est pas définie dans les données soumises.',
            ], 400); // Réponse HTTP 400 Bad Request en cas de clé manquante.
        }
    } catch (\Throwable $th) {
        return response()->json([
            'status' => false,
            'message' => $th->getMessage(),
        ], 500); // Réponse HTTP 500 en cas d'erreur interne du serveur.
    }
}


    /**
     * Display the specified resource.
     */
    public function show(Client $client)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Client $client)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateClientRequest $request, Client $client)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Client $client)
    {
        //
    }
}
