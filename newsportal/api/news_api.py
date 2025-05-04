# import requests

# API_KEY = 'pub_750981d4fb4ba5fd1df22740a52b0d4c6ef49'

# def fetch_news_data():
#     url = f"https://newsdata.io/api/1/news?apikey={API_KEY}&country=np&language=en"
#     try:
#         response = requests.get(url)
#         response.raise_for_status()
#         return response.json().get('results', [])
#     except requests.exceptions.RequestException as e:
#         print(f"Error fetching data from API: {e}")
#         return []


import requests

API_KEY = 'pub_750981d4fb4ba5fd1df22740a52b0d4c6ef49'

def fetch_news_data():
    url = f"https://newsdata.io/api/1/news?apikey={API_KEY}&country=np&language=en"
    try:
        response = requests.get(url)
        response.raise_for_status()
        return response.json().get('results', [])
    except requests.exceptions.RequestException as e:
        print(f"Error fetching data from API: {e}")
        return []

def display_news(news_list):
    if not news_list:
        print("No news available.")
        return

    print("\n" + "=" * 60)
    print(" Latest News")
    print("=" * 60 + "\n")
    
    for index, news in enumerate(news_list, start=1):
        title = news.get('title', 'No Title Available')
        summary = news.get('description', 'No Summary Available')
        image_url = news.get('image_url', 'No Image Available')
        
        print(f"News #{index}")
        print(f"Title: {title}")
        print(f"Summary:\n{summary}")
        print(f"Image URL:\n{image_url}")
        print("-" * 60)

def main():
    news_data = fetch_news_data()
    display_news(news_data)

if __name__ == "__main__":
    main()