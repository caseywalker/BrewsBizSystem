using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace BrewsBizSystem.DataAccess
{
  public class UserRepository
  {
    readonly string _connectionString; 
    
    public UserRepository(IConfiguration config)
    {
      _connectionString = config.GetConnectionString("BrewsBizSystem");
    }
  }
}
