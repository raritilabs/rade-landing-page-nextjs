import React from "react";
import "../../public/styles/App.css";
import "../../public/styles/fonts.scss";
import discordIcon from "../assets/DiscordIcon.svg";
import Image from "next/image";
const JoinTheRadeCommunitySection = () => {
  return (
    <div>
      <div className="discordJoinUsOnJourney">
        <div>
          <p className="joinRadecommunity">Join the RADE Community</p>
          <p className="comeAndJoin">
            Come and join our growing community to learn more about our plans,
            share your feedback <br />
            and feature requests with us, or to get involved as a contributor
          </p>
          <div className="discordButton">
            <a
              href="https://discord.gg/QjPXwpCUA2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="discord">
                Discord
                <Image
                  src={discordIcon}
                  className="discordImage"
                  alt="discord logo"
                />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinTheRadeCommunitySection;
