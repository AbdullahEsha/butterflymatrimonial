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
            $professionaldata = ProfessionalData::where('u_id', $id)->get();
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
            $professionaldataStore->companyName = $req->companyName;
            $professionaldataStore->designation = $req->designation;
            $professionaldataStore->com_location = $req->com_location;
            $professionaldataStore->from_employment = $req->from_employment;
            $professionaldataStore->to_employment = $req->to_employment;
            $professionaldataStore->u_id = $req->u_id;

            $professionaldataStore->save();

            return response()->json([
                'message' => 'Your professional data has just been stored.',
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage(),
            ]);
        }
    }
}
