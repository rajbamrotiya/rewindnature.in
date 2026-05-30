<?php

use Illuminate\Support\Facades\Route;

// Public pages
Route::inertia('/', 'welcome')->name('home');
Route::inertia('/about', 'About')->name('about');
Route::inertia('/fruits', 'Fruits')->name('fruits');
Route::inertia('/farmhouse', 'Farmhouse')->name('farmhouse');
Route::inertia('/contact', 'Contact')->name('contact');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';
