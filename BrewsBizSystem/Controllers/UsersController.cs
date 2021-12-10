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
  [Route("api/users")]
  [ApiController]
  public class UsersController : ControllerBase
  {
    UserRepository _repo;

    public UsersController(UserRepository repo)
    {
      _repo = repo;
    }

    [HttpGet]
    public List<User> GetAllUsers()
    {
      return _repo.GetAll();
    }
  }
}
