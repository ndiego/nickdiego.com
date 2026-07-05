---
name: voice
description: Write or revise blog posts in Nick Diego's voice. Use this whenever drafting a new post, rewriting a draft, or reviewing prose for this site so the writing sounds like Nick and not like an AI. Covers tone, structure, diction, and hard punctuation rules (notably: never use em-dashes).
---

# Writing in Nick's Voice

This skill captures how Nick Diego writes so you can draft or revise a post that sounds like him. It is about **voice and style**. For the mechanical side (file structure, frontmatter, MDX components, code blocks, callouts), follow [docs/content-authoring.md](../../../docs/content-authoring.md), [docs/components.md](../../../docs/components.md), and the `new-post` skill. Don't duplicate those here.

Use this when:

- Drafting a new post from an idea, outline, or transcript.
- Rewriting or tightening a draft.
- Reviewing prose and flagging anything that sounds off or AI-generated.

## Hard rules

These are non-negotiable. Check them before anything else.

1. **Never use em-dashes (—).** They are the clearest tell that an AI wrote something. Nick's older posts contain them; that habit is retired. Do not use en-dashes (–) as sentence punctuation either. Hyphens in compound words (`client-side`, `full-time`, `open-source`) are fine.
   - To replace an em-dash, do one of: end the sentence with a period and start a new one; use a comma; wrap the aside in parentheses; or use a colon before a list or payoff.
   - Before: `editing a 900+ line file has been a real struggle—something I can relate to.`
   - After: `editing a 900+ line file has been a real struggle. Something I can relate to.`
   - Before: `Seeing it—and now the Icon Block—reach this milestone is meaningful.`
   - After: `Seeing it reach this milestone, and now the Icon Block too, is meaningful.`

2. **No AI-tell phrasing.** Avoid: "It's not just X, it's Y," "In today's fast-paced world," "Whether you're a beginner or a pro," "at the end of the day," "game-changer," "supercharge," "unlock the power of," "a testament to," "in the realm of," "navigate the landscape." Avoid stacking rule-of-three lists for rhythm. Avoid opening consecutive sentences with "Moreover / Furthermore / Additionally."

3. **No filler words that inflate prose:** "seamless," "robust," "delve," "elevate," "leverage" (Nick uses "leverage" at most once in a whole post, prefer "use"), "boasts," "tapestry." Cut adjectives that don't earn their place.

4. **No emoji in the body.** Nick doesn't use them in posts.

5. **Straight quotes and apostrophes** in the MDX source (`'` and `"`), applied consistently within a post. Don't mix straight and curly.

## The voice in one paragraph

Nick writes like a generous, self-taught builder talking to a peer. First person, warm, direct, and practical. He is genuinely enthusiastic but never hypes. He credits other people constantly, links generously, and is honest about what didn't work, what's unfinished, and where he got lucky. Even a personal update lands a small takeaway. He respects the reader's time: short paragraphs, plain words, no padding.

## Tone

- **Humble and gracious.** Thank people by name and link them. Share credit ("Huge props to..."). Acknowledge luck and help.
- **Honest about limits.** Say when something is experimental, imperfect, overengineered, or not production-ready. "There are gaps." "I wouldn't recommend copy and pasting this code." This candor is core to his credibility.
- **Self-deprecating about failure, lightly.** "I was handily defeated. If you want to witness my failure, check out the recording."
- **Optimistic and hands-on**, especially about AI and open source. Framed as workflow and experiment, not revolution.
- **Encouraging.** Ends by nudging the reader to try it themselves and to reach out.

## Sentence and paragraph mechanics

- **Short paragraphs**, often one to three sentences. Single-sentence paragraphs are used deliberately for emphasis.
- **Fragments for rhythm and punch.** "In a matter of seconds. For free." "MDX, to be specific." "Easy as that." Use sparingly and intentionally.
- **Plain, concrete words.** Contractions throughout (I've, it's, don't, I'm).
- Starts sentences with **And, But, So** freely. Uses "However," "Therefore," "That said," "Thankfully," "In fact" as connectives, more so in technical posts.
- Vary sentence length. A couple of medium sentences, then a short one.

## Structure

Match length to substance. Personal updates run 200 to 600 words. Tutorials run 800 to 1,900. Never pad to hit a length.

**Openings (most important).** Start with a concrete, specific hook, usually time-anchored. Do not open with a thesis statement or a definition.

- "A little over a month ago, I was sitting in my office after Christmas."
- "Yesterday, I competed against Jessica Lyschik in the Speed Build Challenge."
- "This week, during WooCommerce Office Hours, I chatted with a community member about..."
- "I ran into a situation recently where I wanted to add border controls to Heading and Paragraph blocks."
- "One year ago, I released the Icon Block on WordPress.org after struggling to find..."

**Body.**

- *Technical / tutorial:* hook or problem → why it matters or why existing options fell short → a transition into the walkthrough ("So, with that said, let's get started.") → `##`/`###` sections with steps → code blocks, each followed by a plain-language explanation of the *why*, not just the *what* → honest caveats.
- *Personal / update:* set a concrete scene or moment → what happened → what it means to him (reflection) → gratitude → a forward look.
- *Announcement / release:* the milestone and a thank-you → grouped highlights under headings → what's next → invitation to contribute or follow.

**Closings.** End warmly with one of: an invitation to reach out ("Reach out at [@nickmdiego](https://x.com/nickmdiego)."), a thank-you to the community, encouragement to experiment ("get out there and start experimenting"), or a forward-looking note ("More to come."). Keep it short.

## Diction and domain style

- Words that sound like him: "cumbersome," "wizardry," "de facto," "scratches the surface," "dive in," "level up," "squashed" (bugs), "tending to," "get building."
- Capitalization conventions for this audience: **WordPress**, **Core** (WordPress Core), the **Editor** / **block editor**, **Gutenberg**, **Playground**. Product and project names as their owners style them.
- Link generously and inline: to people, projects, docs, and his own earlier posts. A post with zero links is a red flag.

## Frontmatter voice

- **Title:** sentence case (capitalize only the first word and proper nouns). An optional colon subtitle is fine. Examples: "A change of direction", "Stop struggling with cumbersome theme.json files", "The right time: Leaving Automattic".
- **Excerpt:** one to two complete sentences in his voice, concrete, no trailing ellipsis. It should make a specific promise the post keeps.
- **Categories:** reuse existing ones where possible: Personal, Projects, Blocks, Extensibility, AI, Tutorials, Tools, Speaking.

## Before you finish

Run this checklist:

- [ ] Zero em-dashes and en-dashes used as punctuation. Search the text for `—` and `–`.
- [ ] No AI-tell phrases or filler words from the Hard rules.
- [ ] Opens with a concrete, specific (ideally time-anchored) hook, not a thesis or definition.
- [ ] Paragraphs are short. At least one deliberate short sentence or fragment for rhythm.
- [ ] Credits and links to relevant people, projects, and docs.
- [ ] At least one honest caveat or limitation where the topic warrants it.
- [ ] Closes warmly with an invitation, thanks, or forward look.
- [ ] Straight quotes throughout. Contractions used naturally.
- [ ] Length fits the substance. Nothing is padded.
```
