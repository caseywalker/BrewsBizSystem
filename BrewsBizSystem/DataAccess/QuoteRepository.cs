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

    internal List<Quote> GetOpenQuotes()
    {
      using var db = new SqlConnection(_connectionString);

      var sql = @"SELECT *
                  FROM QUOTES
                  WHERE COMPLETE = 0";

      var quotes = db.Query<Quote>(sql).ToList();

      return quotes;
    }

    internal Quote GetQuoteByQuoteID(Guid quoteID)
    {
      using var db = new SqlConnection(_connectionString);

      var sql = @"SELECT *
                  FROM Quotes
                  WHERE QuoteID = @quoteID";

      return db.QueryFirstOrDefault<Quote>(sql, new { quoteID });
    }

    internal Quote CreateNewQuote(NewQuote quote)
    {
      using var db = new SqlConnection(_connectionString);

      var sql = @"INSERT INTO dbo.QUOTES
           (UserID
           ,CustomerID
           ,QuoteAmount
           ,Complete)
    OUTPUT INSERTED.*
     VALUES
           (@UserID
           ,@CustomerID
           ,0.0
           ,0)";

      var result = db.QueryFirstOrDefault<Quote>(sql, quote);

      return result;
    }

    internal Quote AddProduct(Guid quoteID, QuoteProduct newItem)
    {
      //Start by getting the product we are adding to insert into quote details.
      using var db = new SqlConnection(_connectionString);

      var productSql = @"SELECT *
                        FROM PRODUCTS
                        Where ProductID = @id";

      var thisProduct = db.QueryFirstOrDefault<Product>(productSql, new { id = newItem.ProductID });

      var quoteDetailPrice = thisProduct.ProductPrice;

      //instatiate a new quote detail line item to insert into the database to update the quote. 
      var thisQuoteDetail = new NewQuoteDetail();
      thisQuoteDetail.QuoteID = quoteID;
      thisQuoteDetail.ProductID = thisProduct.ProductID;
      thisQuoteDetail.ProductQuantity = newItem.ProductQuantity;
      thisQuoteDetail.ProductPrice = quoteDetailPrice;

      var addQuoteDetailSql = @"INSERT INTO dbo.QUOTEDETAILS
           (QuoteID
           ,ProductID
           ,ProductQuantity
           ,ProductPrice)
     VALUES
           (@QuoteID
           ,@ProductID
           ,@ProductQuantity
           ,@ProductPrice)";

      db.Execute(addQuoteDetailSql, thisQuoteDetail);

      //Now we need to update the quote total, and update the database
      var thisQuoteTotal = 0m;

      var updatedDetailsSql = @"SELECT *
                                FROM QUOTEDETAILS
                                WHERE QuoteID = @quoteID";

      var theseDetails = db.Query<QuoteDetail>(updatedDetailsSql, new { quoteID }).ToList();

      //Loop through each quote line item to update the total.
      foreach (var orderItem in theseDetails)
      {
        var thisLineTotal = Convert.ToDecimal(orderItem.ProductQuantity * orderItem.ProductPrice);
        thisQuoteTotal += thisLineTotal;
      }

      var paramObj = new
      {
        QuoteAmount = thisQuoteTotal,
        QuoteID = quoteID
      };

      var UpdateQuoteSql = @"UPDATE dbo.QUOTES
                            SET QuoteAmount = @quoteAmount
                            WHERE QuoteID = @quoteID";

      db.Execute(UpdateQuoteSql, paramObj);

      var finalSql = @"SELECT * 
                      FROM QUOTES
                      WHERE QuoteID = @quoteID";

      var finalQuote = db.QueryFirstOrDefault<Quote>(finalSql, new { quoteID });

      return finalQuote;

    }

    internal Quote RemoveProduct(Guid quoteDetailID, Guid quoteID)
    {
      //First let's delete the product we don't need 

      using var db = new SqlConnection(_connectionString);

      var removeSql = @"DELETE FROM dbo.QUOTEDETAILS
                      WHERE QuoteDetailID = @quoteDetailID";

      db.Execute(removeSql, new { quoteDetailID });

      //Now we need to update the quote total, and update the database
      var thisQuoteTotal = 0m;

      var updatedDetailsSql = @"SELECT *
                                FROM QUOTEDETAILS
                                WHERE QuoteID = @quoteID";

      var theseDetails = db.Query<QuoteDetail>(updatedDetailsSql, new { quoteID }).ToList();

      //Loop through each quote line item to update the total.
      foreach (var orderItem in theseDetails)
      {
        var thisLineTotal = Convert.ToDecimal(orderItem.ProductQuantity * orderItem.ProductPrice);
        thisQuoteTotal += thisLineTotal;
      }

      var paramObj = new
      {
        QuoteAmount = thisQuoteTotal,
        QuoteID = quoteID
      };

      var UpdateQuoteSql = @"UPDATE dbo.QUOTES
                            SET QuoteAmount = @quoteAmount
                            WHERE QuoteID = @quoteID";

      db.Execute(UpdateQuoteSql, paramObj);

      var finalSql = @"SELECT * 
                      FROM QUOTES
                      WHERE QuoteID = @quoteID";

      var finalQuote = db.QueryFirstOrDefault<Quote>(finalSql, new { quoteID });

      return finalQuote;
    }

    internal Quote UpdateProduct(Guid quoteDetailID, Guid quoteID, int productQuantity)
    {
      using var db = new SqlConnection(_connectionString);

      var sqlObj = new
      {
        ProductQuantity = productQuantity,
        QuoteDetailID = quoteDetailID
      };

      var productSql = @"UPDATE dbo.QUOTEDETAILS
                        SET ProductQuantity = @productQuantity
                        WHERE QuoteDetailID = @quoteDetailID";

      db.Execute(productSql, sqlObj);

      //Now we need to update the quote total, and update the database
      var thisQuoteTotal = 0m;

      var updatedDetailsSql = @"SELECT *
                                FROM QUOTEDETAILS
                                WHERE QuoteID = @quoteID";

      var theseDetails = db.Query<QuoteDetail>(updatedDetailsSql, new { quoteID }).ToList();

      //Loop through each quote line item to update the total.
      foreach (var orderItem in theseDetails)
      {
        var thisLineTotal = Convert.ToDecimal(orderItem.ProductQuantity * orderItem.ProductPrice);
        thisQuoteTotal += thisLineTotal;
      }

      var paramObj = new
      {
        QuoteAmount = thisQuoteTotal,
        QuoteID = quoteID
      };

      var updateQuoteSql = @"UPDATE dbo.QUOTES
                            SET QuoteAmount = @quoteAmount
                            WHERE QuoteID = @quoteID";

      db.Execute(updateQuoteSql, paramObj);

      var finalSql = @"SELECT * 
                      FROM QUOTES
                      WHERE QuoteID = @quoteID";

      var finalQuote = db.QueryFirstOrDefault<Quote>(finalSql, new { quoteID });

      return finalQuote;
    }

    internal void DeleteQuote(Guid quoteID)
    {
      using var db = new SqlConnection(_connectionString);

      var detailSql = @"DELETE FROM dbo.QUOTEDETAILS
                        WHERE QuoteID = @quoteID";

      db.Execute(detailSql, new { quoteID });

      var quoteSql = @"DELETE FROM dbo.QUOTES
                        WHERE QuoteID = @quoteID";

      db.Execute(quoteSql, new { quoteID });

    }
  }
}
