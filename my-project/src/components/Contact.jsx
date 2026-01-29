function Contact() {
    const [sending, setSending] = useState(false);
  
    function onSubmit(e: React.FormEvent) {
      e.preventDefault();
      setSending(true);
  
      window.setTimeout(() => {
        setSending(false);
        toast({
          title: "Message sent",
          description:
            "I'll get back to you as soon as possible.",
        });
        (e.target as HTMLFormElement).reset();
      }, 700);
    }
  
    return (
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-18" id="contact">
        <SectionHeading
          kicker="Reach Out"
          title="Let’s connect"
          subtitle="Interested in working together or just want to say hi? My inbox is always open."
        />
  
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="rounded-3xl border bg-card p-6 shadow-sm">
            <form onSubmit={onSubmit} className="grid gap-4" data-testid="form-contact">
              <div className="grid gap-2">
                <label className="text-sm font-medium" htmlFor="name" data-testid="label-name">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="How should I call you?"
                  required
                  data-testid="input-name"
                />
              </div>
  
              <div className="grid gap-2">
                <label className="text-sm font-medium" htmlFor="email" data-testid="label-email">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  data-testid="input-email"
                />
              </div>
  
              <div className="grid gap-2">
                <label
                  className="text-sm font-medium"
                  htmlFor="message"
                  data-testid="label-message"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="What's on your mind?"
                  rows={5}
                  required
                  data-testid="input-message"
                />
              </div>
  
              <Button
                type="submit"
                disabled={sending}
                className="rounded-xl"
                data-testid="button-send-message"
              >
                {sending ? "Sending..." : "Send message"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </Card>
  
          <div className="grid gap-4">
            <Card className="gradient-border noise rounded-3xl bg-card/60 p-6 shadow-sm backdrop-blur">
              <div className="text-sm font-medium" data-testid="text-social-title">
                Social Channels
              </div>
              <p className="mt-2 text-sm text-muted-foreground" data-testid="text-social-sub">
                Where to find my latest updates and projects.
              </p>
  
              <div className="mt-5 grid gap-2">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-2xl border bg-background/50 px-4 py-3 text-sm font-medium transition hover:bg-muted/60"
                  data-testid="link-github"
                >
                  <span className="inline-flex items-center gap-2">
                    <Github className="h-4 w-4" /> GitHub
                  </span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </a>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-2xl border bg-background/50 px-4 py-3 text-sm font-medium transition hover:bg-muted/60"
                  data-testid="link-linkedin"
                >
                  <span className="inline-flex items-center gap-2">
                    <Linkedin className="h-4 w-4" /> LinkedIn
                  </span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </a>
                <a
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-2xl border bg-background/50 px-4 py-3 text-sm font-medium transition hover:bg-muted/60"
                  data-testid="link-facebook"
                >
                  <span className="inline-flex items-center gap-2">
                    <Facebook className="h-4 w-4" /> Facebook
                  </span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </a>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-2xl border bg-background/50 px-4 py-3 text-sm font-medium transition hover:bg-muted/60"
                  data-testid="link-instagram"
                >
                  <span className="inline-flex items-center gap-2">
                    <Instagram className="h-4 w-4" /> Instagram
                  </span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </a>
                <a
                  href="mailto:hello@example.com"
                  className="flex items-center justify-between rounded-2xl border bg-background/50 px-4 py-3 text-sm font-medium transition hover:bg-muted/60"
                  data-testid="link-email"
                >
                  <span className="inline-flex items-center gap-2">
                    <Mail className="h-4 w-4" /> Email
                  </span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </a>
              </div>
            </Card>
  
            <Card className="rounded-3xl border bg-card p-6 shadow-sm">
              <div className="text-sm font-medium" data-testid="text-availability-title">
                Collaboration
              </div>
              <p className="mt-2 text-sm text-muted-foreground" data-testid="text-availability-note">
                I'm passionate about building impactful software. If you have a project
                in mind or just want to chat tech, feel free to reach out.
              </p>
            </Card>
          </div>
        </div>
      </section>
    );
  }