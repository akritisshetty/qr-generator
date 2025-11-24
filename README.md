## QR Code Generator
This is a simple, browser-based QR Code Generator that lets users create fully customized QR codes without any additional setup. It uses the lightweight `qrcode.js` library to generate QR images on the fly.

### Features
**1. Live QR Preview**<br>
    See updates instantly as you generate or tweak your QR code.<br>
**2. Custom Input**<br>
    Enter any URL to encode.<br>
**3. Colour Controls**<br>
    Choose your own foreground and background colours.<br>
**4. PNG Export**<br>
    Download a high-quality PNG with your custom file name.<br>


### Project Structure
```
/qr-generator<br>
│
├── index.html<br>
├── style.css<br>
└── script.js<br>
```

### How it Works
**1. Handling User Input**<br>
    - The website listens for changes to the link, size, colors, and file name. Each control is connected to event listeners, allowing the interface to respond instantly as the user adjusts settings.<br>
**2. Generating the QR Code**<br>
    - When `Generate` is clicked, a new QRCode instance is created using `qrcode.js`. The library outputs the QR code as an `<img>` element.<br>
**3. Updating the Preview**<br>
    - The preview card refreshes dynamically to show the rendered QR code and display metadata, i.e., the chosen size, giving users real-time visual feedback.<br>
**4. Exporting as PNG**<br>
    - A helper function converts the QR’s image into a PNG data URL.<br>
        - Download creates a temporary anchor element to save the file.<br>
        - Copy converts the image into a blob and sends it to the Clipboard API.<br>
**5. Regenerate and Clear Controls**<br>
    - Regenerate rebuilds the QR code using the current settings.<br>
    - Clear removes the QR preview entirely, resetting the workspace.<br>