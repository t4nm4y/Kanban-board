import { useMemo } from "react";
import styles from "./ResearchContainer.module.css";
const ResearchContainer = ({
  commentCount,
  fileCount,
  commentText,
  userAvatarUrl,
  fileCountText,
  researchText,
  wireframeText,
  propGap,
  propWidth,
  propWidth1,
  propWidth2,
  propTop,
  propTop1,
  propTop2,
  propLeft,
}) => {
  const peopleResearchStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const groupIconStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const frameButton1Style = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const frame1Style = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  const researchStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const buttonStyle = useMemo(() => {
    return {
      top: propTop1,
    };
  }, [propTop1]);

  const priorityHighStyle = useMemo(() => {
    return {
      top: propTop2,
      left: propLeft,
    };
  }, [propTop2, propLeft]);

  return (
    <div className={styles.cardResearch}>
      <div className={styles.peopleResearch} style={peopleResearchStyle}>
        <img
          className={styles.peopleResearchChild}
          alt=""
          src={commentCount}
          style={groupIconStyle}
        />
        <button className={styles.frameParent} style={frameButton1Style}>
          <div className={styles.frame} style={frame1Style}>
            <img
              className={styles.vuesaxoutlinemessageIcon}
              alt=""
              src={fileCount}
            />
            <div className={styles.comments}>{commentText}</div>
          </div>
          <div className={styles.frame1}>
            <img
              className={styles.vuesaxoutlinemessageIcon}
              alt=""
              src={userAvatarUrl}
            />
            <div className={styles.comments}>{fileCountText}</div>
          </div>
        </button>
      </div>
      <div className={styles.research} style={researchStyle}>
        {researchText}
      </div>
      <button className={styles.button} style={buttonStyle}>
        . . .
      </button>
      <div className={styles.userResearchHelps}>{wireframeText}</div>
      <div className={styles.priorityHigh} style={priorityHighStyle}>
        <div className={styles.high}>High</div>
      </div>
    </div>
  );
};

export default ResearchContainer;
