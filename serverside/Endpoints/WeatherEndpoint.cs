using FastEndpoints;

public class WeatherEndpoint : Endpoint<WeatherRequest, WeatherResponse>
{
    public override void Configure()
    {
        Get("/weather");
        AllowAnonymous();
    }

    public override async Task HandleAsync(WeatherRequest req, CancellationToken ct)
    {
        // Simulate fetching weather data
        var response = new WeatherResponse
        {
            Temperature = 72,
            Summary = "Sunny"
        };

        await SendAsync(response, cancellation: ct);
    }
}

public class WeatherRequest
{
    public string? Something { get; set; }
    // Define any request parameters if needed
}

public class WeatherResponse
{
    public int Temperature { get; set; }
    public string Summary { get; set; }
}