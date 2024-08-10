using System.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using ServerAsp.Data;
using ServerAsp.Models;


namespace ServerAsp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class Category : ControllerBase
    {
        private readonly DatabaseManager _databaseManager;

        public Category(DatabaseManager databaseManager)
        {
            _databaseManager = databaseManager;
        }

        [HttpGet("Movies")]
        public IActionResult CategorysMovies([FromQuery] Categorys categorys)
        {
            string query = "SELECT * FROM movies WHERE Category = @Category ";
            var parameters = new[]
            {
                new SqlParameter("@Category", categorys.Category)
            };

            var data = _databaseManager.ExecuteQuery(query, parameters);
            
            var DesData = new List<Dictionary<string, object>>();
            foreach (DataRow row in data.Rows)
            {
                var movie = new Dictionary<string, object>();
                foreach (DataColumn column in data.Columns)
                {
                    movie.Add(column.ColumnName, row[column]);
                }
                DesData.Add(movie);
            }
            return Ok(DesData);
        }

        [HttpGet("Series")]
        public IActionResult CategorysSeries([FromQuery] Categorys categorys)
        {
            var query = "SELECT * FROM Series WHERE Category = @Category";
            var parameters = new[]
            {
                new SqlParameter("@Category", categorys.Category)
            };
            var data = _databaseManager.ExecuteQuery(query, parameters);

            var DesData = new List<Dictionary<string, object>>();
            foreach (DataRow row in data.Rows)
            {
                var serie = new Dictionary<string, object>();
                foreach (DataColumn column in data.Columns)
                {
                    serie.Add(column.ColumnName, row[column]);
                }
                DesData.Add(serie);
            }
            return Ok(DesData);
        }
    }
}