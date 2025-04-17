using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class WeatherController : ControllerBase
    {
        [HttpGet]
        public ActionResult<WeatherForecast> GetWeather()
        {
            var forecast = new WeatherForecast
            {
                Date = DateTime.Now,
                TemperatureC = new Random().Next(-20, 55),
                Summary = "Sunny"
            };

            return Ok(forecast);
        }
    }

    public class WeatherForecast
    {
        public DateTime Date { get; set; }
        public int TemperatureC { get; set; }
        public string Summary { get; set; }
    }
}