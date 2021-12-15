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

    internal Product GetProductByProductID(Guid productID)
    {
      using var db = new SqlConnection(_connectionString);

      var sql = @"SELECT *
                  FROM Products
                  WHERE ProductID = @productID";

      return db.QueryFirstOrDefault<Product>(sql, new { productID });
    }

    internal Product GetProductByProductName(string productName)
    {
      using var db = new SqlConnection(_connectionString);

      var sql = @"SELECT *
                  FROM Products
                  WHERE ProductName = @productName";

      return db.QueryFirstOrDefault<Product>(sql, new { productName });
    }

    internal void CreateProduct(NewProduct newProduct)
    {
      using var db = new SqlConnection(_connectionString);

      var sql = @"INSERT INTO dbo.PRODUCTS
           (ProductName
           ,ProductDescription
           ,ProductPrice)
     VALUES
           (@ProductName
           ,@ProductDescription
           ,@ProductPrice)";

      var result = db.Execute(sql, newProduct);
    }

    internal void UpdateProduct(Product updatedProduct)
    {
      using var db = new SqlConnection(_connectionString);

      var sql = @"UPDATE dbo.PRODUCTS
                SET ProductName = @ProductName
                    ,ProductDescription = @ProductDescription
                    ,ProductPrice = @ProductPrice
                WHERE ProductID = @ProductID";

      var result = db.Execute(sql, updatedProduct);
    }

    internal void DeleteProduct(Guid productID)
    {
      using var db = new SqlConnection(_connectionString);

      var sql = @"DELETE FROM dbo.PRODUCTS
                WHERE ProductID = @ProductID";

      var result = db.Execute(sql,  new { productID });
    }

  }
}
