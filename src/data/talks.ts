export type TalkCategory =
  | "conference"
  | "live stream"
  | "podcast"
  | "video"
  | "workshop";

export interface Talk {
  title: string;
  event: string;
  date: string;
  category: TalkCategory;
  url: string | null;
  recordingUrl: string | null;
  featured: boolean;
}

export const talks: Talk[] = [
  {
    title: "WordPress 6.9 Walkthrough",
    event: "WordPress.com YouTube",
    date: "2025-11-25",
    category: "video",
    url: "https://www.youtube.com/watch?v=gVaEg_m6uak",
    recordingUrl: "https://www.youtube.com/watch?v=gVaEg_m6uak",
    featured: false,
  },
  {
    title: "A WordPress Speed Build Challenge",
    event: "WordCamp Asia 2025",
    date: "2025-02-20",
    category: "conference",
    url: "https://asia.wordcamp.org/2025/speaker/nick-diego/",
    recordingUrl: "https://www.youtube.com/live/2yrL786f4rc?t=15736s",
    featured: true,
  },
  {
    title: "Revolutionize Your WordPress Development with Cursor AI",
    event: "WordPress.com YouTube",
    date: "2025-01-25",
    category: "video",
    url: "https://www.youtube.com/@wordpressdotcom/videos",
    recordingUrl: "https://www.youtube.com/watch?v=3_TiyKdPNq4",
    featured: true,
  },
  {
    title:
      "Developer Hours: Everything you need to know about WordPress Playground",
    event: "Learn WordPress",
    date: "2024-12-17",
    category: "live stream",
    url: "https://www.meetup.com/learn-wordpress-online-workshops/events/304881623/",
    recordingUrl: "https://www.youtube.com/watch?v=jTKMfM4tEqk",
    featured: false,
  },
  {
    title: "AI Takes On HUMAN in WordPress Speed Build Showdown",
    event: "WordPress.org YouTube",
    date: "2024-12-11",
    category: "live stream",
    url: "https://www.youtube.com/@WordPress/streams",
    recordingUrl: "https://www.youtube.com/watch?v=vjw6KWahFlk",
    featured: true,
  },
  {
    title:
      "Developer Hours: Improve your workflows with WordPress development tools",
    event: "Learn WordPress",
    date: "2024-12-03",
    category: "live stream",
    url: "https://www.meetup.com/learn-wordpress-online-workshops/events/304668126/",
    recordingUrl: "https://youtu.be/WibXCMaG8J0",
    featured: false,
  },
  {
    title: "WordPress 6.7 Highlights and Q&A",
    event: "WordPress.org YouTube",
    date: "2024-11-05",
    category: "live stream",
    url: "https://www.youtube.com/@WordPress/streams",
    recordingUrl: "https://www.youtube.com/watch?v=K6N098ElnYU",
    featured: false,
  },
  {
    title: "Developer Hours: How to Simplify Client Editing in WordPress",
    event: "WordPress.org YouTube",
    date: "2024-10-15",
    category: "live stream",
    url: "https://www.meetup.com/learn-wordpress-online-workshops/events/303829520/",
    recordingUrl: "https://youtube.com/live/6lBIkf3xNDw",
    featured: false,
  },
  {
    title:
      "The Power of Extending the WordPress Editor: A Block Visibility Showcase",
    event: "WordCamp US 2024",
    date: "2024-09-18",
    category: "conference",
    url: "https://canada.wordcamp.org/2024/session/your-wordpress-your-way-curating-the-editor-experience/",
    recordingUrl: "https://www.youtube.com/watch?v=j84uRtUfDUM&t=4135s",
    featured: true,
  },
  {
    title: "The Pros and Cons of Using Block WordPress Child Themes",
    event: "Press This",
    date: "2024-08-06",
    category: "podcast",
    url: "https://podcasts.apple.com/us/podcast/press-this-wordpress-community-podcast/id1483630576",
    recordingUrl:
      "https://podcasts.apple.com/us/podcast/the-pros-and-cons-of-using-block-wordpress-child-themes/id1483630576?i=1000664847602",
    featured: false,
  },
  {
    title:
      "Developer Hours: Do you really need a custom block? Let's explore alternatives",
    event: "Learn WordPress",
    date: "2024-07-23",
    category: "live stream",
    url: "https://www.meetup.com/learn-wordpress-online-workshops/events/301834541/",
    recordingUrl: "https://www.youtube.com/watch?v=KmDozCmu1l0",
    featured: false,
  },
  {
    title: "Your WordPress, Your Way: Curating the Editor Experience",
    event: "WordCamp Canada 2024",
    date: "2024-07-11",
    category: "conference",
    url: "https://canada.wordcamp.org/2024/session/your-wordpress-your-way-curating-the-editor-experience/",
    recordingUrl: null,
    featured: false,
  },
  {
    title:
      "Developer Hours: Editor unification and extensibility in WordPress 6.6",
    event: "Learn WordPress",
    date: "2024-07-09",
    category: "live stream",
    url: "https://www.meetup.com/learn-wordpress-online-workshops/events/301860423/",
    recordingUrl: "https://youtu.be/V6-yg-GKTZg",
    featured: false,
  },
  {
    title: "Developer Hours: What's new for theme developers in WordPress 6.6",
    event: "Learn WordPress",
    date: "2024-06-25",
    category: "live stream",
    url: "https://www.meetup.com/learn-wordpress-online-workshops/events/301469831/",
    recordingUrl: "https://www.youtube.com/watch?v=OyYdkXAx7qw",
    featured: false,
  },
  {
    title:
      "Developer Hours: Exploring Synced Pattern Overrides in WordPress 6.6",
    event: "Learn WordPress",
    date: "2024-06-11",
    category: "live stream",
    url: "https://www.meetup.com/learn-wordpress-online-workshops/events/301323283/",
    recordingUrl: "https://www.youtube.com/watch?v=fNU2Nhw2QE0",
    featured: false,
  },
  {
    title:
      "Developer Hours: Alternatives to Custom Meta Boxes in the Block Editor",
    event: "Learn WordPress",
    date: "2024-05-14",
    category: "live stream",
    url: "https://www.meetup.com/learn-wordpress-online-workshops/events/300590175/",
    recordingUrl: "https://youtu.be/OKDl_gB-IwY",
    featured: false,
  },
  {
    title: "Developer Hours: Exploring Block Hooks in WordPress 6.5",
    event: "Learn WordPress",
    date: "2024-03-26",
    category: "live stream",
    url: "https://www.meetup.com/learn-wordpress-online-workshops/events/299677581/",
    recordingUrl: "https://www.youtube.com/watch?v=ezPHiyhhaoQ",
    featured: false,
  },
  {
    title:
      "Empower your development: the breakthrough features of WordPress 6.5 unleashed",
    event: "DE{CODE} 2024",
    date: "2024-03-19",
    category: "conference",
    url: null,
    recordingUrl: "https://www.youtube.com/watch?v=rkyuI5n0Z5c&t=1s",
    featured: false,
  },
  {
    title: "Developer Hours: JavaScript for modern WordPress development",
    event: "Learn WordPress",
    date: "2024-02-13",
    category: "live stream",
    url: "https://www.meetup.com/learn-wordpress-online-workshops/events/298634428/",
    recordingUrl: "https://www.youtube.com/watch?v=c3Uphamlb3g",
    featured: false,
  },
  {
    title: "Developer Hours: Build your first WordPress block",
    event: "Learn WordPress",
    date: "2024-01-16",
    category: "live stream",
    url: "https://www.meetup.com/learn-wordpress-online-workshops/events/298191982/",
    recordingUrl: "https://youtu.be/zSU-JOGDcGs",
    featured: false,
  },
  {
    title:
      "Developer Hours: Modern WordPress development with the wp-scripts package",
    event: "Learn WordPress",
    date: "2023-12-19",
    category: "live stream",
    url: "https://www.meetup.com/learn-wordpress-online-workshops/events/297143342/",
    recordingUrl: "https://youtu.be/cakxgM2UgbE",
    featured: false,
  },
  {
    title: "Developer Hours: How to extend core WordPress blocks",
    event: "Learn WordPress",
    date: "2023-11-29",
    category: "live stream",
    url: "https://www.meetup.com/learn-wordpress-online-workshops/events/297122886/",
    recordingUrl: "https://youtu.be/M9KKpIgNMNQ",
    featured: false,
  },
  {
    title:
      "Developer Hours: Building better blocks with the create-block package",
    event: "Learn WordPress",
    date: "2023-09-27",
    category: "live stream",
    url: "https://www.meetup.com/learn-wordpress-online-workshops/events/294550599/",
    recordingUrl: "https://www.youtube.com/watch?v=TtmdYbHKDL0",
    featured: false,
  },
  {
    title:
      "Builder Basics: Goodbye Reusable Blocks—Hello Synced Patterns (and more)",
    event: "Learn WordPress",
    date: "2023-07-17",
    category: "live stream",
    url: "https://www.meetup.com/learn-wordpress-online-workshops/events/294550599/",
    recordingUrl:
      "https://wordpress.tv/2023/07/18/builder-basics-goodbye-reusable-blocks-hello-synced-patterns-and-more/",
    featured: false,
  },
  {
    title:
      "Collaborative Writing in Higher Ed and Getting Ready for Gutenberg Phase 3",
    event: "WPCampus 2023",
    date: "2023-07-13",
    category: "conference",
    url: "https://2023.wpcampus.org/schedule/collaborative-writing-in-higher-ed-and-getting-ready-for-gutenberg-phase-3/",
    recordingUrl: null,
    featured: false,
  },
  {
    title:
      "Modern WordPress Building Techniques: Full Site Editing in Higher Ed",
    event: "WPCampus 2023",
    date: "2023-07-12",
    category: "conference",
    url: "https://2023.wpcampus.org/schedule/workshops/modern-wordpress-building-techniques-full-site-editing-in-higher-ed/",
    recordingUrl: null,
    featured: false,
  },
  {
    title: "Developer Hours: Exploring Editor Extensibility",
    event: "Learn WordPress",
    date: "2023-06-30",
    category: "live stream",
    url: "https://www.meetup.com/learn-wordpress-online-workshops/events/294226978/",
    recordingUrl:
      "https://wordpress.tv/2023/06/30/developer-hours-exploring-editor-extensibility/",
    featured: false,
  },
  {
    title: "Hallway Hangout: Let's chat about WordPress 6.3 and block theming",
    event: "Learn WordPress",
    date: "2023-06-15",
    category: "live stream",
    url: "https://www.meetup.com/learn-wordpress-online-workshops/events/294063583/https://wptv.wordpress.com/2023/06/15/hallway-hangout-lets-chat-about-wordpress-6-3-and-block-theming/",
    recordingUrl:
      "https://wptv.wordpress.com/2023/06/15/hallway-hangout-lets-chat-about-wordpress-6-3-and-block-theming/",
    featured: false,
  },
  {
    title:
      "Hallway Hangout: Curating the editor and building block themes for clients",
    event: "Learn WordPress",
    date: "2023-05-25",
    category: "live stream",
    url: "https://www.meetup.com/learn-wordpress-online-workshops/events/293612715/",
    recordingUrl:
      "https://wordpress.tv/2023/05/25/hallway-hangout-curating-the-editor-and-building-block-themes-for-clients/",
    featured: false,
  },
  {
    title:
      "Building the Future: Exploring the Power of Next Generation Website & Page Builders",
    event: "Atarim Web Agency Summit 2023",
    date: "2023-04-27",
    category: "conference",
    url: "https://atarim.io/summit/all-access-pass/",
    recordingUrl: null,
    featured: false,
  },
  {
    title: "#82 Gutenberg 15.6 and proposed schedule for WordPress 6.3",
    event: "Gutenberg Changelog",
    date: "2023-04-20",
    category: "podcast",
    url: "https://gutenbergtimes.com/podcast/",
    recordingUrl:
      "https://gutenbergtimes.com/podcast/gutenberg-changelog-82-gutenberg-15-6-and-proposed-schedule-for-wordpress-6-3/",
    featured: false,
  },
  {
    title: "Builder Basics: Block Styles vs. Block Variations",
    event: "Learn WordPress",
    date: "2023-02-28",
    category: "live stream",
    url: "https://www.meetup.com/learn-wordpress-online-workshops/events/291095902/",
    recordingUrl:
      "https://wordpress.tv/2023/03/01/builder-basics-block-styles-vs-block-variations/",
    featured: false,
  },
  {
    title: "Builder Basics: Adding Custom CSS to Block Themes",
    event: "Learn WordPress",
    date: "2023-02-07",
    category: "live stream",
    url: "https://www.meetup.com/learn-wordpress-online-workshops/events/291094663/",
    recordingUrl:
      "https://wordpress.tv/2023/02/08/builder-basics-adding-custom-css-to-block-themes/",
    featured: false,
  },
  {
    title: "#79 WordPress 6.2, Gutenberg plugin versions 15.0 and 15.1",
    event: "Gutenberg Changelog",
    date: "2023-02-05",
    category: "podcast",
    url: "https://gutenbergtimes.com/podcast/",
    recordingUrl:
      "https://gutenbergtimes.com/podcast/gutenberg-changelog-79-wordpress-6-2-gutenberg-plugin-versions-15-0-and-15-1/",
    featured: false,
  },
  {
    title: "Episode 16 – Unlocking the Power of WordPress Blocks",
    event: "Delicious Brainwaves",
    date: "2023-01-17",
    category: "podcast",
    url: "https://podcast.deliciousbrains.com/",
    recordingUrl:
      "https://podcast.deliciousbrains.com/podcasts/49745/episodes/episode-16-unlocking-the-power-of-wordpress-blocks",
    featured: false,
  },
  {
    title: "Word Around the Campfire – WordPress News Roundup",
    event: "Press This",
    date: "2022-12-27",
    category: "podcast",
    url: "https://podcasts.apple.com/us/podcast/press-this-wordpress-community-podcast/id1483630576",
    recordingUrl:
      "https://podcasts.apple.com/us/podcast/word-around-the-campfire-wordpress-news-roundup-state/id1483630576?i=1000591389445",
    featured: false,
  },
  {
    title: "Builder Basics: Demystifying theme.json and Global Styles",
    event: "Learn WordPress",
    date: "2022-12-08",
    category: "live stream",
    url: "https://www.meetup.com/learn-wordpress-online-workshops/events/289521234/",
    recordingUrl:
      "https://wordpress.tv/2022/12/09/builder-basics-demystifying-theme-json-and-global-styles/",
    featured: false,
  },
  {
    title: "Builder Basics: Building with Columns, Groups, Rows and Stacks",
    event: "Learn WordPress",
    date: "2022-12-01",
    category: "live stream",
    url: "https://www.meetup.com/learn-wordpress-online-workshops/events/289520991",
    recordingUrl:
      "https://wordpress.tv/2022/12/02/builder-basics-building-with-columns-groups-rows-and-stacks/",
    featured: false,
  },
  {
    title: "Builder Basics: Exploring Block Layout, Alignment, and Dimensions",
    event: "Learn WordPress",
    date: "2022-11-17",
    category: "live stream",
    url: "https://www.meetup.com/learn-wordpress-online-workshops/events/289520419/",
    recordingUrl:
      "https://wordpress.tv/2022/12/09/builder-basics-demystifying-theme-json-and-global-styles/",
    featured: false,
  },
  {
    title: "Builder Basics: How to Curate the Editing Experience",
    event: "Learn WordPress",
    date: "2022-11-10",
    category: "live stream",
    url: "https://www.meetup.com/learn-wordpress-online-workshops/events/289518084/",
    recordingUrl:
      "https://wordpress.tv/2022/11/10/builder-basics-how-to-curate-the-editing-experience/",
    featured: false,
  },
  {
    title: "Episode 41: WordPress 6.1 Sneak Peek with Special Guest Nick Diego",
    event: "WP Briefing",
    date: "2022-10-17",
    category: "podcast",
    url: "https://podcasts.apple.com/us/podcast/press-this-wordpress-community-podcast/id1483630576",
    recordingUrl:
      "https://wordpress.org/news/2022/10/episode-41-wordpress-6-1-sneak-peek-with-special-guest-nick-diego/",
    featured: false,
  },
  {
    title:
      "Nick Diego on Why You Should Be Excited About the Possibilities of WordPress Blocks",
    event: "WP Tavern Jukebox",
    date: "2022-10-12",
    category: "podcast",
    url: "https://wptavern.com/podcast",
    recordingUrl:
      "https://wptavern.com/podcast/46-nick-diego-on-why-you-should-be-excited-about-the-possibilities-of-wordpress-blocks",
    featured: false,
  },
  {
    title: "Let's Build a Custom Block in One Hour",
    event: "Learn WordPress",
    date: "2022-09-20",
    category: "live stream",
    url: "https://www.meetup.com/learn-wordpress-online-workshops/events/288401676/",
    recordingUrl:
      "https://wordpress.tv/2022/09/21/lets-build-a-custom-block-in-one-hour/",
    featured: true,
  },
  {
    title: "Let's Build a Custom Block In 15 Minutes",
    event: "WordCamp US 2022",
    date: "2022-09-09",
    category: "conference",
    url: "https://us.wordcamp.org/2022/session/lets-build-a-custom-block-in-15-minutes/",
    recordingUrl: "https://www.youtube.com/watch?v=sXGZCDbvYQ4",
    featured: true,
  },
  {
    title: "#72 Gutenberg 13.9, 14.0, WordPress 6.0.2, Themes and Design Tools",
    event: "Gutenberg Changelog",
    date: "2022-09-04",
    category: "podcast",
    url: "https://gutenbergtimes.com/podcast/",
    recordingUrl:
      "https://gutenbergtimes.com/podcast/gutenberg-changelog-72-gutenberg-14-0/",
    featured: false,
  },
  {
    title: "Exploring the Power of Block Variations",
    event: "Learn WordPress",
    date: "2022-08-25",
    category: "live stream",
    url: "https://www.meetup.com/learn-wordpress-online-workshops/events/287686993/",
    recordingUrl:
      "https://wordpress.tv/2022/08/26/nick-diego-exploring-the-power-of-block-variations/",
    featured: false,
  },
  {
    title: "This Week in WordPress #221",
    event: "WP Builds",
    date: "2022-08-23",
    category: "podcast",
    url: "https://wpbuilds.com/",
    recordingUrl: "https://wpbuilds.com/2022/08/23/this-week-in-wordpress-221/",
    featured: false,
  },
  {
    title: "Taking Block Patterns to the Next Level",
    event: "Learn WordPress",
    date: "2022-08-18",
    category: "live stream",
    url: "https://www.meetup.com/learn-wordpress-online-workshops/events/287686793/",
    recordingUrl:
      "https://wordpress.tv/2022/08/19/nick-diego-taking-block-patterns-to-the-next-level/",
    featured: false,
  },
  {
    title: "WordPress Core Updates With Nick Diego",
    event: "Torque Social Hour",
    date: "2022-08-03",
    category: "podcast",
    url: "https://www.youtube.com/playlist?list=PLbLnaL8bXQ8eHjHS_wp2_G4gGNwF3f584",
    recordingUrl: "https://www.youtube.com/watch?v=rQZSGqv1DFs",
    featured: false,
  },
  {
    title:
      "Builder Basics: Let's Build a Custom Theme (No Coding Required) – Part 2",
    event: "Learn WordPress",
    date: "2022-07-28",
    category: "live stream",
    url: "https://www.meetup.com/learn-wordpress-online-workshops/events/287169611/",
    recordingUrl:
      "https://wordpress.tv/2022/08/02/nick-diego-builder-basics-lets-build-a-custom-theme-no-coding-required-part-2/",
    featured: false,
  },
  {
    title: "Curating the Editor Experience",
    event: "Learn WordPress",
    date: "2022-07-20",
    category: "live stream",
    url: "https://www.meetup.com/learn-wordpress-online-workshops/events/287167244/",
    recordingUrl:
      "https://wordpress.tv/2022/07/22/nick-diego-curating-the-editor-experience/",
    featured: false,
  },
  {
    title: "EP423 – Converting your site to FSE",
    event: "WPwatercooler",
    date: "2022-07-15",
    category: "podcast",
    url: "https://www.wpwatercooler.com/",
    recordingUrl:
      "https://wpwatercooler.com/wpwatercooler/ep423-converting-your-site-to-fse/",
    featured: false,
  },
  {
    title: "Builder Basics: Designing Advanced Layouts with Core Blocks",
    event: "Learn WordPress",
    date: "2022-07-15",
    category: "live stream",
    url: "https://www.meetup.com/wordpress-social-learning/events/287148792/",
    recordingUrl:
      "https://wordpress.tv/2022/07/15/nick-diego-builder-basics-designing-advanced-layouts-with-core-blocks/",
    featured: false,
  },
  {
    title: "It's Time to Get Serious About Full Site Editing",
    event: "Page Builder Summit 2022",
    date: "2022-06-22",
    category: "conference",
    url: "https://pagebuildersummit.com/speaker/nick-diego/",
    recordingUrl: null,
    featured: false,
  },
  {
    title: "Builder Basics: Let's Build a Custom Theme (No Coding Required)",
    event: "Learn WordPress",
    date: "2022-06-13",
    category: "live stream",
    url: "https://www.meetup.com/wordpress-social-learning/events/286256957/",
    recordingUrl:
      "https://wordpress.tv/2022/06/16/nick-diego-builder-basics-lets-build-a-custom-theme-no-coding-required/",
    featured: false,
  },
  {
    title: "Builder Basics: Everything You Need to Know About Patterns",
    event: "Learn WordPress",
    date: "2022-06-08",
    category: "live stream",
    url: "https://www.meetup.com/wordpress-social-learning/events/286256895/",
    recordingUrl:
      "https://wordpress.tv/2022/06/13/nick-diego-builder-basics-everything-you-need-to-know-about-patterns/",
    featured: false,
  },
  {
    title:
      "Builder Basics: Working with Templates in Full Site Editing (Part 3)",
    event: "Learn WordPress",
    date: "2022-05-18",
    category: "live stream",
    url: "https://www.meetup.com/wordpress-social-learning/events/285518331/",
    recordingUrl:
      "https://wordpress.tv/2022/05/24/nick-diego-builder-basics-working-with-templates-in-full-site-editing-part-3/",
    featured: false,
  },
  {
    title:
      "Builder Basics: Working with Templates in Full Site Editing (Part 2)",
    event: "Learn WordPress",
    date: "2022-05-12",
    category: "live stream",
    url: "https://www.meetup.com/wordpress-social-learning/events/285518274/",
    recordingUrl:
      "https://wordpress.tv/2022/05/06/nick-diego-builder-basics-working-with-templates-in-full-site-editing-part-1/",
    featured: false,
  },
  {
    title:
      "Builder Basics: Working with Templates in Full Site Editing (Part 1)",
    event: "Learn WordPress",
    date: "2022-05-05",
    category: "live stream",
    url: "https://www.meetup.com/wordpress-social-learning/events/285518202/",
    recordingUrl:
      "https://wordpress.tv/2022/05/06/nick-diego-builder-basics-working-with-templates-in-full-site-editing-part-1/",
    featured: false,
  },
  {
    title: "Torque Talks with Nick Diego about WordPress 6.0",
    event: "Torque Social Hour",
    date: "2022-04-27",
    category: "podcast",
    url: "https://www.youtube.com/playlist?list=PLbLnaL8bXQ8eHjHS_wp2_G4gGNwF3f584",
    recordingUrl: "https://www.youtube.com/watch?v=PnKQkAHtR2k",
    featured: false,
  },
  {
    title: "It's Time to Get Serious About Full Site Editing",
    event: "Atarim Web Agency Summit 2022",
    date: "2022-04-26",
    category: "conference",
    url: null,
    recordingUrl: null,
    featured: false,
  },
  {
    title: "Working with Full Site Editing",
    event: "DE{CODE} 2022",
    date: "2022-04-20",
    category: "conference",
    url: null,
    recordingUrl: null,
    featured: false,
  },
  {
    title:
      "Getting the Most From Your Full Site Editing Builds with WordPress 6.0 Editor Triage Release Lead Nick Diego",
    event: "Press This",
    date: "2022-04-19",
    category: "podcast",
    url: "https://podcasts.apple.com/us/podcast/press-this-wordpress-community-podcast/id1483630576",
    recordingUrl:
      "https://podcasts.apple.com/us/podcast/getting-the-most-from-your-full-site-editing-builds/id1483630576?i=1000558669577",
    featured: false,
  },
  {
    title:
      "Builder Basics: Exploring Block Layout, Alignment, and Dimensions (Part 2)",
    event: "Learn WordPress",
    date: "2022-04-19",
    category: "live stream",
    url: "https://www.meetup.com/wordpress-social-learning/events/284700867/",
    recordingUrl: null,
    featured: false,
  },
  {
    title: "Builder Basics: Headers and Footers in Full Site Editing",
    event: "Learn WordPress",
    date: "2022-04-12",
    category: "live stream",
    url: "https://www.meetup.com/wordpress-social-learning/events/284700822/",
    recordingUrl:
      "https://wordpress.tv/2022/04/13/nick-diego-builder-basics-headers-and-footers-in-full-site-editing/",
    featured: false,
  },
  {
    title:
      "Builder Basics: Designing with Columns, Group, and Row Blocks (Part 2)",
    event: "Learn WordPress",
    date: "2022-04-06",
    category: "live stream",
    url: "https://www.meetup.com/wordpress-social-learning/events/284700789/",
    recordingUrl: null,
    featured: false,
  },
  {
    title:
      "Builder Basics: Exploring Block Layout, Alignment, Dimensions, and Spacing",
    event: "Learn WordPress",
    date: "2022-03-23",
    category: "live stream",
    url: "https://www.meetup.com/wordpress-social-learning/events/284383346/",
    recordingUrl:
      "https://wordpress.tv/2022/03/28/nick-diego-builder-basics-exploring-block-layout-alignment-dimensions-and-spac/",
    featured: false,
  },
  {
    title: "Torque Social Hour with Ben Ritner (Co-Host)",
    event: "Torque Social Hour",
    date: "2022-03-16",
    category: "podcast",
    url: "https://www.youtube.com/playlist?list=PLbLnaL8bXQ8eHjHS_wp2_G4gGNwF3f584",
    recordingUrl: "https://www.youtube.com/watch?v=UuTynYwpKAM",
    featured: false,
  },
  {
    title: "Builder Basics: Designing with Columns, Group, and Row Blocks",
    event: "Learn WordPress",
    date: "2022-03-10",
    category: "live stream",
    url: "https://www.meetup.com/wordpress-social-learning/events/284383383",
    recordingUrl:
      "https://wordpress.tv/2022/03/10/nick-diego-builder-basics-designing-with-columns-group-and-row-blocks/",
    featured: false,
  },
  {
    title: "Episode 195: Talking Full Site Editing With Nick Diego",
    event: "The SDM Show",
    date: "2022-02-16",
    category: "podcast",
    url: "https://stunningdigitalmarketing.com/podcast/",
    recordingUrl:
      "https://podcasts.apple.com/us/podcast/episode-195-talking-full-site-editing-with-nick-diego/id1649245370?i=1000582204550",
    featured: false,
  },
  {
    title: "Torque Social Hour with Anne McCarthy (Co-Host)",
    event: "Torque Social Hour",
    date: "2022-01-12",
    category: "podcast",
    url: "https://www.youtube.com/playlist?list=PLbLnaL8bXQ8eHjHS_wp2_G4gGNwF3f584",
    recordingUrl: "https://www.youtube.com/watch?v=gPCw2hf1SMM",
    featured: false,
  },
  {
    title: "Torque Social Hour with Nick Diego",
    event: "Torque Social Hour",
    date: "2021-12-22",
    category: "podcast",
    url: "https://www.youtube.com/playlist?list=PLbLnaL8bXQ8eHjHS_wp2_G4gGNwF3f584",
    recordingUrl: "https://www.youtube.com/watch?v=Jt7P_YgQaBQ",
    featured: false,
  },
];
