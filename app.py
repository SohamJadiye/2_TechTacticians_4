from flask import Flask, render_template,request
import os
import fitz  # PyMuPDF
import PyPDF2
import csv
from PIL import Image
import pytesseract
from transformers import pipeline

app = Flask(__name__)
def read_pdf(file_path):
    pdf_text = ""
    pdf_document = fitz.open(file_path)

    for page_number in range(pdf_document.page_count):
        page = pdf_document[page_number]
        pdf_text += page.get_text()

    pdf_document.close()
    return pdf_text

# Function to read CSV
def read_csv(file_path):
    csv_text = ""
    with open(file_path, newline='') as csvfile:
        csv_reader = csv.reader(csvfile)
        for row in csv_reader:
            csv_text += ', '.join(row) + '\n'
    return csv_text

# Function to read image using OCR
def read_image(file_path):
    image_text = pytesseract.image_to_string(Image.open(file_path))
    return image_text




@app.route('/')
def index():
    
    return render_template('index.html')



@app.route('/upload',methods = ['POST','GET'])
def upload():
    if request.method=='POST':
        uploaded_file = request.files['fileToUpload']
        if uploaded_file.filename != '':
            # Save the file to a designated location
            uploaded_file.save(' ' + uploaded_file.filename)
            for file_name, content in uploaded_file.items():
                with open(file_name, 'wb') as f:
                    f.write(content)

                if file_name.endswith(".pdf"):
                    text = read_pdf(file_name)
                elif file_name.endswith(".csv"):
                    text = read_csv(file_name)
                elif file_name.endswith((".png", ".jpg", ".jpeg")):
                    text = read_image(file_name)
                else:
                    text = "Unsupported file format."
                    
            model = pipeline(
            task = 'question-answering',
            model = 'bert-large-uncased-whole-word-masking-finetuned-squad'
            )
            
            question = request.form['quesupload']
            output = model(question = question, context =text )
            return render_template('final.html',displayed_text=output)
            
            
                
            
        
        else:
            return 'No file uploaded!'
    
    return 'Invalid request method!'
        
         
    
    
   

if __name__ == '__main__':
    app.run(debug=True)
