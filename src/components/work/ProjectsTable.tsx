import { getPosts } from "@/utils/utils";
import { ProjectTable } from "../ProjectTable";

interface ProjectsTableProps {
  range?: [number, number?];
  exclude?: string[];
}

export function ProjectsTable({ range, exclude }: ProjectsTableProps) {
  let allProjects = getPosts(["src", "app", "work", "projects"]);

  // Exclude by slug (exact match)
  if (exclude && exclude.length > 0) {
    allProjects = allProjects.filter((post) => !exclude.includes(post.slug));
  }

  const sortedProjects = allProjects.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  return (
    <>
      <div className="projects-grid" role="list">
        {displayedProjects.map((post, index) => (
          <div className="project-card" key={post.slug} role="listitem">
            <ProjectTable
              priority={index < 2}
              href={`/work/${post.slug}`}
              images={post.metadata.images}
              title={post.metadata.title}
              description={post.metadata.summary}
              content={post.content}
              avatars={post.metadata.team?.map((member) => ({ src: member.avatar })) || []}
              link={post.metadata.link || ""}
            />
          </div>
        ))}
      </div>

      <style>{`
        .projects-grid {
          display: grid;
          /* allow three cards side-by-side on wider screens by lowering the min column width */
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 24px;
          padding: 0 16px 40px 16px;
          align-items: start;
          /* let cards control their own text color for proper contrast */
        }

        .project-card {
          border-radius: 12px;
          padding: 16px;
          transition: transform 200ms ease, box-shadow 200ms ease, background-color 200ms ease;
          will-change: transform, box-shadow, background-color;
          cursor: default;
          overflow: hidden;
          /* neutral card background (dark) by default; can be overridden with --card-bg */
          background-color: var(--card-bg, rgba(47, 70, 105, 0.95));
          color: var(--card-text, #fff);

          /* make all cards a uniform height and layout as a column so child ProjectTable can fill */
          display: flex;
          flex-direction: column;
          height: 420px; /* uniform card height */
        }

        /* Ensure the ProjectTable inside each card fills the available space */
        .project-card .project-table-inner {
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        /* Subtle checkerboard: alternating but close tones */
        .projects-grid .project-card:nth-child(odd) {
          background-color: rgba(32, 39, 49, 0.95);
        }
        .projects-grid .project-card:nth-child(even) {
          background-color: rgba(32, 39, 49, 0.95);
        }

        /* Hover effect: lift and switch to a light card with readable dark text */
        .project-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 30px rgba(16,24,40,0.12);
          background-color: rgba(255, 250, 240, 0.98); /* subtle warm highlight */
          color: #000;
        }

        /* Make inner links/text inherit colors */
        .project-card a { color: inherit; text-decoration: none; }

        /* Ensure icons/SVGs inside a card inherit the card's current text color without forcing global colors */
        .project-card svg { fill: currentColor; stroke: currentColor; }

        /* Responsive: on small screens allow the card height to be automatic so content isn't clipped */
        @media (max-width: 600px) {
          .project-card {
            height: auto;
          }
          .project-card .project-table-inner > :first-child {
            flex: 0 0 auto; /* let carousel size naturally on small screens */
          }
        }
      `}</style>
    </>
  );
}
