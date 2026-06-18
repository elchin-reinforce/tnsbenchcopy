export const config = { matcher: "/((?!favicon.ico).*)" }

export default function middleware(request) {
  const auth = request.headers.get("authorization")
  const user = process.env.BASIC_AUTH_USER
  const password = process.env.BASIC_AUTH_PASSWORD

  // If credentials aren't configured, don't lock anyone out.
  if (!user || !password) return

  const expected = "Basic " + btoa(`${user}:${password}`)
  if (auth !== expected) {
    return new Response("Authentication required.", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="TnSBench demo", charset="UTF-8"' },
    })
  }
}
