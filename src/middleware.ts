import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith('/app/fr')) {
        console.log("rewriting /app/fr to /fr/app" )
        return NextResponse.rewrite(new URL(request.nextUrl.pathname.replace('/app/fr', '/fr/app'), request.url));
    }
}
