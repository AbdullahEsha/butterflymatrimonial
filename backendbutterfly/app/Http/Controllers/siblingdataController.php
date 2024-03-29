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
            $siblingData = SiblingData::where('u_id', $id)->get();
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
            $siblingDataStore->occupation = $req->occupation;
            $siblingDataStore->details = $req->details;
            $siblingDataStore->u_id = $req->u_id;

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
