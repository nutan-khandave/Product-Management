<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class CategoryController extends Controller
{
    // Get all categories
    public function index()
    {
        return Category::all();
    }


    // Add category
    public function store(Request $request)
    {
        // Validation
        $validated = $request->validate([
            'name' => [
                'required',
                'string',
                'min:2',
                'max:255',
                'unique:categories,name'
            ],

            'description' => [
                'required',
                'string',
                'min:3',
                'max:1000'
            ]
        ]);


        // Create category
        $category = Category::create([
            'name' => $validated['name'],
            'description' => $validated['description']
        ]);


        return response()->json($category, 201);
    }


    // Get one category
    public function show(Category $category)
    {
        return response()->json($category);
    }


    // Update category
    public function update(Request $request, Category $category)
    {
        // Validation
        $validated = $request->validate([
            'name' => [
                'required',
                'string',
                'min:2',
                'max:255',

                Rule::unique('categories', 'name')
                    ->ignore($category->id)
            ],

            'description' => [
                'required',
                'string',
                'min:3',
                'max:1000'
            ]
        ]);


        // Update category
        $category->update([
            'name' => $validated['name'],
            'description' => $validated['description']
        ]);


        return response()->json($category);
    }


    // Delete category
public function destroy(Category $category)
{
    // Check if products are using this category
    if ($category->products()->exists()) {

        return response()->json([
            'message' =>
                'Cannot delete category because it has products.'
        ], 422);
    }


    // Delete category
    $category->delete();


    return response()->json([
        'message' => 'Category deleted successfully'
    ]);
}
}