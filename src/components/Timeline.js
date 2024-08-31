import React, { useEffect, useState } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { getRepoEvents } from "./api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeBranch, faBug, faCodeMerge, faTag } from "@fortawesome/free-solid-svg-icons";

const Timeline = ({ username, repo }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const data = await getRepoEvents(username, repo);
      const combinedEvents = [
        ...data.commits.map((commit) => ({
          type: "Commit",
          date: commit.commit.author.date,
          message: commit.commit.message,
          url: commit.html_url, // URL for the commit
        })),
        ...data.issues.map((issue) => ({
          type: "Issue",
          date: issue.created_at,
          message: issue.title,
          url: issue.html_url, // URL for the issue
        })),
        ...data.pulls.map((pull) => ({
          type: "Pull Request",
          date: pull.created_at,
          message: pull.title,
          url: pull.html_url, // URL for the pull request
        })),
        ...data.releases.map((release) => ({
          type: "Release",
          date: release.created_at,
          message: release.name,
          url: release.html_url, // URL for the release
        })),
      ];

      setEvents(combinedEvents.sort((a, b) => new Date(a.date) - new Date(b.date)));
    };

    fetchEvents();
  }, [username, repo]);

  const getIcon = (type) => {
    switch (type) {
      case "Commit":
        return faCodeBranch;
      case "Issue":
        return faBug;
      case "Pull Request":
        return faCodeMerge;
      case "Release":
        return faTag;
      default:
        return faCodeBranch;
    }
  };

  return (
    <VerticalTimeline>
      {events.map((event, index) => (
        <VerticalTimelineElement
          key={index}
          date={new Date(event.date).toDateString()}
          icon={<FontAwesomeIcon icon={getIcon(event.type)} />}
          iconStyle={{
            background: event.type === "Commit" ? "blue" : event.type === "Issue" ? "red" : event.type === "Pull Request" ? "green" : "purple",
            color: "#fff",
            fontSize: "18px",  // Smaller font size for the icon
          }}
        >
          <h3 className="text-blue-950 font-semibold">{event.type}</h3>
          <p>
            <a href={event.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              {event.message}
            </a>
          </p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default Timeline;
