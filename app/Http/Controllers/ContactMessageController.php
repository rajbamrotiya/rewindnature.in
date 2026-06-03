<?php

namespace App\Http\Controllers;

use App\Mail\ContactMessageMail;
use App\Models\ContactMessage;
use App\Services\WhatsAppNotificationService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use Inertia\Response;

class ContactMessageController extends Controller
{
    /**
     * Display a listing of the contact messages in the backend.
     */
    public function index(): Response
    {
        return Inertia::render('dashboard/messages', [
            'messages' => ContactMessage::latest()->get(),
        ]);
    }

    /**
     * Store a newly created contact message in the database.
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'subject' => 'required|string|max:255',
            'message' => 'required|string|max:10000',
        ]);

        $message = ContactMessage::create($validated);

        // WhatsAppNotificationService::send($message);

        Mail::to('rajbamrotiya@yahoo.com')->send(new ContactMessageMail($message));

        return back()->with('success', 'Thank you! Your message has been sent successfully.');
    }
}
