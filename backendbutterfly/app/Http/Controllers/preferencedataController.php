<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\PreferenceData;
use Illuminate\Http\Request;

class preferencedataController extends Controller
{
    public function getDataByCvId($id)
    {
        try {
            $preferenceData = PreferenceData::where('cvdata_id', $id)->get();
            return $preferenceData;
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage(),
            ]);
        }
    }

    public function store(Request $req)
    {
        $preferenceDataStore = new PreferenceData();
        try {
            $preferenceDataStore->preference = $req->preference;
            $preferenceDataStore->cvdata_id = $req->cvdata_id;

            $preferenceDataStore->save();

            return response()->json([
                'message' => 'Preference submited.',
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage(),
            ]);
        }
    }
}
