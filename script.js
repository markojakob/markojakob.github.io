async function F1_info() {
    const response = await fetch("https://api.openf1.org/v1/drivers");
    const info = await response.json();
    displayDriverInfo(info); 
}

function displayDriverInfo(drivers) {
    let driverInfoDiv = document.getElementById("driverInfo");
    let htmlContent = "<h2>Driver Information</h2>";
    for (const driver of drivers) {
        htmlContent += `
            <div class="driver">
                <p>Driver Number: ${driver.driver_number}</p>
                <p>Driver Name: ${driver.full_name}</p>
                <p>Team Name: ${driver.team_name}</p>
                <p>Driver Origin: ${driver.country_code}</p>
            </div>`;
    }
    driverInfoDiv.innerHTML = htmlContent;

    
    
}

F1_info();

