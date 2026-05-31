<?php

use App\Http\Controllers\ContactMessageController;
use Illuminate\Support\Facades\Route;

// Public pages
Route::inertia('/', 'welcome')->name('home');
Route::inertia('/about', 'About')->name('about');
Route::inertia('/fruits', 'Fruits')->name('fruits');
Route::inertia('/farmhouse', 'Farmhouse')->name('farmhouse');
Route::inertia('/contact', 'Contact')->name('contact');
Route::post('/contact', [ContactMessageController::class, 'store'])->name('contact.store');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
    Route::get('dashboard/messages', [ContactMessageController::class, 'index'])->name('dashboard.messages');
});

require __DIR__.'/settings.php';
