<?php

namespace App\Services;

use App\Models\ContactMessage;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class WhatsAppNotificationService
{
    /**
     * Send a free WhatsApp notification to the owner using CallMeBot API.
     */
    public static function send(ContactMessage $message): void
    {
        $enabled = config('services.whatsapp.enabled', false);
        $phone = config('services.whatsapp.phone');
        $apiKey = config('services.whatsapp.api_key');

        if (! $enabled || empty($phone) || empty($apiKey)) {
            return;
        }

        try {
            $text = "*New Contact Message received!* 🌾\n\n"
                  .'*Name:* '.$message->name."\n"
                  .'*Email:* '.$message->email."\n"
                  .'*Subject:* '.$message->subject."\n\n"
                  ."*Message:* \n".$message->message;

            // CallMeBot Free WhatsApp API call
            Http::timeout(5)->get('https://api.callmebot.com/whatsapp.php', [
                'phone' => $phone,
                'text' => $text,
                'apikey' => $apiKey,
            ]);
        } catch (\Exception $e) {
            // Log issues so it doesn't break the user's submit cycle
            Log::error('WhatsApp notification failed: '.$e->getMessage());
        }
    }
}
