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
            $cvStore->name = $req->name;
            $cvStore->gender = $req->gender;
            $cvStore->phone = $req->phone;
            $cvStore->religion = $req->religion;
            $cvStore->email = $req->email;
            $cvStore->presentAddress = $req->presentAddress;
            $cvStore->divisionPresent = $req->divisionPresent;
            $cvStore->dristrictPresent = $req->dristrictPresent;
            $cvStore->parmanentAddress = $req->parmanentAddress;
            $cvStore->divisionParmanent = $req->divisionParmanent;
            $cvStore->dristrictParmanent = $req->dristrictParmanent;
            $cvStore->age = $req->age;
            $cvStore->specialCase = $req->specialCase;
            $cvStore->spousePreference = $req->spousePreference;
            $cvStore->about = $req->about;
            $cvStore->height = $req->height;
            $cvStore->weight = $req->weight;
            $cvStore->bloodGroup = $req->bloodGroup;
            $cvStore->grownUpAt = $req->grownUpAt;
            $cvStore->specialCondition = $req->specialCondition;
            $cvStore->fatherName = $req->fatherName;
            $cvStore->fatherOcupation = $req->fatherOcupation;
            $cvStore->motherName = $req->motherName;
            $cvStore->motherOcupation = $req->motherOcupation;
            $cvStore->profession = $req->profession;
            $cvStore->districtPreference = $req->districtPreference;
            $cvStore->religionPreference = $req->religionPreference;
            $cvStore->physicalStatus = $req->physicalStatus;
            $cvStore->ageMinimum = $req->ageMinimum;
            $cvStore->ageMaximum = $req->ageMaximum;
            $cvStore->heightMinimum = $req->heightMinimum;
            $cvStore->heightMaximum = $req->heightMaximum;
            $cvStore->skinTone = $req->skinTone;
            $cvStore->preference = $req->preference;
            $cvStore->maritalStatus = 'Unmarried';

            $rename =
                time() .
                '.' .
                $req->file('image')->getClientOriginalExtension();
            $cvStore->image = 'uploads/images/' . $rename;

            $cvStore->save();
            $req->file('image')->move('uploads/images', $rename);

            return response()->json([
                'message' => 'Your CV has just been stored.',
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage(),
                $req->file('image'),
            ]);
        }
    }

    public function cvDestroyById($id)
    {
        try {
            $CvDataDelete = CvData::find($id);
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
            $cvData = CvData::where('id', $id)->first();
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

    public function getMaxId()
    {
        try {
            $maxid = CvData::max('id');
            return $maxid;
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage(),
            ]);
        }
    }
}
