
export default function Weather(weather){
    var list = '<i class="fas fa-spinner fa-spin"></i>';

    if(weather.main){
        list = `
            <strong>
            Temperature
            </strong>: ${(weather.main.temp * (9 / 5) - 459.67).toFixed(1)}&deg;F
            <br>
            <strong>
            Description
            </strong>: ${weather.weather[0].description}
            `;
    }
        
    return `
            <div>
                <h4>Current Weather in St. Louis:</h4>
                   ${list}
            </div>
    `;
}