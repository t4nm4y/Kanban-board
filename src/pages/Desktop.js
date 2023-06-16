import ProjectMContainer from "../components/ProjectMContainer";
import BrainstormingContainer from "../components/BrainstormingContainer";
import ResearchContainer from "../components/ResearchContainer";
import Footer from "../components/Footer";
import styles from "./Desktop.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
const Desktop = () => {
  const [isMenuVisible, setMenuVisible] = useState(true);

  const handleButtonClick = () => {
    setMenuVisible(true);
  };
  return (
    <div className={styles.desktop}>
      <ProjectMContainer isMenuVisible={isMenuVisible} setMenuVisible={setMenuVisible}/>
      <div className={styles.mainWrap}>
        <div className={styles.navbar}>
          <div> {!isMenuVisible && <RxHamburgerMenu className={styles.menu} size={25} color="rgb(195, 194, 202)" onClick={handleButtonClick}/>} </div>
          <div className={styles.searchbar}>
            <img className={styles.searchicon} alt="" src="/searchicon.svg" />
            <input
              className={styles.searchbox}
              type="text"
              placeholder="Search for anything..."
            />
          </div>
          <div className={styles.rightNav}>
            <div className={styles.navicons}>
              <button className={styles.notification}>
                <img
                  className={styles.vuesaxlinearnotificationIcon}
                  alt=""
                  src="/vuesaxlinearnotification.svg"
                />
                <div className={styles.notificationChild} />
              </button>
              <button className={styles.messageQuestion}>
                <img
                  className={styles.vuesaxlinearnotificationIcon}
                  alt=""
                  src="/vuesaxlinearmessagequestion.svg"
                />
              </button>
              <button className={styles.calendar2}>
                <img
                  className={styles.vuesaxlinearnotificationIcon}
                  alt=""
                  src="/vuesaxlinearcalendar2.svg"
                />
              </button>
            </div>
            <div className={styles.profileContainer}>
              <button className={styles.frame}>
                <div className={styles.userDetails}>
                  <div className={styles.animaAgrawal}>Anima Agrawal</div>
                  <div className={styles.upIndia}>U.P, India</div>
                </div>
                <img
                  className={styles.profileimgIcon}
                  alt=""
                  src="/profileimg@2x.png"
                />
              </button>
              <button className={styles.arrowDown}>
                <img
                  className={styles.vuesaxlinearnotificationIcon}
                  alt=""
                  src="/arrowdown.svg"
                />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.currproject}>
          <div className={styles.header}>
            <div className={styles.projectDetails}>
              <div className={styles.mobileApp}>Mobile App</div>
              <div className={styles.btns}>
                <button className={styles.editbtn}>
                  <img
                    className={styles.vuesaxlinearnotificationIcon}
                    alt=""
                    src="/vuesaxlineararrowsquareup.svg"
                  />
                </button>
                <button className={styles.sharebtn}>
                  <img
                    className={styles.squareUpIcon}
                    alt=""
                    src="/squareup.svg"
                  />
                  <img
                    className={styles.shareLinkIcon}
                    alt=""
                    src="/sharelink.svg"
                  />
                </button>
              </div>
            </div>
            <div className={styles.peopleonline}>
              <button className={styles.vuesaxlinearaddSquareParent}>
                <img
                  className={styles.vuesaxlinearaddSquareIcon}
                  alt=""
                  src="/vuesaxlinearaddsquare.svg"
                />
                <div className={styles.invite}>Invite</div>
              </button>
              <div className={styles.ellipseParent}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/ellipse-12@2x.png"
                />
                <img
                  className={styles.frameItem}
                  alt=""
                  src="/ellipse-13@2x.png"
                />
                <img
                  className={styles.frameInner}
                  alt=""
                  src="/ellipse-15@2x.png"
                />
                <img
                  className={styles.ellipseIcon}
                  alt=""
                  src="/ellipse-14@2x.png"
                />
                <div className={styles.ellipseDiv} />
                <div className={styles.div}>+2</div>
              </div>
            </div>
          </div>
          <div className={styles.options}>
            <div className={styles.filtersContainer}>
              <button className={styles.filterBtn}>
                <img
                  className={styles.vuesaxlinearfilterIcon}
                  alt=""
                  src="/vuesaxlinearfilter.svg"
                />
                <div className={styles.frame1}>
                  <div className={styles.filter}>Filter</div>
                  <img
                    className={styles.vuesaxlinearfilterIcon}
                    alt=""
                    src="/vuesaxoutlinearrowdown.svg"
                  />
                </div>
              </button>
              <button className={styles.dateBtn}>
                <img
                  className={styles.calendarIcon}
                  alt=""
                  src="/calendar.svg"
                />
                <div className={styles.frame2}>
                  <div className={styles.filter}>Today</div>
                  <img
                    className={styles.vuesaxlinearfilterIcon}
                    alt=""
                    src="/vuesaxoutlinearrowdown1.svg"
                  />
                </div>
              </button>
            </div>
            <div className={styles.otherOptions}>
              <button className={styles.shareBtn}>
                <img
                  className={styles.vuesaxlinearfilterIcon}
                  alt=""
                  src="/profileicon.svg"
                />
                <div className={styles.filter}>Share</div>
              </button>
              <img
                className={styles.otherOptionsChild}
                alt=""
                src="/vector-10.svg"
              />
              <div className={styles.frame3}>
                <button className={styles.vuesaxlinearmenu}>
                  <img
                    className={styles.vuesaxlinearnotificationIcon}
                    alt=""
                    src="/vuesaxlinearmenu.svg"
                  />
                </button>
                <button className={styles.rectangleParent}>
                  <div className={styles.groupChild} />
                  <img
                    className={styles.vuesaxlinearpauseIcon}
                    alt=""
                    src="/vuesaxlinearpause.svg"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className={styles.cardContainers}>
            <div className={styles.todoContainer}>
              <div className={styles.header1}>
                <div className={styles.toDo}>To Do</div>
                <div className={styles.headerChild} />
                <button className={styles.addbtn}>
                  <img
                    className={styles.vuesaxlinearnotificationIcon}
                    alt=""
                    src="/addbtn.svg"
                  />
                </button>
                <div className={styles.cardCount}>
                  <div className={styles.low}>4</div>
                </div>
              </div>
              <img
                className={styles.todoContainerChild}
                alt=""
                src="/vector-11.svg"
              />
              <BrainstormingContainer
                fileIds="/group-633.svg"
                imageFileIds="/vuesaxoutlinemessage.svg"
                smallImageFileIds="/vuesaxlinearfolder2.svg"
                fileCount="0 files"
                brainstormingText="Brainstorming"
                brainstormingDescription="Brainstorming brings team members' diverse experience into play. "
                statusText="Low"
                propGap="43px"
                propWidth="168px"
                propWidth1="56px"
                propColor="#787486"
                propBackgroundColor="rgba(223, 168, 116, 0.2)"
                propWidth2="36px"
                propColor1="#d58d49"
              />
              <ResearchContainer
                commentCount="/group-6331.svg"
                fileCount="/vuesaxoutlinemessage1.svg"
                commentText="10 comments"
                userAvatarUrl="/vuesaxlinearfolder21.svg"
                fileCountText="3 files"
                researchText="Research"
                wireframeText="User research helps you to create an optimal product for users."
              />
              <ResearchContainer
                commentCount="/group-6332.svg"
                fileCount="/vuesaxoutlinemessage2.svg"
                commentText="2 comments"
                userAvatarUrl="/vuesaxlinearfolder22.svg"
                fileCountText="0 files"
                researchText="Wireframes"
                wireframeText="Low fidelity wireframes include the most basic content and visuals."
                propGap="49px"
                propWidth="63px"
                propWidth1="162px"
                propWidth2="92px"
                propTop="47px"
                propTop1="19px"
                propTop2="20px"
                propLeft="20px"
              />
            </div>
            <div className={styles.onprogressContainer}>
              <div className={styles.header2}>
                <div className={styles.toDo}>On Progress</div>
                <div className={styles.cardCount1}>
                  <div className={styles.low}>3</div>
                </div>
                <div className={styles.headerItem} />
              </div>
              <img
                className={styles.todoContainerChild}
                alt=""
                src="/vector-12.svg"
              />
              <div className={styles.caradOnboarding}>
                <img
                  className={styles.unsplashmicqqgydq6wIcon}
                  alt=""
                  src="/unsplashmicqqgydq6w@2x.png"
                />
                <div className={styles.peopleOnprogress}>
                  <button className={styles.vuesaxlinearfolder2Parent}>
                    <img
                      className={styles.vuesaxlinearfolder2Icon}
                      alt=""
                      src="/vuesaxlinearfolder23.svg"
                    />
                    <img
                      className={styles.vuesaxoutlinemessageIcon}
                      alt=""
                      src="/vuesaxoutlinemessage3.svg"
                    />
                    <div className={styles.comments}>14 comments</div>
                    <div className={styles.files}>15 files</div>
                  </button>
                  <img
                    className={styles.peopleOnprogressChild}
                    alt=""
                    src="/ellipse-151@2x.png"
                  />
                  <img
                    className={styles.peopleOnprogressItem}
                    alt=""
                    src="/ellipse-131@2x.png"
                  />
                  <img
                    className={styles.peopleOnprogressInner}
                    alt=""
                    src="/ellipse-121@2x.png"
                  />
                </div>
                <div
                  className={styles.onboardingIllustrations}
                >{`Onboarding Illustrations `}</div>
                <button className={styles.button}>. . .</button>
                <div className={styles.priorityLow}>
                  <div className={styles.low}>Low</div>
                </div>
              </div>
              <Footer
                productIds="/vuesaxlinearfolder22.svg"
                productIdsArray="/vuesaxoutlinemessage4.svg"
              />
              <Footer
                productIds="/vuesaxlinearfolder24.svg"
                productIdsArray="/vuesaxoutlinemessage5.svg"
              />
            </div>
            <div className={styles.doneContainer}>
              <div className={styles.header3}>
                <div className={styles.done}>Done</div>
                <div className={styles.headerInner} />
                <div className={styles.cardCount2}>
                  <div className={styles.low}>2</div>
                </div>
              </div>
              <img
                className={styles.todoContainerChild}
                alt=""
                src="/vector-13.svg"
              />
              <div className={styles.cardMobileappdesign}>
                <div className={styles.cardMobileappdesignChild} />
                <img
                  className={styles.imgContainerIcon}
                  alt=""
                  src="/imgcontainer@2x.png"
                />
                <div className={styles.peopleMobileappd}>
                  <img className={styles.frameIcon} alt="" src="/frame2.svg" />
                  <button className={styles.frameParent}>
                    <div className={styles.frame4}>
                      <img
                        className={styles.vuesaxlinearfilterIcon}
                        alt=""
                        src="/vuesaxoutlinemessage6.svg"
                      />
                      <div className={styles.comments1}>12 comments</div>
                    </div>
                    <div className={styles.frame5}>
                      <img
                        className={styles.vuesaxlinearfilterIcon}
                        alt=""
                        src="/vuesaxlinearfolder25.svg"
                      />
                      <div className={styles.comments1}>15 files</div>
                    </div>
                  </button>
                </div>
                <div className={styles.onboardingIllustrations}>
                  Mobile App Design
                </div>
                <button className={styles.button}>. . .</button>
                <div className={styles.statusCompleted}>
                  <div className={styles.low}>Completed</div>
                </div>
              </div>
              <BrainstormingContainer
                fileIds="/group-6333.svg"
                imageFileIds="/vuesaxoutlinemessage2.svg"
                smallImageFileIds="/vuesaxlinearfolder26.svg"
                fileCount="15 files"
                brainstormingText="Design System"
                brainstormingDescription="It just needs to adapt the UI from what you did before "
                statusText="Completed"
                propOverflow="hidden"
                propFlexShrink="0"
                propGap="37px"
                propWidth="174px"
                propWidth1="62px"
                propColor="#0d062d"
                propBackgroundColor="rgba(131, 194, 157, 0.2)"
                propWidth2="76px"
                propColor1="#68b266"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop;
