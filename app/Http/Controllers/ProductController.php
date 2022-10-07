<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProductRequest;
use Inertia\Inertia;
use App\Models\Product;
use App\Models\Storage;
use App\Models\StorageProduct;
use App\Models\Supplier;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        //
    }

    public function create()
    {
        return Inertia::render('Product/Create', [
            'storages' => Storage::get(),
            'suppliers' => Supplier::get()
        ]);
    }

    public function store(StoreProductRequest $request)
    {
        try {
            $product = Product::create([
                'name' => $request->name,
                'cost' => $request->cost,
                'storage_id' => is_null($request->storage_id) ? Storage::first()->id : $request->storage_id,
                'supplier_id' => is_null($request->supplier_id) ? Supplier::first()->id : $request->supplier_id
            ]);

            StorageProduct::create([
                'product_id' => $product->id,
                'storage_id' => is_null($request->storage_id) ? Storage::first()->id : $request->storage_id,
                'is_available' => is_null($request->is_available) ? false : true
            ]);
        } catch (\Throwable $th) {
        }
        return Inertia::render('Dashboard', [
            'products' => Product::with(['supplier', 'storage'])->get(),
            'storages' => Storage::with('supplier')->get(),
            'suppliers' => Supplier::get()
        ]);
    }
}
