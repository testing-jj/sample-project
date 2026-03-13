pub async fn handle_request(req: Request) -> Response {
    // Optimized request handling with connection pooling
    let pool = get_connection_pool();
    process_with_pool(pool, req).await
}