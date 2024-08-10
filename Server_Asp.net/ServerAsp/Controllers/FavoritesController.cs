using System.Data;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.IdentityModel.Tokens;
using ServerAsp.Data;
using ServerAsp.Models;

namespace ServerAsp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    
    public class Favorites : ControllerBase
    {
        private readonly DatabaseManager _databaseManager;
        public Favorites(DatabaseManager databaseManager)
        {
            _databaseManager = databaseManager;
        }

        [HttpGet("Favorites")]
        public IActionResult GetFavorites([FromQuery] int ID_User)
        {
            string query = @"
                SELECT 
                    f.ID_Favorites, 
                    f.ID_User,
                    p.ID_Movie, 
                    s.ID_Series, 
                    CASE 
                        WHEN p.ID_Movie IS NOT NULL THEN 'movies'
                        WHEN s.ID_Series IS NOT NULL THEN 'Series'
                    END AS ContentType,
                    COALESCE(p.Title, s.Title) AS Title,
                    COALESCE(p.M_Description, s.S_Description) AS M_Description,
                    COALESCE(p.Category, s.Category) AS Category,
                    COALESCE(p.M_Length, s.S_Length) AS M_Length,
                    COALESCE(p.URL_img, s.URL_img) AS URL_img
                FROM 
                    favorites f
                LEFT JOIN 
                    movies p ON f.ID_Movie = p.ID_Movie
                LEFT JOIN 
                    Series s ON f.ID_Series = s.ID_Series
                WHERE 
                    f.ID_User = @ID_User";
            var parameters = new[]
            {
                new SqlParameter("@ID_User", ID_User)
            };

            var data = _databaseManager.ExecuteQuery(query, parameters);
            var DesData = new List<Dictionary<string, object>>();
            foreach (DataRow row in data.Rows)
            {
                var favorite = new Dictionary<string, object>();
                foreach (DataColumn column in data.Columns)
                {
                    favorite.Add(column.ColumnName, row[column]);
                }
                DesData.Add(favorite);
            }
            return Ok(DesData);
        }

        [HttpPost("Delete")]
        public IActionResult DeleteFavorites([FromBody] FavoritesM favoritesM)
        {
            Console.WriteLine(favoritesM.ID_Series);
            Console.WriteLine(favoritesM.ID_Movie);
            Console.WriteLine(favoritesM.ID_User);
            string query = "DELETE FROM Favorites WHERE ID_User = @ID_User AND ((ID_Movie IS NOT NULL AND ID_Movie = @ID_Movie) OR (ID_Series IS NOT NULL AND ID_Series = @ID_Series))";
            var parameters = new []
            {
                new SqlParameter("@ID_User", favoritesM.ID_User),
                new SqlParameter("@ID_Movie", favoritesM.ID_Movie),
                new SqlParameter("@ID_Series", favoritesM.ID_Series)
            };

            var data = _databaseManager.ExecuteNoQuery(query, parameters);
            return Ok("Favorito eliminado");
        }
    }
}