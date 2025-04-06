from flask import Flask, request, jsonify
from flask_cors import CORS
from langchain_groq import ChatGroq

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend access

# Initialize Groq LLM
llm = ChatGroq(
    temperature=0,
    groq_api_key="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",
    model_name="llama-3.3-70b-versatile"
)

@app.route("/chat", methods=["POST"])
def chat():
    user_input = request.json.get("message")
    if not user_input:
        return jsonify({"error": "No message provided"}), 400
    
    try:
        response = llm.invoke(user_input)
        return jsonify({"response": response.content})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

#if __name__ == "__main__":
 #   app.run(debug=True)
