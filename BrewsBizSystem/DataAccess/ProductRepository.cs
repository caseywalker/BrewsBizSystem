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
  public class ProductRepository
  {
    readonly string _connectionString;

    public ProductRepository(IConfiguration config)
    {
      _connectionString = config.GetConnectionString("BrewsBizSystem");
    }

    internal List<Product> GetAll()
    {
      using var db = new SqlConnection(_connectionString);

      var products = db.Query<Product>(@"SELECT *
                                         FROM PRODUCTS").ToList();

      return products;
    }

  }
}
