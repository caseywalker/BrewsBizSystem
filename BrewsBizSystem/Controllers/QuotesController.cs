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
  [Route("api/quotes")]
  [ApiController]
  public class QuotesController : ControllerBase
  {

    QuoteRepository _repo;

    public QuotesController(QuoteRepository repo)
    {
      _repo = repo;
    }

    [HttpGet]
    public List<Quote> GetAllQuotes()
    {
      return _repo.GetAll();
    }
  }
}
