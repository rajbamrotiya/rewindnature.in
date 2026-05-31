<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Rajesh',
            'email' => 'rajbamrotiya@yahoo.com',
            'password' => 'R@j@h!r1993',
        ]);

        $this->call(ContactMessageSeeder::class);
    }
}
