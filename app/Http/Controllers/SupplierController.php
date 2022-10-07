<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Product;
use App\Models\Storage;
use App\Models\Supplier;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreSupplierRequest;

class SupplierController extends Controller
{
    public function create()
    {
        return Inertia::render('Supplier/Create');
    }

    public function store(StoreSupplierRequest $request)
    {
        Supplier::create([
            'name' => $request->name,
            'address' => $request->address
        ]);

        return Inertia::render('Dashboard', [
            'products' => Product::with(['supplier', 'storage'])->get(),
            'storages' => Storage::with('supplier')->get(),
            'suppliers' => Supplier::get()
        ]);
    }
}
