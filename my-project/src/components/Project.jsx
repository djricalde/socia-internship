function Projects() {
    const projects: Project[] = [
      {
        id: "fullstack-app",
        title: "Full-Stack Dashboard",
        description:
          "A comprehensive data management system with secure authentication and real-time updates.",
        stack: ["React", "Express", "PostgreSQL", "Tailwind"],
        demoUrl: "https://example.com",
        repoUrl: "https://github.com/example",
      },
      {
        id: "api-service",
        title: "RESTful API Engine",
        description:
          "A robust backend service designed for high throughput, featuring JWT auth and rate limiting.",
        stack: ["Node.js", "Express", "MongoDB", "Redis"],
        demoUrl: "https://example.com",
        repoUrl: "https://github.com/example",
      },
      {
        id: "interface",
        title: "Dynamic UI System",
        description:
          "A highly responsive component library focused on accessibility and motion design.",
        stack: ["React", "TypeScript", "Framer Motion"],
        demoUrl: "https://example.com",
        repoUrl: "https://github.com/example",
      },
    ];
  
    return (
      <section
        className="mx-auto max-w-6xl scroll-mt-24 px-4 py-14 sm:px-6 sm:py-18"
        id="projects"
      >
        <SectionHeading
          kicker="Work"
          title="Project Showcase"
          subtitle="End-to-end applications built with a focus on performance, security, and exceptional user experience."
        />
  
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((p) => (
            <motion.div key={p.id} variants={item}>
              <Card
                className="group gradient-border noise flex h-full flex-col rounded-3xl bg-card/60 p-5 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md"
                data-testid={`card-project-${p.id}`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div
                      className="font-serif text-lg font-semibold tracking-tight"
                      data-testid={`text-project-title-${p.id}`}
                    >
                      {p.title}
                    </div>
                    <p
                      className="mt-2 text-sm text-muted-foreground"
                      data-testid={`text-project-desc-${p.id}`}
                    >
                      {p.description}
                    </p>
                  </div>
                  <div className="grid h-10 w-10 place-items-center shrink-0 rounded-2xl bg-muted text-foreground transition group-hover:bg-primary group-hover:text-primary-foreground">
                    <ExternalLink className="h-5 w-5" />
                  </div>
                </div>
  
                <div className="mt-auto pt-6">
                  <div className="flex flex-wrap gap-2">
                    {p.stack.map((t) => (
                      <Badge key={t} variant="secondary" data-testid={`badge-stack-${p.id}-${t}`}>
                        {t}
                      </Badge>
                    ))}
                  </div>
  
                  <div className="mt-5 grid grid-cols-2 gap-2">
                    <a
                      href={p.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      data-testid={`link-demo-${p.id}`}
                      className="flex"
                    >
                      <Button className="w-full rounded-xl" data-testid={`button-demo-${p.id}`}>
                        Demo
                      </Button>
                    </a>
                    <a
                      href={p.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      data-testid={`link-repo-${p.id}`}
                      className="flex"
                    >
                      <Button
                        variant="outline"
                        className="w-full rounded-xl"
                        data-testid={`button-repo-${p.id}`}
                      >
                        Repo
                      </Button>
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>
    );
  }