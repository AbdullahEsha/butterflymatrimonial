<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\ProfessionalData;
use Illuminate\Http\Request;

class professionaldataController extends Controller
{
    public function getData()
    {
        try {
            $profData = ProfessionalData::orderBy('id', 'desc')->get();
            return $profData;
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage(),
            ]);
        }
    }

    public function getDataByCvId($id)
    {
        try {
            $professionaldata = ProfessionalData::where(
                'cvdata_id',
                $id
            )->get();
            return $professionaldata;
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage(),
            ]);
        }
    }

    public function store(Request $req)
    {
        $professionaldataStore = new ProfessionalData();
        try {
            $professionaldataStore->designation = $req->designation;
            $professionaldataStore->organizationName = $req->organizationName;
            $professionaldataStore->com_department = $req->com_department;
            $professionaldataStore->com_location = $req->com_location;
            $professionaldataStore->from_employment = $req->from_employment;
            $professionaldataStore->to_employment = $req->to_employment;
            $professionaldataStore->com_reference = $req->com_reference;
            $professionaldataStore->cvdata_id = $req->cvdata_id;

            $professionaldataStore->save();

            return response()->json([
                'message' => 'Your data has just been stored.',
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage(),
            ]);
        }
    }
}
