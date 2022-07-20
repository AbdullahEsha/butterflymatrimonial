<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Edu_qualificationData;
use Illuminate\Http\Request;

class edu_qualificationdataController extends Controller
{
    public function getDataByCvId($id)
    {
        try {
            $edu_qualificationData = Edu_qualificationData::where(
                'cvdata_id',
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
            $edu_qualificationStore->instituteName = $req->instituteName;
            $edu_qualificationStore->passingYear = $req->passingYear;
            $edu_qualificationStore->cvdata_id = $req->cvdata_id;

            $edu_qualificationStore->save();

            return response()->json([
                'message' =>
                    'Education qualification data has just been stored.',
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage(),
            ]);
        }
    }
}
