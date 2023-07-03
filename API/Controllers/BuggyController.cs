using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class BuggyController : BaseApiController
    {
        [HttpGet("not-found")]
        public ActionResult GetNotFound()
        {
            // return http respoonse
            return NotFound();
        }
        [HttpGet("bad-request")]
        public ActionResult GetBadRequest()
        {
            // return http respoonse
            return BadRequest(new ProblemDetails { Title = "This is a bad request" });
        }
        [HttpGet("unauthorized")]
        public ActionResult GetUnauthorised()
        {
            // return http respoonse
            return Unauthorized();
        }
        [HttpGet("validation-error")]
        public ActionResult GetValidationError()
        {
            // return http respoonse
            ModelState.AddModelError("Problem1", "This is the first error"); //ModeState coming from the [ApiController]  attribute in ../BaseApiController
            ModelState.AddModelError("Problem2", "This is the second error"); //ModeState coming from the [ApiController]  attribute in ../BaseApiController

            return ValidationProblem(); //Gives us 400 and an array of errors that occurred in the ModelState
        }
        [HttpGet("server-error")]
        public ActionResult GetServerError()
        {
            // return http respoonse
            throw new Exception("This is a server error");
        }
    }
}