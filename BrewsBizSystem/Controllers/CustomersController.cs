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
  [Route("api/customers")]
  [ApiController]
  public class CustomersController : ControllerBase
  {
    CustomerRepository _repo;

    public CustomersController(CustomerRepository repo)
    {
      _repo = repo;
    }

    [HttpGet]
    public List<Customer> GetAllCustomers()
    {
      return _repo.GetAll();
    }

    [HttpGet("getCustomerByCustomerID/{customerID}")]
    public Customer GetCustomerByID(Guid customerID)
    {
      return _repo.GetCustomerByID(customerID);
    }

    [HttpGet("getCustomerByCustomerName/{customerName}")]
    public Customer GetCustomerByName(string customerName)
    {
      return _repo.GetCustomerByName(customerName);
    }

    [HttpPost("createNewCustomer")]
    public void CreateNewCustomer(NewCustomer customer)
    {
      _repo.CreateCustomer(customer);
    }
  }
}
