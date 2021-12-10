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
  [Route("api/orders")]
  [ApiController]
  public class OrdersController : ControllerBase
  {
    OrderRepository _repo;

    public OrdersController(OrderRepository repo)
    {
      _repo = repo;
    }

    [HttpGet]
    public List<Order> GetAllOrders()
    {
      return _repo.GetAll();
    }

  }
}
