<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="Rewind Nature Farm in Gir, Gujarat. Experience pristine farmhouse retreats and premium organic Kesar mangoes and fresh fruits from our sun-kissed orchards.">
        <meta name="keywords" content="Rewind Nature Farm, Gir, Gujarat, Kesar Mangoes, Farmhouse Retreat, Organic Fruits, Nature Stay, Gir National Park, Desi Mango">
        <meta name="author" content="Rewind Nature Farm">

        <!-- Open Graph / Facebook Social Sharing Previews -->
        <meta property="og:type" content="website">
        <meta property="og:url" content="{{ url()->current() }}">
        <meta property="og:title" content="Rewind Nature Farm | Gir Forest Farmhouse & Organic Fruits">
        <meta property="og:description" content="Experience pristine farmhouse retreats and premium organic Kesar mangoes and fresh fruits from our sun-kissed orchards in Gir, Gujarat.">
        <meta property="og:image" content="{{ url('/Logo.png') }}">

        <!-- Twitter Card Sharing Previews -->
        <meta property="twitter:card" content="summary_large_image">
        <meta property="twitter:url" content="{{ url()->current() }}">
        <meta property="twitter:title" content="Rewind Nature Farm | Gir Forest Farmhouse & Organic Fruits">
        <meta property="twitter:description" content="Experience pristine farmhouse retreats and premium organic Kesar mangoes and fresh fruits from our sun-kissed orchards in Gir, Gujarat.">
        <meta property="twitter:image" content="{{ url('/Logo.png') }}">
        {{-- Inline script to detect system dark mode preference and apply it immediately --}}
        <script>
            (function() {
                const appearance = '{{ $appearance ?? "system" }}';

                if (appearance === 'system') {
                    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                    if (prefersDark) {
                        document.documentElement.classList.add('dark');
                    }
                }
            })();
        </script>

        {{-- Inline style to set the HTML background color based on our theme in app.css --}}
        <style>
            html {
                background-color: oklch(1 0 0);
            }

            html.dark {
                background-color: oklch(0.145 0 0);
            }
        </style>

        <link rel="icon" href="/Favicon.png" type="image/png">
        <link rel="apple-touch-icon" href="/Favicon.png">

        @fonts

        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
        <x-inertia::head>
            <title>{{ config('app.name') === 'Laravel' ? 'Rewind Nature Farm' : config('app.name', 'Rewind Nature Farm') }}</title>
        </x-inertia::head>
    </head>
    <body class="font-sans antialiased">
        <x-inertia::app />
    </body>
</html>
