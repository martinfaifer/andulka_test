<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Product;
use App\Models\Storage;
use App\Models\StorageProduct;
use App\Models\Supplier;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        $productsWithAvailability = [];
        $products = Product::with(['supplier', 'storage'])->get();
        foreach($products as $product) {
            $productsWithAvailability[] = [
                'id' => $product['id'],
                'name' => $product['name'],
                'cost' => $product['cost'],
                'supplier' => $product['supplier']['name'],
                'storage' => $product['storage']['address'],
                'availibility' => StorageProduct::where('storage_id', $product['storage_id'])->where('product_id', $product['id'])->first()->is_available == true ? "dostupné" : "nedostupné",
                $product['supplier'],
                $product['storage'],
            ];
        }

        return Inertia::render('Dashboard', [
            'products' => $productsWithAvailability,
            'storages' => Storage::with('supplier')->get(),
            'suppliers' => Supplier::get()
        ]);
    }
}
