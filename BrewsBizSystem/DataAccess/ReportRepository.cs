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
  public class ReportRepository
  {
    readonly string _connectionString;

    public ReportRepository(IConfiguration config)
    {
      _connectionString = config.GetConnectionString("BrewsBizSystem");
    }

    internal Report SalesReportDay()
    {
      using var db = new SqlConnection(_connectionString);

      var sql = @"SELECT SUM(OrderAmount) as TotalRevenue, Count(*) as TotalOrders, SUM(ProductQuantity) as TotalProducts
                  FROM ORDERS
                  JOIN ORDERDETAILS ON Orders.OrderID = OrderDetails.OrderID
                  WHERE OrderDate >= DATEADD(day, -1, GETDATE());";

      var thisReport = db.QueryFirstOrDefault<Report>(sql);

      return thisReport;
    }

    internal Report SalesReportWeek()
    {
      using var db = new SqlConnection(_connectionString);

      var sql = @"SELECT SUM(OrderAmount) as TotalRevenue, Count(*) as TotalOrders, SUM(ProductQuantity) as TotalProducts
                  FROM ORDERS
                  JOIN ORDERDETAILS ON Orders.OrderID = OrderDetails.OrderID
                  WHERE OrderDate >= DATEADD(week, -1, GETDATE());";

      var thisReport = db.QueryFirstOrDefault<Report>(sql);

      return thisReport;
    }

    internal Report SalesReportMonth()
    {
      using var db = new SqlConnection(_connectionString);

      var sql = @"SELECT SUM(OrderAmount) as TotalRevenue, Count(*) as TotalOrders, SUM(ProductQuantity) as TotalProducts
                  FROM ORDERS
                  JOIN ORDERDETAILS ON Orders.OrderID = OrderDetails.OrderID
                  WHERE OrderDate >= DATEADD(month, -1, GETDATE());";

      var thisReport = db.QueryFirstOrDefault<Report>(sql);

      return thisReport;
    }

    internal Report SalesReportYear()
    {
      using var db = new SqlConnection(_connectionString);

      var sql = @"SELECT SUM(OrderAmount) as TotalRevenue, Count(*) as TotalOrders, SUM(ProductQuantity) as TotalProducts
                  FROM ORDERS
                  JOIN ORDERDETAILS ON Orders.OrderID = OrderDetails.OrderID
                  WHERE OrderDate >= DATEADD(year, -1, GETDATE());";

      var thisReport = db.QueryFirstOrDefault<Report>(sql);

      return thisReport;
    }
  }
}
