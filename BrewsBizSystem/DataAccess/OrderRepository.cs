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

    internal Order GetByOrderID(Guid orderID)
    {
      using var db = new SqlConnection(_connectionString);

      var sql = @"SELECT *
                  FROM ORDERS
                  WHERE OrderID = @orderID";

      var thisOrder = db.QueryFirstOrDefault<Order>(sql, new { orderID });

      return thisOrder;
    }
    
    internal Order CreateNewOrder(Guid quoteID)
    {
      using var db = new SqlConnection(_connectionString);

      var thisQuoteSql = @"SELECT *
                           FROM QUOTES
                            WHERE QuoteID = @quoteID";

      var thisQuote = db.QueryFirstOrDefault<Quote>(thisQuoteSql, new { quoteID });

      var paramNewOrder = new NewOrder
      {
        UserID = thisQuote.UserID,
        CustomerID = thisQuote.CustomerID,
        OrderAmount = thisQuote.QuoteAmount,
        Complete = false
      };

      var createOrderSql = @"INSERT INTO dbo.ORDERS
                                   (UserID
                                   ,CustomerID
                                   ,OrderAmount
                                   ,Complete)
                             OUTPUT Inserted.*
                             VALUES
                                   (@userID
                                   ,@customerID
                                   ,@orderAmount
                                   ,0)";

      var createdOrder = db.QueryFirstOrDefault<Order>(createOrderSql, paramNewOrder);

      var quoteDetailsSql = @"SELECT *
                                FROM QUOTEDETAILS
                                WHERE QuoteID = @quoteID";

      var theseDetails = db.Query<QuoteDetail>(quoteDetailsSql, new { quoteID }).ToList();

      foreach (var orderItem in theseDetails)
      {
        var orderDetailParam = new NewOrderDetail
        {
          OrderID = createdOrder.OrderID,
          ProductID = orderItem.ProductID,
          ProductQuantity = orderItem.ProductQuantity,
          ProductPrice = orderItem.ProductPrice
        };

        var insertSql = @"INSERT INTO dbo.ORDERDETAILS
                                   (OrderID
                                   ,ProductID
                                   ,ProductQuantity
                                   ,ProductPrice)
                             VALUES
                                   (@orderID
                                   ,@productID
                                   ,@productQuantity
                                   ,@productPrice)";

        db.Execute(insertSql, orderDetailParam);
      }

      var completeQuoteSql = @"UPDATE dbo.QUOTES
                               SET Complete = 1
                               WHERE QuoteID = @quoteID";

      db.Execute(completeQuoteSql, new { quoteID });

      return createdOrder;
    }
  }
}
