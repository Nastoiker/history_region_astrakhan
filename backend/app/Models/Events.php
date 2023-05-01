<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Events extends Model
{
    public $timestamps = false;
    use HasFactory;
    protected $fillable = ['title'];
    public function lists() {
        return $this->hasMany(Events::class);
    }
}
