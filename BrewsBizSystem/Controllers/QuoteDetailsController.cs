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
  [Route("api/quotedetails")]
  [ApiController]
  public class QuoteDetailsController : ControllerBase
  {

    QuoteDetailRepository _repo;

    public QuoteDetailsController(QuoteDetailRepository repo)
    {
      _repo = repo;
    }

    [HttpGet]
    public List<QuoteDetail> GetAllQuoteDetails()
    {
      return _repo.GetAll();
    }

    [HttpGet("getQuoteDetailsByQuoteID/{quoteID}")]
    public List<QuoteDetail> GetQuoteDetailsByQuoteID(Guid quoteID)
    {
      return _repo.GetByQuoteID(quoteID);
    }
  }
}
