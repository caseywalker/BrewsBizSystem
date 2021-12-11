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
    
    [HttpGet("validateUser/{userUID}")]
    public bool ValidateUser(string userUID)
    {
      return _repo.IsAUser(userUID);
    }

    [HttpGet("getUserByUserUID/{userUID}")]
    public User GetUserByUID(string userUID)
    {
      return _repo.GetByUserUID(userUID);
    }

    [HttpGet("getUserByID/{userID}")]
    public User getUserByID(Guid userID)
    {
      return _repo.GetUserByID(userID);
    }
  }
}
