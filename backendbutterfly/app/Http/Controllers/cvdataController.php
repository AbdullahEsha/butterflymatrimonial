<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\CvData;
use Illuminate\Http\Request;

class cvdataController extends Controller
{
    public function getData()
    {
        try {
            $cvData = CvData::orderBy('id', 'desc')->get();
            return $cvData;
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage(),
            ]);
        }
    }

    public function store(Request $req)
    {
        $cvStore = new CvData();
        try {
            $cvStore->u_id = $req->u_id;
            $cvStore->name = $req->name;
            $cvStore->gender = $req->gender;
            $cvStore->phone = $req->phone;
            $cvStore->email = $req->email;
            $cvStore->dob = $req->dob;
            $cvStore->height = $req->height;
            $cvStore->weight = $req->weight;
            $cvStore->bloodGroup = $req->bloodGroup;
            $cvStore->religion = $req->religion;
            $cvStore->complexion = $req->complexion;
            $cvStore->maritalStatus = $req->maritalStatus;
            $cvStore->hometown = $req->hometown;
            $cvStore->presentAddress = $req->presentAddress;
            $cvStore->grownUpAt = $req->grownUpAt;
            $cvStore->citizenship = $req->citizenship;
            $cvStore->familyStatus = $req->familyStatus;
            $cvStore->annualIncome = $req->annualIncome;
            $cvStore->hobby = $req->hobby;
            $cvStore->physicalStatus = $req->physicalStatus;
            $cvStore->specialCase = $req->specialCase;
            $cvStore->about = $req->about;
            $cvStore->fatherName = $req->fatherName;
            $cvStore->fatherOccupation = $req->fatherOccupation;
            $cvStore->fatherDetails = $req->fatherDetails;
            $cvStore->motherName = $req->motherName;
            $cvStore->motherOccupation = $req->motherOccupation;
            $cvStore->motherDetails = $req->motherDetails;
            $cvStore->brother = $req->brother;
            $cvStore->sister = $req->sister;
            $cvStore->ageMinimum = $req->ageMinimum;
            $cvStore->ageMaximum = $req->ageMaximum;
            $cvStore->heightMinimum = $req->heightMinimum;
            $cvStore->heightMaximum = $req->heightMaximum;
            $cvStore->maritalStatusPreference = $req->maritalStatusPreference;
            $cvStore->complexionPreference = $req->complexionPreference;
            $cvStore->occupationPreference = $req->occupationPreference;
            $cvStore->educationPreference = $req->educationPreference;
            $cvStore->location = $req->location;
            $cvStore->religionPreference = $req->religionPreference;
            $cvStore->preferenceDetails = $req->preferenceDetails;

            $rename = $req->file('image')->getClientOriginalName();
            $cvStore->image = 'uploads/images/' . $rename;

            $cvStore->save();
            $req->file('image')->move('uploads/images', $rename);

            return response()->json([
                'message' => 'Your CV has just been stored.',
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage(),
            ]);
        }
    }

    public function cvDestroyById($id)
    {
        try {
            $CvDataDelete = CvData::where('u_id', $id)->first();
            $CvDataDelete->delete();
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage(),
            ]);
        }
    }

    public function getCvById($id)
    {
        try {
            $cvData = CvData::where('u_id', $id)->first();
            return $cvData;
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage(),
            ]);
        }
    }

    public function updateCvToMarried($id)
    {
        $cvUpdateToMarried = CvData::find($id);
        try {
            $cvUpdateToMarried->maritalStatus = 'Married';

            $cvUpdateToMarried->update();

            return response()->json([
                'message' => 'Marital Status has just been updated to Married.',
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage(),
            ]);
        }
    }
}
