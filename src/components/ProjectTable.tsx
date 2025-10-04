"use client";

import {
  AvatarGroup,
  Carousel,
  Column,
  Flex,
  Heading,
  SmartLink,
  Text,
} from "@once-ui-system/core";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
}

export const ProjectTable: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  content,
  description,
  avatars,
  link,
}) => {
  return (
    <Column className="project-table-inner" fillWidth gap="m">
      <Carousel
        sizes="(max-width: 960px) 100vw, 960px"
        items={images.map((image) => ({
          slide: image,
          alt: title,
        }))}
        style={{ borderRadius: 8, overflow: "hidden" }}
      />
      <Flex
        s={{ direction: "column" }}
        fillWidth
        paddingX="s"
        paddingTop="12"
        paddingBottom="24"
        gap="l"
      >
        {title && (
          <Flex flex={5}>
            <Heading as="h2" wrap="balance" variant="heading-strong-xl">
              {title}
            </Heading>
          </Flex>
        )}
        {(avatars?.length > 0 || description?.trim() || content?.trim()) && (
          <Column flex={7} gap="16">
            {avatars?.length > 0 && <AvatarGroup avatars={avatars} size="m" reverse />}
            {description?.trim() && (
              <Text wrap="balance" variant="body-default-m" onBackground="neutral-weak">
                {description}
              </Text>
            )}
            <Flex gap="24" wrap>
              {link && (
                <SmartLink
                  suffixIcon="arrowUpRightFromSquare"
                  style={{ margin: "0", width: "fit-content" }}
                  href={link}
                >
                  <Text variant="body-default-s">View project</Text>
                </SmartLink>
              )}
            </Flex>
          </Column>
        )}
      </Flex>

      <style>{`
        .project-table-inner {
          background: transparent; /* outer wrapper controls card background */
          box-shadow: none;
          padding: 0;
          color: #fff !important; /* force black text for the project table */
          /* make the table fill its parent card so all cards can match height */
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        /* force a fixed height for the top media area so content area remains consistent */
        .project-table-inner > :first-child {
          flex: 0 0 180px; /* carousel fixed height */
        }
        /* allow the remaining content to grow and scroll if needed */
        .project-table-inner > :last-child {
          flex: 1 1 auto;
          min-height: 0; /* allow proper scrolling in flex children */
          overflow: auto;
        }

        /* make sure internal spacing remains consistent when placed inside card */
        .project-table-inner > :global(*) {
          box-sizing: border-box;
        }

        /* Ensure all nested elements render black text and override inline/system styles */
        .project-table-inner, 
        .project-table-inner * {
          color: #fff !important;
          fill: #000 !important; /* for icons/SVGs that may inherit fill */
          stroke: #000 !important; /* for SVG strokes */
        }
      `}</style>
    </Column>
  );
};
