<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    // Get all products
    public function index()
    {
        return Product::with('category')->get();
    }


    // Create product
    public function store(Request $request)
    {
        // Validation
        $validated = $request->validate([
            'name' => [
                'required',
                'string',
                'max:255'
            ],

            'description' => [
                'required',
                'string',
                'min:3'
            ],

            'price' => [
                'required',
                'numeric',
                'min:0.01'
            ],

            'category_id' => [
                'required',
                'exists:categories,id'
            ],

            'image' => [
                'required',
                'image',
                'mimes:jpg,jpeg,png,webp',
                'max:2048'
            ]
        ]);


        $imageName = null;


        // Upload image
        if ($request->hasFile('image')) {

            $imageName = time() . '.' .
                $request->image->extension();

            $request->image->move(
                public_path('images'),
                $imageName
            );
        }


        // Create product
        $product = Product::create([
            'name' => $validated['name'],
            'description' => $validated['description'],
            'price' => $validated['price'],
            'category_id' => $validated['category_id'],
            'image' => $imageName
        ]);


        return response()->json($product, 201);
    }


    // Get one product
    public function show(Product $product)
    {
        return Product::with('category')
            ->findOrFail($product->id);
    }


    // Update product
    public function update(Request $request, Product $product)
    {
        // Validation
        $validated = $request->validate([
            'name' => [
                'required',
                'string',
                'max:255'
            ],

            'description' => [
                'required',
                'string',
                'min:3'
            ],

            'price' => [
                'required',
                'numeric',
                'min:0.01'
            ],

            'category_id' => [
                'required',
                'exists:categories,id'
            ],

            // Image is optional while updating
            'image' => [
                'nullable',
                'image',
                'mimes:jpg,jpeg,png,webp',
                'max:2048'
            ]
        ]);


        // Upload new image if selected
        if ($request->hasFile('image')) {

            $imageName = time() . '.' .
                $request->image->extension();

            $request->image->move(
                public_path('images'),
                $imageName
            );

            $product->image = $imageName;
        }


        // Update product details
        $product->name = $validated['name'];
        $product->description = $validated['description'];
        $product->price = $validated['price'];
        $product->category_id = $validated['category_id'];

        $product->save();


        return response()->json($product);
    }


    // Delete product
    public function destroy(Product $product)
    {
        $product->delete();

        return response()->json([
            'message' => 'Product deleted successfully'
        ]);
    }
}