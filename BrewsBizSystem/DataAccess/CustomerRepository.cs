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
  public class CustomerRepository
  {
    readonly string _connectionString;

    public CustomerRepository(IConfiguration config)
    {
      _connectionString = config.GetConnectionString("BrewsBizSystem");
    }

    internal List<Customer> GetAll()
    {
      using var db = new SqlConnection(_connectionString);

      var customers = db.Query<Customer>(@"SELECT *
                                          FROM CUSTOMERS").ToList();

      return customers;
    }
  }
}
