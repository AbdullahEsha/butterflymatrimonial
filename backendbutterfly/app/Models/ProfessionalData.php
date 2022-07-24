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
        'designation',
        'organizationName',
        'com_department',
        'com_location',
        'from_employment',
        'to_employment',
        'com_reference',
        'cvdata_id',
    ];
}
