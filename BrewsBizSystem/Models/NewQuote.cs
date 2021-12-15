using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BrewsBizSystem.Models
{
  public class NewQuote
  {
    public Guid UserID { get; set; }
    public Guid CustomerID { get; set; }
    public decimal QuoteAmount { get; set; }
    public bool Complete { get; set; }
  }
}
