<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Edu_qualificationData extends Model
{
    use HasFactory;

    protected $table = 'edu_qualificationdata';
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'instituteName',
        'passingYear',
        'cvdata_id',
    ];
}
