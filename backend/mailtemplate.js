function mailtemplate(contenue, note, nom, email) {
    return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; background-color: #f9f9f9; border-radius: 10px; border: 1px solid #e0e0e0;">
        <h2 style="color: #2563eb; text-align: center;">⭐ Nouveau avis reçu ⭐</h2>
        
        <p style="font-size: 16px; line-height: 1.5;">
            <strong>${nom}</strong> vous a laissé un avis avec une note de 
            <strong style="color: #f59e0b;">${note}/5</strong>
        </p>
        
        <div style="background-color: #ffffff; border-left: 4px solid #2563eb; padding: 15px; margin: 20px 0; border-radius: 5px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
            <p style="margin: 0; font-style: italic;">"${contenue}"</p>
        </div>
        
        <p style="font-size: 14px; color: #555;">Merci pour ce retour ! 🙏</p>
        
        <p style="font-size: 14px; color: #555;">
            Pour contacter l’utilisateur, cliquez sur ce lien : 
            <a href="mailto:${email}" style="color: #2563eb; text-decoration: none; font-weight: bold;">${email}</a>
        </p>
    </div>
    `;
}

module.exports = mailtemplate;
