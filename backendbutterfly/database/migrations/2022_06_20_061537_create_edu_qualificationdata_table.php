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
        Schema::create('edu_qualificationdata', function (Blueprint $table) {
            $table->id();
            $table->text('levelOfEducation');
            $table->text('group');
            $table->text('instituteName');
            $table->text('passingYear');
            $table->text('u_id');
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
        Schema::dropIfExists('edu_qualificationdata');
    }
};
