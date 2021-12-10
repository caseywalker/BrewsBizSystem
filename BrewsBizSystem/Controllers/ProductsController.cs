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
  [Route("api/products")]
  [ApiController]
  public class ProductsController : ControllerBase
  {
    ProductRepository _repo;

    public ProductsController(ProductRepository repo)
    {
      _repo = repo;
    }

    [HttpGet]
    public List<Product> GetAllProducts()
    {
      return _repo.GetAll();
    }
  }
}
