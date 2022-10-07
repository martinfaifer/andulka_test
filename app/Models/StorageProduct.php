<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class StorageProduct extends Model
{
    protected $fillable = [
        'storage_id', 'product_id', 'is_available'
    ];

    public function storage(): BelongsTo
    {
        return $this->belongsTo(Storage::class, 'storage_id', 'id');
    }

    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class, 'product_id', 'id');
    }

    protected $casts = [
        'is_available' => 'boolean',
    ];
}
