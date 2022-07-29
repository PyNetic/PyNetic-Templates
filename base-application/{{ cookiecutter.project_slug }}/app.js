/*
Main App

Sources:
    Pyodide: https://pyodide.org/en/stable/
    testdriven.io: https://testdriven.io/blog/build-spa-with-python-part-3/
*/

// load pyodide.js
importScripts("https://cdn.jsdelivr.net/pyodide/v0.20.0/full/pyodide.js");

// Initialize pyodide and load Pandas
let pyodide = await loadPyodide();

// Import the built code
await self.pyodide.runPythonAsync(`
    from pyodide.http import pyfetch
    response = await pyfetch("main.py")
    with open("main.py", "wb") as f:
        f.write(await response.bytes())
`)

// Importing fetched py module
pkg = pyodide.pyimport("main");