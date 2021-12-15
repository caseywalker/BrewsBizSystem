using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BrewsBizSystem.Models
{
  public class NewOrder
  {
    public Guid UserID { get; set; }
    public Guid CustomerID { get; set; }
    public decimal OrderAmount { get; set; }
    public bool Complete { get; set; }
  }
}
