const request = require('supertest');
const mongoose = require('mongoose');
const router = require('../routes/usuarios');
const Usuario = require('../models/usuario');

describe('Controlador de usuarios', () => {
  beforeAll(async () => {
    // Conectar a la base de datos de prueba antes de las pruebas
    await mongoose.connect('mongodb+srv://raullopezisidro:raullopezisidro@subo.nbplzof.mongodb.net/', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
  });

  afterAll(async () => {
    // Desconectar de la base de datos de prueba después de las pruebas
    await mongoose.connection.close();
  });

  afterEach(async () => {
    // Limpiar la base de datos después de cada prueba
    await Usuario.deleteMany({});
  });

 /*  it('debería obtener una lista de usuarios', async () => {
    await Usuario.create({ nombre: 'Usuario 1', email: 'usuario1@example.com', password: 'password' });

    const response = await request(router).get('/api/usuarios');

    expect(response.status).toBe(200);
    expect(response.body.ok).toBe(true);
    expect(response.body.usuarios.length).toBe(1);
  }); */

  it('debería crear un nuevo usuario', async () => {
    const nuevoUsuario = { nombre: 'Nuevo Usuario', email: 'nuevousuario@example.com', password: 'password' };

    const response = await request(router)
      .post('/api/usuarios')
      .send(nuevoUsuario);

    expect(response.status).toBe(200);
    expect(response.body.ok).toBe(true);
    expect(response.body.usuario.nombre).toBe(nuevoUsuario.nombre);
  });

 /*  it('debería actualizar un usuario existente', async () => {
    const usuario = await Usuario.create({ nombre: 'Usuario Existente', email: 'usuarioexistente@example.com', password: 'password' });
    const nuevoNombre = 'Nuevo Nombre';

    const response = await request(app)
      .put(`/api/usuarios/${usuario._id}`)
      .send({ nombre: nuevoNombre });

    expect(response.status).toBe(200);
    expect(response.body.ok).toBe(true);
    expect(response.body.usuario.nombre).toBe(nuevoNombre);
  });

  it('debería eliminar un usuario existente', async () => {
    const usuario = await Usuario.create({ nombre: 'Usuario a Eliminar', email: 'usuarioeliminar@example.com', password: 'password' });

    const response = await request(app).delete(`/api/usuarios/${usuario._id}`);

    expect(response.status).toBe(200);
    expect(response.body.ok).toBe(true);
    expect(response.body.msg).toBe('Usuario eliminado');
  }); */
});
