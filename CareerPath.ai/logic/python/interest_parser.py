def parse(text):
    keywords = {"code": "Programming", "art": "Creativity"}
    return [keywords.get(w, w) for w in text.lower().split() if w in keywords]
