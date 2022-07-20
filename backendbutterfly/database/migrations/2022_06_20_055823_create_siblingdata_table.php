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
        Schema::create('siblingdata', function (Blueprint $table) {
            $table->id();
            $table->text('name');
            $table->text('spouseDetails');
            $table->text('ocupation');
            $table->text('details');
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
        Schema::dropIfExists('siblingdata');
    }
};