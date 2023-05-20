from flask import Flask, request, jsonify, Response, url_for
from flask_cors import CORS, cross_origin
# pip3 install mysql-connector-python
import mysql.connector
from mysql.connector import Error

app = Flask(__name__)
CORS(app)
# Configurações do banco de dados
DATABASE_URI =  {
    'host': 'localhost',
    'user': 'root',
    'password': 'Senha123',
    'database': 'db_ac4'
}

@app.route('/')
def index():
    response = jsonify("Home")
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@app.route('/about', methods=['GET'])
def about():
    data: str = """
    Great heroes and diabolical villains are the types of characters that people aspire to be - but not Cid Kagenou. 
    He wishes to become the true mastermind behind everything, pulling the strings and making his machinations drive the entire story. 
    In his previous life in modern Japan, he failed to achieve his goals. But now, reborn in a world of magic, he will show the true eminence of the shadow! 
    As Cid pretends to be just another ordinary character in the mafia, he recruits members for his Shadow Garden organization, with the goal of taking 
    down the mysterious cult lurking in the shadows. With many improvisations, Cid leads his organization against the vile Diabolos Cult.
    """

    response = jsonify(data)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@app.route('/news/<int:id>', methods=['GET'])
def get_news(id):
    response = jsonify(f"Não tem implementação, id: {id}")
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@app.route('/news', methods=['GET'])
def news():
    try:
        connection = mysql.connector.connect(**DATABASE_URI)
        cursor = connection.cursor()

        query = "SELECT * FROM news ORDER BY titulo"
        cursor.execute(query)
        news = cursor.fetchall()

        news_json = {
            "principais": [],
            "recentes": []
        }
        for news_item in news:
            if news_item[3] == 0:
                news_json["principais"].append({
                    'id': news_item[0],
                    'titulo': news_item[1],
                    'imagem': news_item[2],
                    'tipo': news_item[3]
                })
            if news_item[3] == 1:
                news_json["recentes"].append({
                    'id': news_item[0],
                    'titulo': news_item[1],
                    'imagem': news_item[2],
                    'tipo': news_item[3]
                })

        cursor.close()
        connection.close()

        response = jsonify(news_json)
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response

    except Error as e:
        return jsonify({'error': str(e)}), 500

@app.route('/news', methods=['POST'])
@cross_origin()
def add_news():
    titulo = request.json.get('titulo')
    imagem = request.json.get('imagem')
    tipo = request.json.get('tipo')

    try:
        connection = mysql.connector.connect(**DATABASE_URI)
        cursor = connection.cursor()

        query = "INSERT INTO news (titulo, imagem, tipo) VALUES (%s, %s, %s)"
        values = (titulo, imagem, tipo)
        cursor.execute(query, values)
        connection.commit()

        cursor.close()
        connection.close()

        response = jsonify(None)
        response.status_code = 201
        response.headers['Location'] = url_for('get_news', id=0)
        response.headers['Content-Type'] = 'application/json'
        return response

    except Error as e:
        return jsonify({'error': str(e)}), 500


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)