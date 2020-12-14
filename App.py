from flask import flash, Flask,render_template,request,abort,redirect,url_for
from flask_login import UserMixin,LoginManager, current_user, login_user, logout_user, login_required
# from Modelos.models import db, Usuario
from flask_mysqldb import MySQL
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
  
#El crud para productos ya conectado a la base de datos tiene que ser visible solamente para usuarios que administran en sistema


app = Flask(__name__)

#Conexión con sqlalchemy
# app.config['SQLALCHEMY_DATABASE_URI']='mysql+pymysql://root:pgcontrol@localhost/worldculture'
# app.config['SQLALCHEMY_COMMIT_ON_TEARDOWN'] = True
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False

# db = SQLAlchemy()
# ma = Marshmallow(app)

# login_manager = LoginManager()
# login_manager.init_app(app)



#Conexion MySQL
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'pgcontrol'
app.config['MYSQL_DB'] = 'worldculture'
mysql = MySQL(app)

#Configuracion
app.secret_key = 'mysecretkey'

#Login
# @login_manager.user_loader
# def load_user(id):
#     return Usuario.query.get(int(id))

# @app.route('/login',methods=['POST'])
# def login():
#     #return 'Procesando las credenciales.'
#     u=Usuario()
#     usuario=u.validar(request.form['email'],request.form['contrasena'])
#     if usuario!=None:
#         login_user(usuario)
#         return render_template('login.html')
#     else:
#         return 'Usuario invalido'

@app.route('/home')
@login_required
def home():
    return 'The current user'

#Usuarios
# class Usuario(UserMixin, db.Model):
#     __tablename__='Usuarioss'
#     idUsuario=db.Column(db.Integer,primary_key=True)
#     nombre=db.Column(db.String(50),nullable=False)
#     apellido=db.Column(db.String(50),nullable=False)
#     email =db.Column(db.String(50),nullable=False)
#     telefono = db.Column(db.String(10), nullable=False)
#     contrasena = db.Column(db.String(128), nullable=False)
#     tipo = db.Column(db.String(1), nullable=False)
#     estatus = db.Column(db.String(1), nullable=False)

#     def __init__(self, nombre, apellido, email, telefono, contrasena, tipo, estatus):
#         self.nombre = nombre
#         self.apellido = apellido
#         self.email = email
#         self.telefono = telefono
#         self.contrasena = contrasena
#         self.tipo = tipo
#         self.estatus = estatus

# class UsuarioSchema(ma.Schema):
#     class Meta:
#         fields = ('idUsuario', 'nombre', 'apellido', 'email', 'telefono', 'contrasena', 'tipo', 'estado')

# usuario_schema = UsuarioSchema()

@app.route('/crearUsuario', methods=['POST'])
def crearUsuario():
    if request.method == 'POST':
        idusuario = request.json['idusuario']
        nombre = request.json['nombre']
        apellido = request.json['apellido']
        email = request.json['email']
        telefono = request.json ['telefono']
        contrasena = request.json['contrasena']
        tipo = request.json['tipo']
        estado = request.json['estado']
        cur = mysql.connection.cursor()
        cur.execute('INSERT INTO usuarios (idusuario, nombre, apellido, email, telefono, contrasena, tipo, estado) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)',
        (idusuario, nombre, apellido, email, telefono, contrasena, tipo, estado))

        mysql.connection.commit()
        flash('Usuario Creado')
        return redirect(url_for('crearUsuario'))

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


@app.route('/Edit_productos/<Codigo>')
def get_productos(Codigo):
    cur = mysql.connection.cursor()
    cur.execute('SELECT * FROM productos WHERE Codigo = %s', (Codigo))
    data = cur.fetchall()
    return render_template('EditarProductos.html', productos = data[0] )

@app.route('/update/<Codigo>', methods=['POST'])
def update_contact(Codigo):
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
        cur.execute("""
            UPDATE productos
            SET 
                Nombre = %s,
                Descripcion= %s,
                Departamento = %s,
                Seccion = %s,
                PrecioCompra = %s,
                PrecioVenta = %s,
                Stock = %s,
                Imagen = %s
            WHERE Codigo = %s
        """, (codigo, nombre, descripcion, departamento, seccion, preciocompra, precioventa, stock, imagen))
        flash('Producto editado de manera correcta')
        mysql.connection.commit()
        return redirect(url_for('Productos'))

@app.route('/Delete_productos/<string:Codigo>')
def delete_productos(Codigo):
    cur = mysql.connection.cursor()
    cur.execute('DELETE FROM productos WHERE Codigo = {0}'.format(Codigo))
    mysql.connection.commit()
    flash('Producto eliminado de manera correcta')
    return redirect(url_for('Productos'))

if __name__ == '__main__':
    app.run(port = 3000, debug = True)