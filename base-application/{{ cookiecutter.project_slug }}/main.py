from pynetic import Application, document

app = Application(
    target=document.getElementById("app"),
    routes="/routes",
)
