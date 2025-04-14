# Weather API with FastEndpoints

This project is an ASP.NET application that utilizes the FastEndpoints library to create a simple weather API. Below are the details regarding the structure and usage of the application.

## Project Structure

- **Controllers**
  - `WeatherController.cs`: Handles HTTP requests related to weather data.
  
- **Endpoints**
  - `WeatherEndpoint.cs`: Defines the FastEndpoints endpoint for fetching weather data.

- **Program.cs**: The entry point of the application, setting up FastEndpoints and configuring services.

- **appsettings.json**: Contains configuration settings for the application.

## Setup Instructions

1. **Clone the Repository**
   Clone this repository to your local machine.

2. **Navigate to the Backend Directory**
   Open a terminal and navigate to the `backend` directory.

3. **Restore Dependencies**
   Run the following command to restore the necessary packages:
   ```
   dotnet restore
   ```

4. **Run the Application**
   Start the application using:
   ```
   dotnet run
   ```

5. **Access the Weather API**
   Once the application is running, you can access the weather API at:
   ```
   http://localhost:5000/weather
   ```

## Usage Example

To fetch weather data, send a GET request to the `/weather` endpoint. The response will include the current weather information.

## Contributing

Feel free to submit issues or pull requests if you would like to contribute to this project.