<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\SiblingData;
use Illuminate\Http\Request;

class siblingdataController extends Controller
{
    public function getDataByCvId($id)
    {
        try {
            $siblingData = SiblingData::where('cvdata_id', $id)->get();
            return $siblingData;
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage(),
            ]);
        }
    }

    public function store(Request $req)
    {
        $siblingDataStore = new SiblingData();
        try {
            $siblingDataStore->name = $req->name;
            $siblingDataStore->ocupation = $req->ocupation;
            $siblingDataStore->details = $req->details;
            $siblingDataStore->cvdata_id = $req->cvdata_id;

            $siblingDataStore->save();

            return response()->json([
                'message' => 'Your sibling data has just been stored.',
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage(),
            ]);
        }
    }
}
