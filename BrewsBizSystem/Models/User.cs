using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BrewsBizSystem.Models
{
  public class User
  {
    public Guid UserID { get; set; }
    public string UserUID { get; set; }
    public string UserRole { get; set; }
    public string UserFirst { get; set; }
    public string UserLast { get; set; }
    public string UserCompany { get; set; }
  }
}
