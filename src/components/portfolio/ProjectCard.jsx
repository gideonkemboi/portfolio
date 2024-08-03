import PropTypes from "prop-types";
import "boxicons";

function ProjectCard({ name, tags, github, liveDemo, description }) {
  const tagList = tags.map((tag) => (
    <li
      key={tag}
      className="px-2 py-1 text-sm border bg-gray-300 bg-opacity-60 border-graphite border-opacity-20 rounded-full cursor-default 
      transition transform duration-400 ease-in-out hover:scale-110"
    >
      {tag}
    </li>
  ));

  return (
    <div className="relative p-4 font-body flex-col space-y-4 justify-center h-full w-full">
      <p className="tracking-wider text-3xl">{name}</p>
      <ul className="flex space-x-2 m-auto justify-center">{tagList}</ul>
      <p className="md:text-lg w-full md:w-11/12 2xl:w-3/4 m-auto leading-loose md:leading-loose">
        {description}
      </p>
      <div className="absolute top-2 right-1 flex space-x-2">
        <a
          title="Source Code"
          href={github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <box-icon
            type="logo"
            name="github"
            class="h-6 w-6 hover:scale-125 active:scale-95 transition duration-150"
          ></box-icon>
        </a>
        <a
          title="Live Demo"
          href={liveDemo}
          target="_blank"
          rel="noopener noreferrer"
        >
          <box-icon
            name="link-external"
            class="h-6 w-6 hover:scale-125 active:scale-95 transition duration-150"
          ></box-icon>
        </a>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  name: PropTypes.string,
  tags: PropTypes.array,
  github: PropTypes.string,
  liveDemo: PropTypes.string,
  description: PropTypes.string,
};

export default ProjectCard;
