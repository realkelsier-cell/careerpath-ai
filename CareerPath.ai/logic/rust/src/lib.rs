use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn match_score(user_skills: &str, req_skills: &str) -> f32 {
    let user: Vec<&str> = user_skills.split(',').collect();
    let req: Vec<&str> = req_skills.split(',').collect();
    let matches = user.iter().filter(|s| req.contains(s)).count();
    (matches as f32 / req.len() as f32) * 100.0
}
