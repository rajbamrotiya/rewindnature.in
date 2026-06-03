<?php

use App\Http\Controllers\ContactMessageController;
use Illuminate\Support\Facades\Route;

// Public pages
Route::inertia('/', 'welcome')->name('home');
Route::inertia('/about', 'About')->name('about');
Route::inertia('/fruits', 'Fruits')->name('fruits');
Route::inertia('/farmhouse', 'Farmhouse')->name('farmhouse');
Route::inertia('/contact', 'Contact')->name('contact');
Route::inertia('/schedule', 'Schedule')->name('schedule');
Route::post('/contact', [ContactMessageController::class, 'store'])->name('contact.store');

Route::middleware(['auth', 'verified'])->prefix('admin')->group(function () {
    Route::get('dashboard', function () {
        return inertia('dashboard', [
            'todayVisitors' => \App\Models\Visitor::where('visited_date', \Carbon\Carbon::today()->toDateString())->count(),
        ]);
    })->name('dashboard');
    Route::get('dashboard/messages', [ContactMessageController::class, 'index'])->name('dashboard.messages');
});

Route::prefix('admin')->group(function () {
    Route::redirect('/', '/admin/dashboard');
    require __DIR__.'/settings.php';
});
