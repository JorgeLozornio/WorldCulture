from flask import Flask, render_template, request, redirect, url_for, flash
from flask_mysqldb import MySQL
  
#El crud para productos ya conectado a la base de datos tiene que ser visible solamente para usuarios que administran en sistema


app = Flask(__name__)

#Conexion MySQL
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_DB'] = 'worldculture'
mysql = MySQL(app)

#Configuracion
app.secret_key = 'mysecretkey'

@app.route('/')
def Productos():
    cur = mysql.connection.cursor()
    cur.execute('SELECT * FROM productos')
    data = cur.fetchall()
    return render_template('productoss.html', productos = data)
    #return 'Hola familia de Worlculture, en estos momentos estamos teniendo problemas.  Vuelve pronto!!!'

@app.route('/add_productos', methods=['POST'])
def add_productos():
    if request.method == 'POST':
        codigo = request.form['Codigo']
        nombre = request.form['Nombre']
        descripcion = request.form['Descripcion']
        departamento = request.form['Departamento']
        seccion = request.form ['Seccion']
        preciocompra = request.form['PrecioCompra']
        precioventa = request.form['PrecioVenta']
        stock = request.form['Stock']
        imagen = request.form['Imagen']
        cur = mysql.connection.cursor()
        cur.execute('INSERT INTO productos (Codigo, Nombre, Descripcion, Departamento, Seccion, PrecioCompra, PrecioVenta, Stock, Imagen) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)',
        (codigo, nombre, descripcion, departamento, seccion, preciocompra, precioventa, stock, imagen))

        mysql.connection.commit()
        flash('Producto agregado de manera correcta')
        return redirect(url_for('Productos'))


@app.route('/edit_productos')
def edit_productos():
    return 'Editar productos'

@app.route('/Delete_productos')
def delete_productos():
    return 'Eliminar productos'

if __name__ == '__main__':
    app.run(port = 3000, debug = True)