using BrewsBizSystem.DataAccess;
using BrewsBizSystem.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BrewsBizSystem.Controllers
{
  [Route("api/orderdetails")]
  [ApiController]
  public class OrderDetailsController : ControllerBase
  {
    OrderDetailRepository _repo;

    public OrderDetailsController(OrderDetailRepository repo)
    {
      _repo = repo;
    }

    [HttpGet]
    public List<OrderDetail> GetAllOrderDetails()
    {
      return _repo.GetAll();
    }

    [HttpGet("getOrderDetailsByOrderID/{orderID}")]
    public List<OrderDetail> GetByOrderID(Guid orderID)
    {
      return _repo.GetByOrderID(orderID);
    }
  }
}
