# YOGA Pathways (Anshul)

A Next.js web application containing 13 interactive wellbeing pathways covering yoga, nutrition, fitness, recovery, and personalized wellbeing planning.

## Features

- Central pathway hub for browsing all 13 programs
- Search and category filtering
- Dedicated pathway pages with responsive layouts
- Yoga pose and workout detail views
- Progress tracking and completion states where supported
- Mobile-first responsive behavior
- Responsive navigation and controls for small screens
- Images and supporting assets served from `public/`

## Features
Ref-Source- (https://admin.mantracare.com/pathway/25/edit)

## Pathways

| Route | Program |
| --- | --- |
| `/pathway-1` | Create Your Personalized Wellbeing Plan |
| `/pathway-2` | Benefits of Yoga |
| `/pathway-3` | Easy Yoga / Yoga for Beginners |
| `/pathway-4` | Yogic Diet |
| `/pathway-5` | Nutrition & Greens |
| `/pathway-6` | Nutrition While Traveling |
| `/pathway-7` | Healthy Meal Plan |
| `/pathway-8` | Health Care & Recovery |
| `/pathway-9` | Tone-Up Yoga Sequence |
| `/pathway-10` | Beginner Yoga Tour |
| `/pathway-11` | Increase Flexibility |
| `/pathway-12` | Morning Yoga Wake-Up |
| `/pathway-13` | Short Workouts |

The root route `/` is the pathway hub.

## Technology

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- PostCSS
- Lucide React icons

## Requirements

- Node.js 20 or newer recommended
- npm

## Installation

```bash
npm install
```

## Development

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser. If port 3000 is already in use, Next.js will select another available port and print the URL in the terminal.

## Production

Build the application:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

## Validation

Type-check the project without emitting files:

```bash
npx tsc --noEmit
```

The project also provides these npm scripts:

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Project Structure

```text
app/
  page.tsx                 Pathway hub
  layout.tsx               Root application layout
  components/              Shared React components
  data/                    Shared pathway metadata
  pathway-1/ ... pathway-13/
                           Individual pathway routes and styles
public/
  assets/                  Public images and supporting assets
  images/
  img/
  js/                      Static pathway data and interaction scripts
```

## Responsive Design

The application is designed to work across desktop, tablet, and mobile viewport sizes. Mobile layouts keep cards, images, navigation controls, tabs, and detail views inside the viewport without unintended horizontal page overflow.

## Notes

- Each pathway can have its own stylesheet and interaction model because the programs use different content formats.
- Static HTML-based pathways load their supporting data and behavior from files in `public/js/`.
- Do not commit secrets or environment-specific credentials to the repository.
