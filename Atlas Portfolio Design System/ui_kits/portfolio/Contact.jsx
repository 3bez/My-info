// Contact — full-width ink. Inviting copy + friendly form.
function Contact() {
  const { SectionLabel, Field, Input, Textarea, Button, IconButton } = window.AtlasPortfolioDesignSystem_0beb6f;
  const { contact, identity, social } = window.PORTFOLIO;
  const [sent, setSent] = React.useState(false);
  const [errors, setErrors] = React.useState({});

  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, [sent]);

  function submit(e) {
    e.preventDefault();
    const fd = new FormData(e.target);
    const next = {};
    if (!fd.get("name") || !fd.get("name").trim()) next.name = "Your name helps me reply properly.";
    if (!fd.get("message") || !fd.get("message").trim()) next.message = "Tell me a little about it.";
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  }

  return (
    <section className="section section--ink grain" id="contact">
      <div className="container">
        <div className="contact__grid">
          <div className="contact__head reveal">
            <SectionLabel number="05" tone="ink">Contact</SectionLabel>
            <h2 className="sec-title" style={{ marginTop: "1.25rem" }}>{contact.headline}</h2>
            <p className="contact__line">{contact.line}</p>
            <div className="contact__direct">
              <a className="contact__email" href={"mailto:" + identity.email}>
                <i data-lucide="mail"></i>{identity.email}
              </a>
              <div className="contact__socials">
                {social.map((s) => (
                  <IconButton key={s.label} label={s.label} href={s.href} tone="ink">
                    <i data-lucide={s.icon}></i>
                  </IconButton>
                ))}
              </div>
            </div>
          </div>

          <div className="reveal">
            {sent ? (
              <div className="form">
                <div className="form__success">
                  <span className="check"><i data-lucide="check"></i></span>
                  <h3>Message sent.</h3>
                  <p>Thanks for reaching out — I'll get back to you within a day.</p>
                </div>
              </div>
            ) : (
              <form className="form" onSubmit={submit} noValidate>
                <div className="form__row">
                  <Field label="Name" htmlFor="c-name" required tone="ink" error={errors.name}>
                    <Input id="c-name" name="name" tone="ink" error={!!errors.name} placeholder="Your name" />
                  </Field>
                  <Field label="Email" htmlFor="c-email" optional tone="ink">
                    <Input id="c-email" name="email" type="email" tone="ink" placeholder="you@company.com" />
                  </Field>
                </div>
                <Field label="Phone" htmlFor="c-phone" optional tone="ink">
                  <Input id="c-phone" name="phone" type="tel" tone="ink" placeholder="+966 ..." />
                </Field>
                <Field label="Message" htmlFor="c-msg" required tone="ink" error={errors.message}>
                  <Textarea id="c-msg" name="message" tone="ink" rows={5} error={!!errors.message}
                    placeholder="What are you trying to ship?" />
                </Field>
                <Button type="submit" variant="primary" size="lg" fullWidth
                  iconRight={<i data-lucide="send"></i>}>Send message</Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
window.Contact = Contact;
