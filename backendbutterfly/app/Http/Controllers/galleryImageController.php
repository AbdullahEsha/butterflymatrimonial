<?php

namespace App\Http\Controllers;
use App\Models\GalleryImage;
use Illuminate\Http\Request;

class galleryImageController extends Controller
{
    public function getGalleryImageByCvId($id)
    {
        try {
            $getGalleryImage = GalleryImage::where('cvdata_id', $id)->get();
            return $getGalleryImage;
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage(),
            ]);
        }
    }
    public function storeGalleryImage(Request $req)
    {
        $storeImage = new GalleryImage();
        try {
            $rename =
                time() .
                '.' .
                $req->file('imageFill')->getClientOriginalExtension();

            $storeImage->cvdata_id = $req->cvdata_id;
            $storeImage->imageFill = 'uploads/images/' . $rename;

            $storeImage->save();
            $req->file('imageFill')->move('uploads/images', $rename);

            return response()->json([
                'message' => 'Your gallery mage has just been stored.',
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage(),
            ]);
        }
    }
}
