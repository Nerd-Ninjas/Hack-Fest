from flask import Flask, request, jsonify
from flask_cors import CORS  
import google.generativeai as genai
import requests

app = Flask(__name__)
CORS(app)  

API_KEY = "AIzaSyDGw_PMvwBXacvyTHWF8JWBk_hL9DSP-vk"
YOUTUBE_API_KEY = "AIzaSyBmlz5MQ1UJ7V6Evc9xgq4RXor5i9aOw3g"
genai.configure(api_key=API_KEY)

generation_config = {
    "temperature": 1.5,
    "top_p": 0.9,
    "top_k": 40,
    "max_output_tokens": 2048,  
    "response_mime_type": "text/plain",
}

model = genai.GenerativeModel(
    model_name="gemini-1.5-flash",
    generation_config=generation_config,
)

def fetch_youtube_video(title):
    """Fetch a YouTube video based on the chapter title."""
    search_url = f"https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q={title}&key={YOUTUBE_API_KEY}"
    response = requests.get(search_url)
    data = response.json()

    try:
        if 'items' in data and len(data['items']) > 0:
            item = data['items'][0]
            video_id = item['id'].get('videoId', None)
            thumbnail_url = item['snippet']['thumbnails']['high']['url']
            video_url = f"https://www.youtube.com/watch?v={video_id}"
            return video_url, item['snippet']['title'], '5 minutes', thumbnail_url
    except KeyError:
        pass

    return None, None, None, None

@app.route('/generate_course', methods=['POST'])
def generate_course():
    """Generate a course using Gemini AI."""
    data = request.json  

    # Set default values if not provided
    category = data.get('category', 'General')
    topic = data.get('topic', 'AI & Machine Learning')
    level = data.get('level', 'Beginner')
    duration = data.get('duration', '2 hours')
    no_of_chapters = int(data.get('no_of_chapters', 5))

    prompt = (f"Generate a structured JSON course plan for Category: {category}, Topic: {topic}. "
              f"The course is designed for {level} learners and should last approximately {duration}. "
              f"Include {no_of_chapters} chapters with titles, descriptions, and key learning points.")

    # Get AI-generated course structure
    response = model.generate_content(prompt)
    ai_generated_course = response.text  

    # Generate chapters and fetch YouTube videos
    chapters = []
    for i in range(no_of_chapters):
        video_url, video_title, video_duration, thumbnail_url = fetch_youtube_video(f"{topic} Chapter {i + 1}")
        chapters.append({
            "title": f"{topic} Chapter {i + 1}",
            "description": f"An overview of {topic} - Chapter {i + 1}.",
            "video_url": video_url,
            "video_title": video_title,
            "video_duration": video_duration,
            "thumbnail_url": thumbnail_url,
            "text_content": "Detailed text content explaining the topic.",
            "quiz": "Sample quiz for this chapter.",
            "code_example": "Sample code snippet (if applicable).",
        })

    return jsonify({"course_outline": ai_generated_course, "chapters": chapters})

if __name__ == '__main__':
    app.run(debug=True, port=2000)