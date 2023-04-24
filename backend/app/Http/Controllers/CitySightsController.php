<?php

namespace App\Http\Controllers;

use App\Models\citySights;
use Illuminate\Http\Request;

class CitySightsController extends Controller
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
        $creat_desk = CitySights::create($request->validated());
        return new deskresourse($creat_desk);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(citySights $citySights)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(citySights $citySights)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, citySights $citySights)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(citySights $citySights)
    {
        //
    }
}
