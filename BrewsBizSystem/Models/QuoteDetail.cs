using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BrewsBizSystem.Models
{
  public class QuoteDetail
  {
    public Guid QuoteDetailID { get; set; }
    public Guid QuoteID { get; set; }
    public Guid ProductID { get; set; }
    public int ProductQuantity { get; set; }
    public decimal ProductPrice { get; set; }
  }
}
