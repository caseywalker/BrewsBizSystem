using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BrewsBizSystem.Models
{
  public class Order
  {
    public Guid OrderID { get; set; }
    public Guid UserID { get; set; }
    public Guid CustomerID { get; set; }
    public decimal OrderAmount { get; set; }
    public DateTime OrderDate { get; set; }
    public bool Complete { get; set; }
  }
}
