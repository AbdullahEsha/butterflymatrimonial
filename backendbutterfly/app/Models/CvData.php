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
        'u_id',
        'name',
        'gender',
        'phone',
        'email',
        'dob',
        'height',
        'weight',
        'bloodGroup',
        'religion',
        'complexion',
        'maritalStatus',
        'hometown',
        'presentAddress',
        'grownUpAt',
        'citizenship',
        'familyStatus',
        'annualIncome',
        'hobby',
        'physicalStatus',
        'specialCase',
        'about',
        'fatherName',
        'fatherOccupation',
        'fatherDetails',
        'motherName',
        'motherOccupation',
        'motherDetails',
        'brother',
        'sister',
        'ageMinimum',
        'ageMaximum',
        'heightMinimum',
        'heightMaximum',
        'maritalStatusPreference',
        'complexionPreference',
        'occupationPreference',
        'educationPreference',
        'location',
        'religionPreference',
        'preferenceDetails',
    ];
}
