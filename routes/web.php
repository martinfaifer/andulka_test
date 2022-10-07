<?php

use App\Http\Controllers\DashboardController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\StorageController;
use App\Http\Controllers\SupplierController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', [DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');
Route::prefix('products')->group(function() {
    Route::get('create', [ProductController::class, 'create'])->name('products.create');;
    Route::post('', [ProductController::class, 'store'])->name('products.store');;
});

Route::prefix('storages')->group(function() {
    Route::get('{storage}',[StorageController::class, 'show'])->name('storages.show');
    Route::get('create', [StorageController::class, 'create'])->name('storages.create');
    Route::post('', [StorageController::class, 'store'])->name('storages.store');
});

Route::prefix('suppliers')->group(function() {
    Route::get('create', [SupplierController::class, 'create'])->name('suppliers.create');
    Route::post('', [SupplierController::class, 'store'])->name('suppliers.store');
});

require __DIR__.'/auth.php';
