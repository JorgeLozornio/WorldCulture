from flask_login import UserMixin
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Integer,String,Column,ForeignKey
from sqlalchemy.orm import relationship
from werkzeug.security import generate_password_hash, check_password_hash
from flask_marshmallow import Marshmallow

db = SQLAlchemy()
ma = Marshmallow()

class Usuario(UserMixin,db.Model):
    __tablename__='Usuarioss'
    idUsuario=Column(Integer,primary_key=True)
    nombre=Column(String(50),nullable=False)
    apellido=Column(String(50),nullable=False)
    email =Column(String(50),nullable=False)
    telefono = Column(String(10), nullable=False)
    contrasena = Column(String(128), nullable=False)
    tipo = Column(String(1), nullable=False)
    estatus = Column(String(1), nullable=False)

    def __init__(self, nombre, apellido, email, telefono, contrasena, tipo, estatus):
        self.nombre = nombre
        self.apellido = apellido
        self.email = email
        self.telefono = telefono
        self.contrasena = contrasena
        self.tipo = tipo
        self.estatus = estatus

    def insertar(self):
        db.session.add(self)
        db.session.commit()

class UsuarioSchema(ma.Schema):
    class Meta:
        fields = ('idUsuario', 'nombre', 'apellido', 'email', 'telefono', 'contrasena', 'tipo', 'estado')

usuario_schema = UsuarioSchema()