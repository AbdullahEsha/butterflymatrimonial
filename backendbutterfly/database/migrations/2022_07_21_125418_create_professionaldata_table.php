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
        Schema::create('professionaldata', function (Blueprint $table) {
            $table->id();
            $table->text('companyName');
            $table->text('designation');
            $table->text('com_location');
            $table->text('from_employment');
            $table->text('to_employment');
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
        Schema::dropIfExists('professionaldata');
    }
};
