import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp, faVolumeMute } from "@fortawesome/free-solid-svg-icons";
import styled from "./Theme";

interface IProps {
  iconColor?: string;
}

const StyledRadio = styled.button`
  display: flex;
  flex: 0 1 auto;
  padding: 1em;
  border-style: none;
  color: unset;
  background-color: unset;
  border-width: unset;
  border-color: unset;
  border-image: unset;
  cursor: pointer;
  &:focus {
    outline: 0;
  }
`;

export const Radio: React.FunctionComponent<IProps> = props => {
  const reference = React.useRef<HTMLAudioElement>();
  const [isPlaying, setPlaying] = React.useState(true);
  React.useLayoutEffect(() => {
    reference.current && isPlaying && reference.current.play();
  });

  return (
    <StyledRadio
      onClick={() => {
        if (isPlaying) {
          reference.current && reference.current.pause();
          setPlaying(false);
        } else {
          reference.current && reference.current.play();
          setPlaying(true);
        }
      }}
    >
      {isPlaying ? (
        <FontAwesomeIcon
          color={props.iconColor}
          icon={faVolumeUp}
          size={"2x"}
        />
      ) : (
        <FontAwesomeIcon
          color={props.iconColor}
          icon={faVolumeMute}
          size={"2x"}
        />
      )}
      <audio
        ref={reference}
        src="http://titan.shoutca.st:8851/;listen.mp3"
      ></audio>
    </StyledRadio>
  );
};
