import { useMemo } from "react";
import styles from "./BrainstormingContainer.module.css";
const BrainstormingContainer = ({
  fileIds,
  imageFileIds,
  smallImageFileIds,
  fileCount,
  brainstormingText,
  brainstormingDescription,
  statusText,
  propOverflow,
  propFlexShrink,
  propGap,
  propWidth,
  propWidth1,
  propColor,
  propBackgroundColor,
  propWidth2,
  propColor1,
}) => {
  const cardBrainstormingStyle = useMemo(() => {
    return {
      overflow: propOverflow,
      flexShrink: propFlexShrink,
    };
  }, [propOverflow, propFlexShrink]);

  const peopleBrainstormingStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const frameButtonStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const frameStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const brainstormingBringsTeamStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const priorityLowStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      width: propWidth2,
    };
  }, [propBackgroundColor, propWidth2]);

  const lowStyle = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  return (
    <div className={styles.cardBrainstorming} style={cardBrainstormingStyle}>
      <div
        className={styles.peopleBrainstorming}
        style={peopleBrainstormingStyle}
      >
        <img className={styles.peopleBrainstormingChild} alt="" src={fileIds} />
        <button className={styles.frameParent} style={frameButtonStyle}>
          <div className={styles.frame}>
            <img
              className={styles.vuesaxoutlinemessageIcon}
              alt=""
              src={imageFileIds}
            />
            <div className={styles.comments}>12 comments</div>
          </div>
          <div className={styles.frame1} style={frameStyle}>
            <img
              className={styles.vuesaxoutlinemessageIcon}
              alt=""
              src={smallImageFileIds}
            />
            <div className={styles.comments}>{fileCount}</div>
          </div>
        </button>
      </div>
      <div className={styles.brainstorming}>{brainstormingText}</div>
      <button className={styles.button}>. . .</button>
      <div
        className={styles.brainstormingBringsTeam}
        style={brainstormingBringsTeamStyle}
      >
        {brainstormingDescription}
      </div>
      <div className={styles.priorityLow} style={priorityLowStyle}>
        <div className={styles.low} style={lowStyle}>
          {statusText}
        </div>
      </div>
    </div>
  );
};

export default BrainstormingContainer;
