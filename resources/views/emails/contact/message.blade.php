<x-mail::message>
# New Contact Message Received

You have received a new contact message from **{{ $contactMessage->name }}**.

**Name:** {{ $contactMessage->name }}  
**Email:** {{ $contactMessage->email }}  
**Subject:** {{ $contactMessage->subject }}  

**Message:**
<x-mail::panel>
{{ $contactMessage->message }}
</x-mail::panel>

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
