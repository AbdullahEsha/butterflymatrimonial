<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CvData extends Model
{
    use HasFactory;

    protected $table = 'cvdata';
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */

    protected $fillable = [
        'image',
        'name',
        'gender',
        'phone',
        'religion',
        'email',
        'presentAddress',
        'divisionPresent',
        'dristrictPresent',
        'parmanentAddress',
        'divisionParmanent',
        'dristrictParmanent',
        'age',
        'specialCase',
        'spousePreference',
        'about',
        'height',
        'weight',
        'bloodGroup',
        'grownUpAt',
        'specialCondition',
        'fatherName',
        'fatherOcupation',
        'motherName',
        'motherOcupation',
        'profession',
        'districtPreference',
        'religionPreference',
        'physicalStatus',
        'ageMinimum',
        'ageMaximum',
        'heightMinimum',
        'heightMaximum',
        'skinTone',
        'preference',
        'maritalStatus',
    ];
}
