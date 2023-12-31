import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
    const { pathname } = request.nextUrl;
    const token = await getToken({ req: request });
    //console.log("******************************************")
    if (pathname == "/signin" || pathname == "/signup" || pathname == "/author/signin") {
        if (token) {
            return NextResponse.redirect(new URL("/?message=you already login", request.url));
        }
        return NextResponse.next();
    }

    //*protected routes for user
    const userProtectedRoutes = [];
    //*protected routes for author
    const authorProtectedRoutes = [];

    if (
        token === null &&
        (userProtectedRoutes.includes(pathname) ||
            authorProtectedRoutes.includes(pathname))
    ) {
        return NextResponse.redirect(
            new URL(
                "/signin?message=please login first to access private urls",
                request.url
            )
        );
    }

    //get user from token
    const user = token?.user;
    //user try access author routes
    if (authorProtectedRoutes.includes(pathname) && user?.role === "User") {
        return NextResponse.redirect(
            new URL(
                "/author/login?message=please login first to access private urls !"
            ),
            request.url
        );
    }

    //author try access user routes
    if (userProtectedRoutes.includes(pathname) && user?.role === "Author") {
        return NextResponse.redirect(
            new URL(
                "/signin?message=please login first to access private urls",
                request.url
            )
        );
    }
}

export const config = {
    matcher: ["/:path*"]
};
