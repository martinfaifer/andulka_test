<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Product;
use App\Models\Storage;
use App\Models\Supplier;
use Illuminate\Http\Request;
use App\Http\Requests\StoreStorageRequest;
use App\Http\Controllers\DashboardController;

class StorageController extends Controller
{
    public function create()
    {
        return Inertia::render('Storage/Create', [
            'suppliers' => Supplier::get()
        ]);
    }

    public function store(StoreStorageRequest $request)
    {
        Storage::create([
            'supplier_id' => is_null($request->supplier_id) ? Supplier::first()->id : $request->supplier_id,
            'address' => $request->address
        ]);

        return (new DashboardController())->index();
    }

    public function show(Storage $storage)
    {
        return $storage;
    }
}
