#[cfg(test)]
mod tests {
    use super::*;
    
    #[test]
    fn test_handle_request_with_valid_input() {
        let req = Request::new("TEST");
        let res = handle_request(req);
        assert!(res.is_ok());
    }


    
    #[test]
    fn test_edge_case_empty_input() {
        let req = Request::new("");
        let res = handle_request(req);
        assert!(res.is_err());
    }
}