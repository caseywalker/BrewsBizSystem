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

    internal Customer GetCustomerByID(Guid customerID)
    {
      using var db = new SqlConnection(_connectionString);

      var sql = @"SELECT *
                  FROM Customers
                  WHERE CustomerID = @customerID";

      return db.QueryFirstOrDefault<Customer>(sql, new { customerID });
    }

    internal Customer GetCustomerByName(string customerName)
    {
      using var db = new SqlConnection(_connectionString);

      var sql = @"SELECT *
                  FROM Customers
                  WHERE CustomerName = @customerName";

      return db.QueryFirstOrDefault<Customer>(sql, new { customerName });
    }

    internal void CreateCustomer (NewCustomer newCustomer)
    {
      using var db = new SqlConnection(_connectionString);

      var sql = @"INSERT INTO dbo.CUSTOMERS
           (CustomerName
           ,CustomerAddress
           ,CustomerCity
           ,CustomerZipCode
           ,CustomerState)
     VALUES
           (@CustomerName
           ,@CustomerAddress
           ,@CustomerCity
           ,@CustomerZipCode
           ,@CustomerState)";

      var result = db.Execute(sql, newCustomer);
    }
  }
}
