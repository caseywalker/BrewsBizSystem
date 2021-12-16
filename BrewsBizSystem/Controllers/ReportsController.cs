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
  [Route("api/[controller]")]
  [ApiController]
  public class ReportsController : ControllerBase
  {

    ReportRepository _repo;

    public ReportsController(ReportRepository repo)
    {
      _repo = repo;
    }

    [HttpGet("report/day")]
    public Report GetReportDay()
    {
      return _repo.SalesReportDay();
    }

    [HttpGet("report/week")]
    public Report GetReportWeek()
    {
      return _repo.SalesReportWeek();
    }

    [HttpGet("report/month")]
    public Report GetReportMonth()
    {
      return _repo.SalesReportMonth();
    }

    [HttpGet("report/year")]
    public Report GetReportYear()
    {
      return _repo.SalesReportYear();
    }
  }
}
