from fastapi import FastAPI
import gradio as gr

app = FastAPI()

def predict_price(area, bedrooms, bathrooms):
    price = (area * 5000) + (bedrooms * 500000) + (bathrooms * 300000)
    return f"Estimated house price: ₹{price:,.2f}"

with gr.Blocks() as demo:
    gr.Markdown("# 🏠 House Price Predictor")
    
    area = gr.Number(label="Area (sq ft)")
    bedrooms = gr.Number(label="Bedrooms")
    bathrooms = gr.Number(label="Bathrooms")
    
    output = gr.Textbox(label="Result")

    btn = gr.Button("Predict")
    btn.click(predict_price, inputs=[area, bedrooms, bathrooms], outputs=output)

@app.get("/")
def home():
    return {"message": "House Price App Running!"}

@app.get("/gradio")
def gradio_app():
    return demo.launch(share=False, inline=True)
