# Ciber ciudadano API

**Nota:** El archivo llamado _ciber_ciudadano.sql_ contiene el script para crear la base de datos y la tabla necesaria para trabajar. Está trabajado en MySQL y utilicé en mi caso XAMPP para realizar el trabajo.

- [Repositorio de FrontEnd](https://github.com/jonathan-361/ciber-ciudadano.git)

---

### Endpoints

- #### Iniciar sesión:

**POST:** `http://localhost:3000/api/login`

**JSON:**

```
{
  "email": "johndoe777@gmail.com",
  "password": "Johnny361"
}
```

<br>

- #### Registrar usuario:

**POST:** `http://localhost:3000/api/users/register`

**JSON:**

```
{
  "name": "John",
  "last_name": "Doe",
  "email": "johndoe777@gmail.com",
  "password": "Johnny361",
  "birth_date": "2003-08-04"
}
```

<br>

- #### Obtener usuarios:

**GET:** `http://localhost:3000/api/users`
