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
            $table->text('image');
            $table->text('name');
            $table->text('gender');
            $table->text('phone');
            $table->text('religion');
            $table->text('email');
            $table->text('presentAddress');
            $table->text('divisionPresent');
            $table->text('dristrictPresent');
            $table->text('parmanentAddress');
            $table->text('divisionParmanent');
            $table->text('dristrictParmanent');
            $table->text('age');
            $table->text('specialCase');
            $table->text('spousePreference');
            $table->text('about');
            $table->text('height');
            $table->integer('weight');
            $table->text('bloodGroup');
            $table->text('grownUpAt');
            $table->text('specialCondition');
            $table->text('fatherName');
            $table->text('fatherOcupation');
            $table->text('motherName');
            $table->text('motherOcupation');
            $table->text('maritalStatus');
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
