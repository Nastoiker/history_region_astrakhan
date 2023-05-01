<?php

namespace App\Http\Controllers;

use App\Http\Requests\TourGuidesRequest;
use App\Http\Resources\TourGuidesResource;
use App\Models\tourGuides;
use Illuminate\Http\Request;

class TourGuidesController extends Controller
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
    public function create(TourGuidesRequest $request)
    {
        $creat_TourGuide = TourGuides::create($request->validated());
        return new TourGuidesResource($creat_TourGuide);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(TourGuidesRequest $request)
    {
        $creat_TourGuider = TourGuides::create($request->validated());
        return new TourGuidesResource($creat_TourGuider);
    }

    /**
     * Display the specified resource.
     */
    public function show(tourGuides $id)
    {
       return new TourGuidesResource($id);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(tourGuides $tourGuides)
    {
        $tourGuides->update();
        return new TourGuidesResource($tourGuides);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, tourGuides $tourGuides)
    {
        $tourGuides->update($request->validated());
        return new TourGuidesResource($tourGuides);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(tourGuides $tourGuides)
    {
        $tourGuides->delete();
        return response($tourGuides->delete(), \Illuminate\Http\Response::HTTP_NO_CONTENT);
    }
}
