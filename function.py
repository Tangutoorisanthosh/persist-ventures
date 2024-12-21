import openai

openai.api_key = 'your-openai-api-key'

def generate_tweet():
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt="Generate a tweet about AI in technology:",
        max_tokens=50
    )
    return response.choices[0].text.strip()

print(generate_tweet())