# Analytics

PostHog, free tier, cookieless (state in memory only, Do Not Track honored), so no consent banner is needed. Events are defined and typed in `apps/web/lib/analytics.ts`; add an event there before using it.

## Conventions

- Names are `<thing>_<past tense verb>` in snake_case: `code_copied`, `search_no_results`. They sort by subject and read as facts.
- `icon` is the icon name and `category` its Tabler category. `source` or `via` says where the action started.
- Every event carries three properties, added once at start: `site`, `viewport` (`phone`, `tablet`, `desktop`) and `touch`.
- PostHog also records `$pageview`, `$pageleave` and autocapture clicks on its own.

## Events

| Event | Properties | Answers |
| --- | --- | --- |
| `icon_opened` | `icon`, `category`, `source` (grid, hero, palette, similar) | Which icons and categories draw interest, and from where |
| `icon_stepped` | `icon`, `direction`, `via` | Do people browse with the arrows or the keyboard |
| `search_opened` | `via` (button, shortcut, slash) | How people find search |
| `search_result_picked` | `query`, `icon` | What people typed to find an icon |
| `search_no_results` | `query` | Icons or tags people expect and we do not have |
| `search_category_picked` | `category` | Category use from the palette |
| `search_results_expanded` | `query` | Searches too broad for the palette |
| `category_selected` | `category`, `via` (pill, menu, preview) | Category browsing |
| `filters_cleared` | none | Frustration with filters |
| `density_changed` | `density` | Preferred grid size |
| `tag_clicked` | `tag` | Tags that lead somewhere |
| `similar_opened` / `similar_picked` | `icon` / `from`, `to` | Whether the similar grid helps |
| `code_tab_changed` | `tab`, `icon` | Install, import or use interest |
| `code_copied` | `kind` (install, import, use, all, link), `icon`, `customized` | **The conversion.** `kind = install` means someone took the command |
| `customize_toggled` / `customize_changed` | `open` / `setting`, `value` | Whether customizing is used, and which settings |
| `star_clicked` | `where` (header, footer) | Which call to action works |
| `feedback_opened` / `feedback_submitted` | none / `type`, `ok` | Feedback funnel and its failure rate |
| `theme_toggled` | `theme`, `where` | Theme preference |

## Dashboards worth building

- **Funnel:** `icon_opened` then `code_copied` where `kind = install`. Break down by `source` and by `viewport`.
- **Top installs:** `code_copied` where `kind = install`, grouped by `icon`, then by `category`.
- **Missing icons:** `search_no_results` grouped by `query`, most frequent first.
- **Engagement:** share of visitors with `customize_changed`, with `similar_picked`, with `icon_stepped`.
- **Call to action:** `star_clicked` by `where`, and `feedback_submitted` where `ok = true` against `ok = false`.

## What the numbers mean

Because nothing is stored in the browser, PostHog cannot recognise a returning visitor: every page load counts as a new visitor. Read "unique visitors" as visits, and use event counts and funnels within one visit (open an icon, then copy its install command), which are accurate. To count real returning visitors you would store an ID in the browser, which brings a consent banner with it.

## Setup

1. Set `NEXT_PUBLIC_POSTHOG_KEY` (the project token) and `NEXT_PUBLIC_POSTHOG_HOST` in `apps/web/.env.local`, and in the hosting environment.
2. Without a key, events are only logged to the console in development.
3. Events can take a minute or two to appear in PostHog's activity list.
