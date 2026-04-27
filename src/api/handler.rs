pub async fn handle_request(req: Request) -> Response {
    // Reject requests that exceed the per-client rate limit
    if !rate_limiter::allow(&req.client_ip()) {
        return Response::too_many_requests();
    }
    process_sync(req).into()
}