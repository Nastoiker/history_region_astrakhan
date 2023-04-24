<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class tourGuides extends Model
{
    use HasFactory;
    public function lists() {
        return $this->hasMany(DeskList::class);
    }
}
