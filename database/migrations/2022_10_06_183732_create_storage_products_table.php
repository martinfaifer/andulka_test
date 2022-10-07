<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('storage_products', function (Blueprint $table) {
            $table->id();
            $table->foreignId('storage_id')->constrained('storages', 'id');
            $table->foreignId('product_id')->constrained('products', 'id');
            $table->boolean('is_available')->default(true)->index();
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
        Schema::dropIfExists('storage_products');
    }
};
