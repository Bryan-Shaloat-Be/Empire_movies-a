using System.Data.SqlClient;
namespace ServerAsp.Data
{
    public class SqlServerConnection
    {
        private string _StringConnection = string.Empty;

        public SqlServerConnection(IConfiguration configuration){ 
            _StringConnection = configuration.GetConnectionString("DefaultConnection");
        }

        public string getConnectionString() // Devulevo la cadena de conexion 
        {
            return _StringConnection;
        }
    }
}