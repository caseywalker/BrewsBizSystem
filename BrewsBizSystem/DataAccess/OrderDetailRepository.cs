﻿using BrewsBizSystem.Models;
using Dapper;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BrewsBizSystem.DataAccess
{
  public class OrderDetailRepository
  {
    readonly string _connectionString;

    public OrderDetailRepository(IConfiguration config)
    {
      _connectionString = config.GetConnectionString("BrewsBizSystem");
    }

    internal List<OrderDetail> GetAll()
    {
      using var db = new SqlConnection(_connectionString);

      var orderDetails = db.Query<OrderDetail>(@"SELECT * 
                                                 FROM ORDERDETAILS").ToList();

      return orderDetails;
    }
  }
}
