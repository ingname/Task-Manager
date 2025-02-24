from flask import Flask, jsonify
# , request, render_template, send_from_directory, session
import psycopg2
# import base64


app = Flask(__name__)


def get_db_connection():
    conn = psycopg2.connect(
        host="localhost",
        database="task-manager",
        user="postgres",
        password="7393"
    )
    return conn


@app.route('/api/users', methods=['GET'])
def get_users():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("""
                SELECT id, login, password
                FROM users
            """)
    orders = cursor.fetchall()
    return jsonify(orders[0])


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
