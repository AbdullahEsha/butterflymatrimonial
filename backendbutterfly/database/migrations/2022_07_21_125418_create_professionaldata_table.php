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
            $table->text('designation');
            $table->text('organizationName');
            $table->text('com_department');
            $table->text('com_location');
            $table->text('from_employment');
            $table->text('to_employment');
            $table->text('com_reference');
            $table->integer('cvdata_id');
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
