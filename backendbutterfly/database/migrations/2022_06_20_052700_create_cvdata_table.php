<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cvdata', function (Blueprint $table) {
            $table->id();
            $table->text('u_id');
            $table->text('image');
            $table->text('name');
            $table->text('gender');
            $table->text('phone');
            $table->text('email');
            $table->text('dob');
            $table->text('height');
            $table->integer('weight');
            $table->text('bloodGroup');
            $table->text('religion');
            $table->text('complexion');
            $table->text('maritalStatus');
            $table->text('hometown');
            $table->text('presentAddress');
            $table->text('grownUpAt');
            $table->text('citizenship');
            $table->text('familyStatus');
            $table->double('annualIncome');
            $table->text('hobby');
            $table->text('physicalStatus');
            $table->text('specialCase');
            $table->text('about');
            $table->text('fatherName');
            $table->text('fatherOccupation');
            $table->text('fatherDetails');
            $table->text('motherName');
            $table->text('motherOccupation');
            $table->text('motherDetails');
            $table->integer('brother');
            $table->integer('sister');
            $table->integer('ageMinimum');
            $table->integer('ageMaximum');
            $table->text('heightMinimum');
            $table->text('heightMaximum');
            $table->text('maritalStatusPreference');
            $table->text('complexionPreference');
            $table->text('occupationPreference');
            $table->text('educationPreference');
            $table->text('location');
            $table->text('religionPreference');
            $table->text('preferenceDetails');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cvdata');
    }
};
