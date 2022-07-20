<?php

use App\Http\Controllers\cvdataController;
use App\Http\Controllers\edu_qualificationdataController;
use App\Http\Controllers\preferencedataController;
use App\Http\Controllers\siblingdataController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */

//============================== Cv data api start ============================================================//
Route::get('/get/all/cv', [CvdataController::class, 'getData']);
Route::post('/post/cv/new', [CvdataController::class, 'store']);
Route::get('/get/cv/{id}', [CvdataController::class, 'getCvById']);
Route::post('/update/cv/married/{id}', [CvdataController::class, 'updateCvToMarried']);
//
//
//============================== Education Qualification data api start ========================================//
Route::get('/get/education/qualification/{id}', [Edu_qualificationdataController::class, 'getDataByCvId']);
Route::post('/post/education/qualification', [Edu_qualificationdataController::class, 'store']);
//
//
//============================== Preference data api start ====================================================//
Route::get('/get/preference/{id}', [PreferencedataController::class, 'getDataByCvId']);
Route::post('/post/preference', [PreferencedataController::class, 'store']);
//
//
//============================== Sibling data api end =========================================================//
Route::get('/get/sibling/{id}', [SiblingdataController::class, 'getDataByCvId']);
Route::post('/post/sibling', [SiblingdataController::class, 'store']);