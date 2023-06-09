<?php

namespace App\Http\Controllers;

use App\Http\Requests\EventsRequest;
use App\Http\Resources\EventsResource;
use App\Models\Events;
use Illuminate\Http\Request;

class EventsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(EventsRequest $request)
    {
        $creat_desk = Events::create($request->validated());
        return new EventsResource($creat_desk);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(EventsRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Events $events)
    {

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Events $events)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(EventsRequest $request, Events $events)
    {
        $events->update($request->validated());
        return  new EventsResource($events);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Events $events)
    {
        //
    }
}
