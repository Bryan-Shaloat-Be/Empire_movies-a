var builder = WebApplication.CreateBuilder(args);

// Configura los servicios necesarios en tu contenedor aquí
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngularClient",
        builder =>
        {
            builder.WithOrigins("http://localhost:4200") // Cambia esto a la URL de tu frontend
                   .AllowAnyHeader()
                   .AllowAnyMethod();
        });
});

// Construye la aplicación
var app = builder.Build();

// Middleware para manejar solicitudes HTTP
app.UseHttpsRedirection();
app.UseCors("AllowAngularClient");

// Aquí puedes agregar tus propios endpoints
// Ejemplo básico:
app.MapGet("/", () => "API funcionando correctamente");

app.Run();