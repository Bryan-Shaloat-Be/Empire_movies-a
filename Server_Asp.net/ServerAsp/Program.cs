using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using ServerAsp.Data; // importaciones 

var builder = WebApplication.CreateBuilder(args);
var configuration = builder.Configuration;

// servicios
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngularClient",
        builder =>
        {
            builder.WithOrigins("http://localhost:4200") // URL de angular
                   .AllowAnyHeader()
                   .AllowAnyMethod();
        });
});

builder.Services.AddSingleton<SqlServerConnection>(sp => // Servicio de conexion
{
    return new SqlServerConnection(configuration);
});

builder.Services.AddTransient<DatabaseManager>(sp =>  //Servicio de database manager 
{
    var sqlServerConnection = sp.GetRequiredService<SqlServerConnection>();
    return new DatabaseManager(sqlServerConnection.getConnectionString());
});

builder.Services.AddControllers();

// JWT para los tokens 

var key = Encoding.UTF8.GetBytes("aVeryStrongAndSecureKeyThatIsAtLeast32BytesLong");
builder.Services.AddAuthentication(x => 
{
    x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(x =>
{
    x.RequireHttpsMetadata = false;
    x.SaveToken = true;
    x.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(key),
        ValidateIssuer = false,
        ValidateAudience = false
    };
});

var app = builder.Build();

app.UseHttpsRedirection(); // middleware
app.UseCors("AllowAngularClient");

// Aquí puedes agregar tus propios endpoints
app.MapGet("/", () => "API funcionando correctamente");
app.MapControllers();
app.Run();