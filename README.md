## QR Code Generator
This is a simple, browser-based QR Code Generator that lets users create fully customized QR codes without any additional setup. It uses the lightweight `qrcode.js` library to generate QR images on the fly.

### Features
1. **Live QR Preview**  
    See updates instantly as you generate or tweak your QR code.  
2. **Custom Input**  
    Enter any URL to encode.  
3. **Colour Controls**  
    Choose your own foreground and background colours.  
4. **PNG Export**  
    Download a high-quality PNG with your custom file name.

### Project Structure

```
/qr-generator
│
├── index.html
├── style.css
└── script.js
```

### How it Works
1. **Handling User Input**  
    The website listens for changes to the link, size, colors, and file name. Each control is connected to event listeners, allowing the interface to respond instantly as the user adjusts settings.

2. **Generating the QR Code**  
    When `Generate` is clicked, a new QRCode instance is created using `qrcode.js`. The library outputs the QR code as an `<img>` element.

3. **Updating the Preview**  
    The preview card refreshes dynamically to show the rendered QR code and display metadata, i.e., the chosen size, giving users real-time visual feedback.

4. **Exporting as PNG**  
    A helper function converts the QR’s image into a PNG data URL.  
        - Download creates a temporary anchor element to save the file.  
        - Copy converts the image into a blob and sends it to the Clipboard API.

5. **Regenerate and Clear Controls**  
    Regenerate rebuilds the QR code using the current settings.  
    Clear removes the QR preview entirely, resetting the workspace.
