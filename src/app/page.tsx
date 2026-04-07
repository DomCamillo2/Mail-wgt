import { sendFeedback } from "@/actions/sendFeedback";

export default function HomePage() {
  return (
    <main className="page">
      <section className="card">
        <h1>Feedback senden</h1>
        <p>Diese Nachricht wird ueber Resend an info@wasgehttueb.app gesendet.</p>

        <form action={sendFeedback} className="form">
          <label htmlFor="email">Deine E-Mail</label>
          <input id="email" name="email" type="email" required />

          <label htmlFor="message">Nachricht</label>
          <textarea id="message" name="message" rows={6} required />

          <button type="submit">Absenden</button>
        </form>
      </section>
    </main>
  );
}
