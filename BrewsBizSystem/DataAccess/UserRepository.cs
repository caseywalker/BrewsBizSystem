using BrewsBizSystem.Models;
using Dapper;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace BrewsBizSystem.DataAccess
{
  public class UserRepository
  {
    readonly string _connectionString; 
    
    public UserRepository(IConfiguration config)
    {
      _connectionString = config.GetConnectionString("BrewsBizSystem");
    }

    internal List<User> GetAll()
    {
      using var db = new SqlConnection(_connectionString);

      var users = db.Query<User>(@"SELECT *
                                 FROM USERS").ToList();

      return users;
    }

    internal bool IsAUser(string userUID)
    {
      using var db = new SqlConnection(_connectionString);

      var sql = @"IF EXISTS(SELECT *
                  FROM USERS
                  WHERE UserUID=@userUID) SELECT 1 ELSE SELECT 0";

      var result = db.QueryFirstOrDefault<bool>(sql, new { userUID });

      return result;
    }

    internal User GetByUserUID(string userUID)
    {
      using var db = new SqlConnection(_connectionString);

      var sql = @"SELECT *
                  FROM USERS
                  WHERE UserUID=@userUID";

      var user = db.QueryFirstOrDefault<User>(sql, new { userUID });

      return user;
    }

    internal User GetUserByID(Guid userID)
    {
      using var db = new SqlConnection(_connectionString);

      var sql = @"SELECT *
                  FROM USERS
                  WHERE UserID = @userID";

      var user = db.QueryFirstOrDefault<User>(sql, new { userID });

      return user;
    }
  }
}
