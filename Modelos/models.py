from flask_login import UserMixin
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Integer,String,Column,ForeignKey
from sqlalchemy.orm import relationship
from werkzeug.security import generate_password_hash, check_password_hash

db = SQLAlchemy()

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
    @property
    def password(self):
        raise AttributeError('El atributo password no es un atributo de lectura')
    @password.setter
    def password(self,password):
        self.password_hash=generate_password_hash(password)
    def validarPassword(self,password):
        return check_password_hash(self.password_hash,password)

    def __init__(self, nombre, apellido, email, telefono, contrasena, tipo, estatus):
        self.nombre = nombre
        self.apellido = apellido
        self.email = email
        self.telefono = telefono
        self.contrasena = contrasena
        self.tipo = tipo
        self.estatus = estatus
