function generateTitle() {
    let productName = document.getElementById("productName").value.trim();
    let category = document.getElementById("category").value.trim();
    let features = document.getElementById("features").value.trim();

    if (productName === "" || category === "" || features === "") {
        document.getElementById("output").innerText = "Please fill all fields!";
        document.getElementById("copyBtn").style.display = "none";
        return;
    }

    let featureList = features.split(",").map(f => f.trim());

    let powerWords = [
        "Best", "Top-Rated", "Premium", "Affordable", "High-Quality", 
        "Exclusive", "Limited Edition", "Must-Have", "Bestselling", 
        "Trending", "Highly Recommended", "Ultimate", "Value Pack", "Game-Changer"
    ];
    
    let randomPowerWord = powerWords[Math.floor(Math.random() * powerWords.length)];

    let titleFormats = [
        `${randomPowerWord} ${productName} - ${category} with ${featureList.join(", ")}`,
        `Buy ${productName} Now! Top ${category} with ${featureList.join(", ")}`,
        `Introducing the ${randomPowerWord} ${productName} - ${featureList.join(", ")} in ${category}`,
        `Your Go-To ${category}: ${productName} with ${featureList.join(", ")}`,
        `Experience ${randomPowerWord} Quality! ${productName} - ${featureList.join(", ")}`,
    ];

    let seoTitle = titleFormats[Math.floor(Math.random() * titleFormats.length)];

    document.getElementById("output").innerText = seoTitle;
    document.getElementById("copyBtn").style.display = "block";
}

function copyToClipboard() {
    let outputText = document.getElementById("output").innerText;
    navigator.clipboard.writeText(outputText).then(() => {
        alert("Title copied to clipboard!");
    });
}

document.getElementById("toggleTheme").addEventListener("click", function() {
    document.body.classList.toggle("orange-mode");
});
