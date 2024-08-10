using System.Data;
using Microsoft.AspNetCore.Mvc;
using ServerAsp.Data;


namespace ServerAsp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class Media : ControllerBase
    {
        private readonly DatabaseManager _databaseManager;

        public Media(DatabaseManager databaseManager)
        {
            _databaseManager = databaseManager;
        }

        
        [HttpGet("Movies")]
        public IActionResult Movies()
        {
            string query = "SELECT * FROM movies";
            var data = _databaseManager.ExecuteQuery(query);

            var DesData = new List<Dictionary<string, object>>();

            foreach (DataRow row in data.Rows) //Deserializacion de los datos 
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
        public IActionResult Series()
        {
            string query = "SELECT * FROM Series";
            var data = _databaseManager.ExecuteQuery(query);

            var DesData = new List<Dictionary<string, object>>();
            foreach (DataRow row in data.Rows)
            {
                var series = new Dictionary<string, object>();
                foreach (DataColumn column in data.Columns)
                {
                    series.Add(column.ColumnName, row[column]);
                }
                DesData.Add(series);
            }
            return Ok(DesData);
        }
    }
}