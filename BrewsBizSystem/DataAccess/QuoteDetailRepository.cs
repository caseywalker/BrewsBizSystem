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
  public class QuoteDetailRepository
  {
    readonly string _connectionString;

    public QuoteDetailRepository(IConfiguration config)
    {
      _connectionString = config.GetConnectionString("BrewsBizSystem");
    }

    internal List<QuoteDetail> GetAll()
    {
      using var db = new SqlConnection(_connectionString);

      var quoteDetails = db.Query<QuoteDetail>(@"SELECT *
                                                FROM QUOTEDETAILS").ToList();

      return quoteDetails;
    }
  }
}
