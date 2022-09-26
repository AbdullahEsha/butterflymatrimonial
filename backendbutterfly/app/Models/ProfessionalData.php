<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProfessionalData extends Model
{
    use HasFactory;

    protected $table = 'professionaldata';
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'companyName',
        'designation',
        'com_location',
        'from_employment',
        'to_employment',
        'u_id',
    ];
}
