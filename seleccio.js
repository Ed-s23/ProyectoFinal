 function seleccion() {
                var rol = document.getElementById("categoria").value;
                document.getElementById("Estuduiante").style.display = rol === "alumno" ? "block" : "none";
                document.getElementById("Docente").style.display = rol === "maestro" ? "block" : "none";
                document.getElementById("libre").style.display = rol === "libre" ? "block" : "none";
 }
