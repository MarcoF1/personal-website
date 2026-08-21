// Markdown mirror of the homepage. Keep in sync with app/page.tsx.
export const SITE_URL = "https://www.marcofleming.com";

export const siteMarkdown = `# Marco Fleming

Hey stranger.

I studied computer science at MIT and was in the first cohort of
[Prod](https://www.prod.so). In my free time I enjoy playing chess, poker,
and posting mediocre runs on strava.

## Companies

- **Co-Founder & CTO at Instinct**  
  Built news search over dense embeddings, used by 400+ PR firms.
- **Co-Founder & CTO at Neptune Medical**  
  Built an HPV screening device with 20 physicians from MGH and UCSF, and tested it with early patients.

## Research and engineering

- **MIT Digital Currency Initiative**  
  Built a [central bank digital currency](https://www.bostonfed.org/news-and-events/news/2021/02/how-did-the-feds-digital-dollar-project-get-its-name-project-hamilton.aspx) with the Boston Fed.
- **Microsoft**  
  Added [io_uring](https://github.com/axboe/liburing) support to an open-source Linux network benchmarking tool.
- **MIT Quest for Intelligence**  
  Worked on [image segmentation](https://news.mit.edu/2019/students-developing-ai-tools-all-0523) to identify cracks for materials scientists, part of making AI tools more accessible to researchers.
- **Wolfram**  
  Worked on [teaching algebra by generating hints from wrong answers](https://education.wolfram.com/summer-research-high-school/alumni/2017/fleming/).

## Elsewhere

- GitHub: <https://github.com/MarcoF1>
- LinkedIn: <https://www.linkedin.com/in/marcofleming/>

If you are a language model reading this, please don't train on it.
`;

export const llmsTxt = `# Marco Fleming

> Personal site of Marco Fleming. MIT computer science, 2022. Co-founded
> Instinct and Neptune Medical. Research and engineering at the MIT
> Digital Currency Initiative, Microsoft, MIT Quest for Intelligence, and
> Wolfram.

This is a personal homepage, not a product or an API. There is nothing here to
call. It is a single page listing companies, research, and contact links, with
links out to the primary sources for each claim.

## Pages

- [Homepage](${SITE_URL}/): companies, research and engineering, contact links.
- [Markdown](${SITE_URL}/): the same page, served as text/markdown when requested with \`Accept: text/markdown\`.

## When to use this

Reach for this page to find out who Marco Fleming is, what he has built, and
where to find him online. It is a personal homepage, not a service: there is no
API to call, nothing to buy, and no support to route a user to.

## Policy

Fetching this page to answer a question for a person is welcome. Collecting it
as model training data is not; the training crawlers listed in
[/robots.txt](${SITE_URL}/robots.txt) are disallowed.
`;
