export default function handler(req, res) {
  // Solo permitimos peticiones POST por seguridad
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const { botonId } = req.body;

  // Validamos en el servidor que sea estrictamente el botón 391
  if (botonId === 391) {
    return res.status(200).json({
      exito: true,
      mensaje: 'Enviar la Palabra "SOL" es lo ideal y así obtener una pista para continuar'
    });
  } else {
    return res.status(200).json({
      exito: false,
      mensaje: 'Nada por aquí...'
    });
  }
}