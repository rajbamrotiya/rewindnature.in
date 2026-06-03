<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

use App\Models\Visitor;
use Carbon\Carbon;

class TrackVisitor
{
    /**
     * Handle an incoming request.
     *
     * @param  Closure(Request): (Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        Visitor::firstOrCreate([
            'ip_address' => $request->ip(),
            'visited_date' => Carbon::today()->toDateString(),
        ], [
            'user_agent' => $request->userAgent()
        ]);

        return $next($request);
    }
}
