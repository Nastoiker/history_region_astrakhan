<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class citySights extends Model
{
    public $timestamps = false;
    use HasFactory;
    protected $fillable = ['description'];
    public function lists() {
        return $this->hasMany(citySights::class);
    }
}
