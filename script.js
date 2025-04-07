
function showInfo(tipo) {
    const info = document.getElementById('info');
    if (tipo === 'homologacion') {
        info.innerHTML = '<h3>Homologación de inglés</h3><p>Debes enviar tu solicitud a través de la Mesa de Servicio con los documentos de soporte. Recibirás una carta de respuesta tras el análisis del área.</p>';
    } else if (tipo === 'validacion') {
        info.innerHTML = '<h3>Validación de inglés</h3><p>Solicita la validación también mediante la Mesa de Servicio. Recibirás una respuesta basada en los criterios establecidos en el reglamento estudiantil.</p>';
    } else if (tipo === 'contacto') {
        info.innerHTML = '<h3>Contacto</h3><p>Para atención personalizada, escribe a: <a href="https://mesadeservicio.autonoma.edu.co" target="_blank">Mesa de Servicio UAM</a></p>';
    } else {
        info.innerHTML = '<p>Selecciona una opción válida.</p>';
    }
}
