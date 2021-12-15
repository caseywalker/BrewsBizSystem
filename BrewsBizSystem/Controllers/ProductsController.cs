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

    [HttpGet("getProductByProductID/{productID}")]
    public Product GetProductByID(Guid productID)
    {
      return _repo.GetProductByProductID(productID);
    }

    [HttpGet("getProductByProductName/{productName}")]
    public Product GetProductByName(string productName)
    {
      return _repo.GetProductByProductName(productName);
    }

    [HttpPost("createNewProduct")]
    public void CreateNewProduct(NewProduct product)
    {
      _repo.CreateProduct(product);
    }

    [HttpPut("updateProduct")]
    public void UpdateProduct(Product updatedProduct)
    {
      _repo.UpdateProduct(updatedProduct);
    }

    [HttpDelete("deleteProduct/{productID}")]
    public void DeleteProduct(Guid productID)
    {
      _repo.DeleteProduct(productID);
    }
  }
}
