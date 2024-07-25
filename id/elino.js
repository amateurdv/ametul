// Initialize an empty Map
fh = new Map();

// Split the event names string into an array
$i = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

// Example: Adding event listeners using the Map and array
document.addEventListener("DOMContentLoaded", () => {
  // For each event name, add an entry to the Map with a dummy handler
  $i.forEach(eventName => {
    const handler = (event) => {
      console.log(`Event triggered: ${event.type}`);
    };
    
    // Add handler to the Map
    fh.set(eventName, handler);
    
    // Attach event listener to the document for demonstration purposes
    document.addEventListener(eventName, handler);
  });
  
  // Example function to remove all event listeners stored in the Map
  function removeAllEventListeners() {
    $i.forEach(eventName => {
      const handler = fh.get(eventName);
      if (handler) {
        document.removeEventListener(eventName, handler);
      }
    });
  }
  
  // Call the function to remove all event listeners after 10 seconds (for demonstration)
  setTimeout(removeAllEventListeners, 10000);
});
