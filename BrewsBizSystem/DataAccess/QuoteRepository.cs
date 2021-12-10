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
  public class QuoteRepository
  {
    readonly string _connectionString;
    
    public QuoteRepository(IConfiguration config)
    {
      _connectionString = config.GetConnectionString("BrewsBizSystem");
    }

    internal List<Quote> GetAll()
    {
      using var db = new SqlConnection(_connectionString);

      var quotes = db.Query<Quote>(@"SELECT * 
                                     FROM QUOTES").ToList();

      return quotes;
    }
  }
}
