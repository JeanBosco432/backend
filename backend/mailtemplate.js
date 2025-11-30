
function mailtemplate(contenue, note, nom) {
    return `
    <h2>Vous avez reçu un avis ⭐</h2>
    <p><strong>${nom}</strong> vous a laissé un avis avec une note de <strong>${note}/5</strong></p>
    
    <p><strong>Son avis :</strong></p>
    <blockquote style="border-left: 4px solid #2563eb; padding-left: 15px; margin: 15px 0;">
        <p>"${contenue}"</p>
    </blockquote>
    
    <p>Merci pour ce retour ! 🙏</p>
    `;
}

module.exports = mailtemplate;  