using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BrewsBizSystem.Models
{
  public class Customer
  {
    public Guid CustomerID { get; set; }
    public string CustomerName { get; set; }
    public string CustomerAddress { get; set; }
    public string CustomerCity { get; set; }
    public int CustomerZipCode { get; set; }
    public string CustomerState { get; set; }
  }
}
