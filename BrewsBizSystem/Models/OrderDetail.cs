using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BrewsBizSystem.Models
{
  public class OrderDetail
  {
    public Guid OrderDetailID { get; set; }
    public Guid OrderID { get; set; }
    public Guid ProductID { get; set; }
    public int ProductQuantity { get; set; }
    public decimal ProductPrice { get; set; }
  }
}
