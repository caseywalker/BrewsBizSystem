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

    [HttpGet("getQuoteByQuoteID/{quoteID}")]
    public Quote GetQuoteByID(Guid quoteID)
    {
      return _repo.GetQuoteByQuoteID(quoteID);
    }

    [HttpGet("getOpenQuotes")]
    public List<Quote> GetOpenQuotes()
    {
      return _repo.GetOpenQuotes();
    }

    [HttpPost]
    public void CreateQuote(NewQuote quote)
    {
      _repo.CreateNewQuote(quote);
    }

    [HttpPut("addProductToQuote/{quoteID}")]
    public Quote AddProductToQuote(Guid quoteID, QuoteProduct lineItem)
    {
      return _repo.AddProduct(quoteID, lineItem);
    }

    [HttpPut("removeProductFromQuote/{quoteDetailID}/{quoteID}")]
    public Quote RemoveProductFromQuote(Guid quoteDetailID, Guid quoteID)
    {
      return _repo.RemoveProduct(quoteDetailID, quoteID);
    }

    [HttpPut("updateProductQuantity/{quoteDetailID}/{quoteID}/{productQuantity}")]
    public Quote UpdateProductQuantity(Guid quoteDetailID, Guid quoteID, int productQuantity)
    {
      return _repo.UpdateProduct(quoteDetailID, quoteID, productQuantity);
    }

    [HttpDelete("deleteQuote/{quoteID}")]
    public void DeleteQuote(Guid quoteID)
    {
      _repo.DeleteQuote(quoteID);
    }
  }
}
