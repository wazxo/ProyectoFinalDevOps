// index.test.js

test('El título de la página debe ser "¡Hola Mundo!"', () => {
  const html = `
      <!DOCTYPE html>
      <html lang="es">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>¡Hola Mundo!</title>
      </head>
      <body>
          <div class="container">
              <h1 class="title">Hola Mundo</h1>
          </div>
      </body>
      </html>
    `;

  const match = html.match(/<title>(.*?)<\/title>/);
  const title = match ? match[1] : null;

  expect(title).toBe("¡Hola Mundo!");
});
