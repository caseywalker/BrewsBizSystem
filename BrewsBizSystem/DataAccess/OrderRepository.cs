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
  public class OrderRepository
  {
    readonly string _connectionString; 
    
    public OrderRepository(IConfiguration config)
    {
      _connectionString = config.GetConnectionString("BrewsBizSystem");
    } 

    internal List<Order> GetAll()
    {
      using var db = new SqlConnection(_connectionString);

      var orders = db.Query<Order>(@"SELECT *
                                     FROM ORDERS").ToList();

      return orders;

    }
  }
}
