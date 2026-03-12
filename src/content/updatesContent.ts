type UpdatesContent = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
  };
  status: {
    lastVerified: string;
    summary: string;
    currentPhase: {
      title: string;
      dateStarted: string;
    };
    nextMilestone: {
      title: string;
      plannedDate: string;
    };
  };
  timeline: Array<{
    type: string;
    title: string;
    date: string;
    note: string;
  }>;
};

// Edit this file to publish new updates.
// Recommended workflow:
// 1) Update `status.currentPhase` and `status.nextMilestone`.
// 2) Update `status.lastVerified` whenever details change.
// 3) Dates can be full dates (e.g. February 24, 2026) or month-year (e.g. Feb 2026).
export const updatesContent: UpdatesContent = {
  hero: {
    eyebrow: "Project Updates",
    title: "Project Updates",
    description:
      "A clear snapshot of where the project is now and what comes next.",
  },
  status: {
    lastVerified: "February 21, 2026",
    summary:
      "Here is a clear snapshot of where PALMYRA Siargao stands today and what comes next. We keep this section concise so progress is easy to understand at a glance.",
    currentPhase: {
      title: "Planning and pre-development coordination",
      dateStarted: "February 21, 2026",
    },
    nextMilestone: {
      title: "Permits and compliance updates",
      plannedDate: "Feb 2026",
    },
  },
  timeline: [
    {
      type: "Planning",
      title: "Concept and vision defined",
      date: "March 2025",
      note: "PALMYRA Siargao was shaped as Siargao's first integrated resort-residence concept.",
    },
    {
      type: "Planning",
      title: "Planning and pre-development",
      date: "February 2026",
      note: "Project teams are aligning scope, sequencing, and communications before major delivery stages.",
    },
    {
      type: "Construction",
      title: "Phase 1 delivery",
      date: "August 2026",
      note: "Initial phase milestones will be announced once schedules are formally confirmed.",
    },
    {
      type: "Construction",
      title: "Phase 2 delivery",
      date: "2027-2029",
      note: "Development follows a two-phase strategy across an estimated 4-5 year window.",
    },
    {
      type: "Launch",
      title: "Opening and operations",
      date: "April 2029",
      note: "Operational and opening milestones will follow completion of planned delivery phases.",
    },
  ],
};
