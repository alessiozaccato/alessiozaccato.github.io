

function Contact() {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <h2>Contattami</h2>
                <p>Sono sempre disponibile per nuove opportunità o collaborazioni. Non esitare a contattarmi!</p>
                <div className="contact-links">
                    <p>Email: <a href="mailto:alessiozaccato@gmail.com">alessiozaccato@gmail.com</a></p>
                    <p>LinkedIn: <a href="https://www.linkedin.com/in/alessiozaccato" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/alessiozaccato</a></p>
                    <p>GitHub: <a href="https://github.com/alessiozaccato" target="_blank" rel="noopener noreferrer">https://github.com/alessiozaccato</a></p>
                    {/* Potresti aggiungere anche Twitter, un numero di telefono, ecc. */}
                </div>
                {/* Esempio di un form di contatto semplice (richiede un backend o un servizio come Formspree) */}
                {/*
        <form className="contact-form" action="https://formspree.io/f/tuocode" method="POST">
          <input type="text" name="name" placeholder="Il tuo nome" required />
          <input type="email" name="email" placeholder="La tua email" required />
          <textarea name="message" placeholder="Il tuo messaggio" rows="5" required></textarea>
          <button type="submit" className="btn btn-primary">Invia Messaggio</button>
        </form>
        */}
            </div>
        </section>
    );
}

export default Contact;