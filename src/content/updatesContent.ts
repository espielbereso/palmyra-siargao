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
    links?: Array<{ label: string; url: string }>;
    image?: string;
    video?: string;
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
    lastVerified: "August 1, 2026",
    summary:
      "PALMYRA Siargao continues to move through responsible development, site work, implementation planning, community coordination, and partnership-building with local and technical stakeholders.",
    currentPhase: {
      title: "Site development and implementation planning",
      dateStarted: "February 2, 2026",
    },
    nextMilestone: {
      title: "Implementation planning and site development coordination",
      plannedDate: "August 2026",
    },
  },
  timeline: [
    {
      type: "Planning & Coordination",
      title: "Working closely with Del Carmen stakeholders",
      date: "September 8, 2025",
      note: "Work involved close coordination with the Del Carmen LGU, environmental and planning offices, barangay leadership, and DHSUD as the development process moved forward.",
      links: [
        {
          label: "View Facebook post",
          url: "https://www.facebook.com/share/p/1JrF1irvNE/",
        },
      ],
    },
    {
      type: "Permits & Community",
      title: "Permits, compliance, and community briefings",
      date: "October 14, 2025",
      note: "Coordination continued with the Del Carmen LGU, environmental officers, planning departments, and barangay leadership. Permits, ECC/PAMB, DHSUD coordination, community briefings, and local workforce partnerships were underway.",
      links: [
        {
          label: "View Facebook post",
          url: "https://www.facebook.com/share/p/19Gb7atqwv/",
        },
      ],
    },
    {
      type: "Partnership",
      title: "Legal partnership signed with Torreon & Partners",
      date: "January 19, 2026",
      note: "WELLBUILD Development Corporation and PALMYRA Siargao formalized a legal partnership with The Law Firm of Torreon & Partners, headed by Atty. Bobbet Torreon.",
      links: [
        {
          label: "View Facebook post",
          url: "https://www.facebook.com/share/p/166MErdkwu1/",
        },
      ],
    },
    {
      type: "Construction",
      title: "Groundbreaking ceremony",
      date: "February 2, 2026",
      note: "PALMYRA Siargao marked the beginning of its next development chapter with the groundbreaking ceremony.",
      links: [
        {
          label: "View Facebook post",
          url: "https://www.facebook.com/share/p/1BkuCNzK3q/",
        },
      ],
    },
    {
      type: "Site Development",
      title: "Land development continues after groundbreaking",
      date: "February 16, 2026",
      note: "The project team continued land development work following the groundbreaking ceremony.",
      links: [
        {
          label: "View Facebook post",
          url: "https://www.facebook.com/share/p/1BKKe8Ktw3/",
        },
      ],
    },
    {
      type: "Partnership",
      title: "Welcoming ACQ Solomonic Builders Development Corporation",
      date: "May 8, 2026",
      note: "PALMYRA Siargao welcomed ACQ Solomonic Builders Development Corporation as part of the project's growing implementation and delivery network.",
      links: [
        {
          label: "View Facebook post",
          url: "https://www.facebook.com/share/p/1EYj9zjzAn/",
        },
      ],
    },
    {
      type: "Site Development",
      title: "Site development update",
      date: "June 13, 2026",
      note: "A site development progress update was shared as work continued on the PALMYRA Siargao property.",
      links: [
        {
          label: "View Facebook post",
          url: "https://www.facebook.com/share/p/191B5rZrVH/",
        },
      ],
    },
    {
      type: "Site Inspection",
      title: "Site inspection",
      date: "June 15, 2026",
      note: "The team conducted a site inspection to review progress and coordinate the next stages of development.",
      links: [
        {
          label: "View video",
          url: "https://www.facebook.com/share/v/1BekcDksdZ/",
        },
        {
          label: "View Facebook post",
          url: "https://www.facebook.com/share/p/19CN8eWqu3/",
        },
      ],
    },
    {
      type: "Compliance & Planning",
      title: "1st SIPLAS PAMB EN BANC",
      date: "June 25, 2026",
      note: "The first SIPLAS PAMB EN BANC was held at the PAMO SIPLAS Office in Del Carmen, Surigao del Norte.",
      links: [
        {
          label: "View Facebook post",
          url: "https://www.facebook.com/share/p/19AtZVb2f5/",
        },
      ],
    },
    {
      type: "Launch Event",
      title: "Press conference ahead of the Grand Launching",
      date: "July 24, 2026",
      note: "PALMYRA Siargao held a press conference ahead of the Grand Launching & Investors' Night.",
      links: [
        {
          label: "Watch press conference",
          url: "https://www.facebook.com/share/v/19RcQDRuGY/",
        },
        {
          label: "BusinessMirror",
          url: "https://www.facebook.com/share/v/19LSChYUpJ/",
        },
        {
          label: "SMNI News Cebu-Visayas 1",
          url: "https://www.facebook.com/share/v/1bvafHP4VL/",
        },
        {
          label: "SMNI News Cebu-Visayas 2",
          url: "https://www.facebook.com/share/v/14cQpXMMpFh/",
        },
        {
          label: "PALMYRA Facebook page",
          url: "https://www.facebook.com/share/v/17QZiwjqbB/",
        },
        {
          label: "The Manila Times",
          url: "https://www.facebook.com/share/19HG4hM8bD/",
        },
      ],
    },
    {
      type: "Launch Event",
      title: "Grand Launching & Investors' Night",
      date: "July 24, 2026",
      note: "PALMYRA Siargao held its Grand Launching & Investors' Night, introducing the project and its vision to guests, partners, and prospective investors.",
      links: [
        {
          label: "Watch event SDE",
          url: "https://www.facebook.com/share/v/1HnhZwozwb/",
        },
      ],
    },
    {
      type: "Implementation Planning",
      title: "RBCATUBIG Architects and ACQ Builders finalize implementation plans",
      date: "August 1, 2026",
      note: "RBCATUBIG Architects and ACQ Builders continued coordination to finalize implementation plans for PALMYRA Siargao Resort & Residences.",
      links: [
        {
          label: "View Facebook post",
          url: "https://www.facebook.com/share/p/1DKuwnueZX/",
        },
      ],
    },
    {
      type: "Partnership",
      title: "Official signing of brand endorser Elias J. Tv.",
      date: "August 4, 2026",
      note: "PALMYRA Siargao officially signed Elias J. Tv. as its brand endorser at The Law Firm of Torreon & Partners, together with trusted legal counsel Atty. Bobbet Torreon. The shared story of humble beginnings, faith, perseverance, and moving forward is part of what makes this partnership meaningful.",
      links: [
        {
          label: "Elias J. Tv.",
          url: "https://www.facebook.com/profile.php?id=100085142979839",
        },
        {
          label: "Torreon & Partners",
          url: "https://www.facebook.com/torreonlawph",
        },
        {
          label: "Atty. Bobbet Torreon",
          url: "https://www.facebook.com/attybobbettorreon",
        },
        {
          label: "View Facebook post",
          url: "https://www.facebook.com/share/p/1J1nPT8wt9/",
        },
      ],
    },
  ],
};
