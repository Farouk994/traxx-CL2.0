// get executed before any request
import { NextResponse } from 'next/server';

// create list of pages to protect
const signedInPages = ['/', '/playlist', '/library'];

// its in webworker environment, no access to window, part of an edge function
// export default function middleware(req: any) {
//   if (signedInPages.find((p) => p === req.nextUrl)) {
//     const token = req.cookies.TRAX_ACCESS_TOKEN;
//     if (!token) {
//       return NextResponse.redirect('/signin');
//     }
//   }
// }

export function middleware(req) {
  const { pathname, origin } = req.nextUrl;

  if (signedInPages.find((p) => p === req.nextUrl.pathname)) {
    const token = req.cookies.TRAX_ACCESS_TOKEN;
    if (!token) {
      return NextResponse.rewrite(`${origin}/signin`);
    }
  }
}
