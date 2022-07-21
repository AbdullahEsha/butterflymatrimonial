<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use Illuminate\Http\Request;

class contactController extends Controller
{
    public function getData()
    {
        try {
            $contactData = Contact::orderBy('id', 'desc')->get();
            return $contactData;
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage(),
            ]);
        }
    }

    public function storeContact(Request $req)
    {
        $contact = new Contact();
        try {
            $contact->name = $req->name;
            $contact->email = $req->email;
            $contact->question = $req->question;

            $contact->save();

            return response()->json([
                'message' => 'Message sent.',
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage(),
            ]);
        }
    }
}
