<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Edu_qualificationData;
use Illuminate\Http\Request;

class edu_qualificationdataController extends Controller
{
    public function getData()
    {
        try {
            $eduData = Edu_qualificationData::orderBy('id', 'desc')->get();
            return $eduData;
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage(),
            ]);
        }
    }

    public function getDataByCvId($id)
    {
        try {
            $edu_qualificationData = Edu_qualificationData::where(
                'u_id',
                $id
            )->get();
            return $edu_qualificationData;
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage(),
            ]);
        }
    }

    public function store(Request $req)
    {
        $edu_qualificationStore = new Edu_qualificationData();
        try {
            $edu_qualificationStore->levelOfEducation = $req->levelOfEducation;
            $edu_qualificationStore->group = $req->group;
            $edu_qualificationStore->instituteName = $req->instituteName;
            $edu_qualificationStore->passingYear = $req->passingYear;
            $edu_qualificationStore->u_id = $req->u_id;

            $edu_qualificationStore->save();

            return response()->json([
                'message' =>
                    'Your edu qualification data has just been stored.',
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage(),
            ]);
        }
    }
}
