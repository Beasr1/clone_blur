"use client";

import React, { useState } from "react";
import styles from "./Traits.module.scss";

const Traits = () => {
  const [expandedSections, setExpandedSections] = useState({
    background: false,
    clothes: false,
    earrings: false,
    eyes: false,
    fur: false,
    hat: false,
    mouth: false,
  });
  const [selectedBackgrounds, setSelectedBackgrounds] = useState([]);
  const [back, setBack] = useState([
    "Gray",
    "New Punk Blue",
    "Blue",
    "Army Green",
    "Aquamarine",
    "Orange",
    "Yellow",
    "Purple",
  ]);
  const [clothes, setClothes] = useState([
    "Black Suit",
    "Admirals Coat",
    "Kings Robe",
    "Pimp Coat",
    "Blue Dress",
    "Prom Dress",
    "Space Suit",
    "Cowboy Shirt",
    "Hip Hop",
    "Rainbow Suspenders",
    "Bayc T Red",
    "Tweed Suit",
    "Service",
    "Tie Dye",
    "Lab Coat",
    "Sleeveless Logo T",
    "Leather Punk Jacket",
    "Bandolier",
    "Caveman Pelt",
    "Stunt Jacket",
    "Work Vest",
    "Toga",
    "Bone Necklace",
    "Black Holes T",
    "Leather Jacket",
    "Lumberjack Shirt",
    "Bayc T Black",
    "Smoking Jacket",
    "Vietnam Jacket",
    "Puffy Vest",
    "Bone Tee",
    "Guayabera",
    "Tanktop",
    "Tuxedo Tee",
    "Prison Jumpsuit",
    "Wool Turtleneck",
    "Sleeveless T",
    "Biker Vest",
    "Hawaiian",
    "Sailor Shirt",
    "Black T",
    "Navy Striped Tee",
    "Striped Tee",
  ]);
  const [selectedEarring, setSelectedEarring] = useState([
    "Cross",
    "Diamond Stud",
    "Gold Stud",
    "Gold Hoop",
    "Silver Stud",
    "Silver Hoop",
  ]);
  const [selectedEyes, setSelectedEyes] = useState([
    "Search",
    "Blue Beams",
    "Laser Eyes",
    "Cyborg",
    "Holographic",
    "Hypnotized",
    "Scumbag",
    "X Eyes",
    "Blindfold",
    "Zombie",
    "Eyepatch",
    "Robot",
    "Sunglasses",
    "Heart",
    "Crazy",
    "Angry",
    "Coins",
    "3d",
    "Wide Eyed",
    "Sad",
    "Closed",
    "Sleepy",
    "Bloodshot",
    "Bored",
  ]);
  const [selectedFur, setSelectedFur] = useState([
    "Search",
    "Solid Gold",
    "Trippy",
    "Noise",
    "Death Bot",
    "Dmt",
    "Robot",
    "Zombie",
    "White",
    "Cheetah",
    "Red",
    "Blue",
    "Gray",
    "Pink",
    "Tan",
    "Cream",
    "Golden Brown",
    "Black",
    "Dark Brown",
    "Brown",
  ]);
  const [selectedHat, setSelectedHat] = useState([
    "Search",
    "Trippy Captain's Hat",
    "Laurel Wreath",
    "King's Crown",
    "Bandana Blue",
    "Girl's Hair Pink",
    "Party Hat 2",
    "Ww2 Pilot Helm",
    "Bayc Hat Red",
    "Party Hat 1",
    "Prussian Helmet",
    "Police Motorcycle Helmet",
    "Faux Hawk",
    "Girl's Hair Short",
    "Stuntman Helmet",
    "Baby's Bonnet",
    "Spinner Hat",
    "Safari",
    "Sushi Chef Headband",
    "Bunny Ears",
    "Vietnam Era Helmet",
    "Irish Boho",
    "Bayc Hat Black",
    "Bayc Flipped Brim",
    "S&m Hat",
    "Horns",
    "Bowler",
    "Army Hat",
    "Commie Hat",
    "Sea Captain's Hat",
    "Short Mohawk",
    "Halo",
    "Fisherman's Hat",
    "Cowboy Hat",
    "Fez",
    "Seaman's Hat",
    "Beanie",
  ]);
  const [selectedMouth, setSelectedMouth] = useState([
    "Bored Unshaven Pizza",
    "Bored Unshaven Dagger",
    "Bored Unshaven Party horn",
    "Bored Dagger",
    "Bored Pizza",
    "Bored Unshaven Kazoo",
    "Bored Unshaven Bubblegum",
    "Bored Kazoo",
    "Grin Diamond Grill",
    "Bored Party Horn",
    "Grin Gold Grill",
    "Bored Unshaven Cigar",
    "Bored Unshaven Pipe",
    "Grin Multicolored",
    "Bored Bubblegum",
    "Bored Cigar",
    "Bored Pipe",
    "Phoneme Wah",
    "Tongue Out",
    "Discomfort",
    "Phoneme Oh",
    "Phoneme L",
    "Phoneme ooo",
    "Rage",
    "Small Grin",
    "Jovial",
    "Phoneme Vuh",
    "Bored Unshaven Cigarette",
    "Dumbfounded",
    "Bored Cigarette",
    "Grin",
    "Bored Unshaven",
    "Bored",
  ]);
  const handleCheckboxChange = (value) => {
    // Toggle the selected value in the state array
    if (selectedBackgrounds.includes(value)) {
      setSelectedBackgrounds(
        selectedBackgrounds.filter((item) => item !== value)
      );
    } else {
      setSelectedBackgrounds([...selectedBackgrounds, value]);
    }
  };

  const toggleSection = (section) => {
    setExpandedSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className={styles["traits-container"]}>
      <div className={styles["section-title"]}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
        Traits
      </div>

      <div
        className={`${styles["trait-item"]} ${
          expandedSections.background ? styles["expanded"] : ""
        }`}
        // onClick={() => toggleSection("background")}
      >
        <div
          onClick={() => toggleSection("background")}
          className={styles.text}
        >
          Background
        </div>
        {expandedSections.background && (
          <div>
            <div className={styles["expanded-text"]}>
              {back.map((color) => (
                <div
                  key={color}
                  style={{
                    display: "flex",
                    cursor: "pointer",
                    paddingLeft: "12px",
                    marginBottom: "10px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      position: "relative",
                      userSelect: "none",
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={selectedBackgrounds.includes(color)}
                      onChange={() => handleCheckboxChange(color)}
                    />
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flex: "1 1 0%",
                      paddingLeft: "12px",
                      marginBottom: "10px",
                    }}
                  >
                    <div>{color}</div>
                    <div>1234</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div
        className={`${styles["trait-item"]} ${
          expandedSections.clothes ? styles["expanded"] : ""
        }`}
      >
        <div onClick={() => toggleSection("clothes")} className={styles.text}>
          Clothes
        </div>
        {expandedSections.clothes && (
          <div>
            <div className={styles["expanded-text"]}>
              {clothes.map((color) => (
                <div
                  key={color}
                  style={{
                    display: "flex",
                    cursor: "pointer",
                    paddingLeft: "12px",
                    marginBottom: "10px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      position: "relative",
                      userSelect: "none",
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={selectedBackgrounds.includes(color)}
                      onChange={() => handleCheckboxChange(color)}
                    />
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flex: "1 1 0%",
                      paddingLeft: "12px",
                      marginBottom: "10px",
                    }}
                  >
                    <div>{color}</div>
                    <div>1234</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div
        className={`${styles["trait-item"]} ${
          expandedSections.earrings ? styles["expanded"] : ""
        }`}
      >
        <div onClick={() => toggleSection("earrings")} className={styles.text}>
          Earrings
        </div>
        {expandedSections.earrings && (
          <div>
            <div className={styles["expanded-text"]}>
              {selectedEarring.map((color) => (
                <div
                  key={color}
                  style={{
                    display: "flex",
                    cursor: "pointer",
                    paddingLeft: "12px",
                    marginBottom: "10px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      position: "relative",
                      userSelect: "none",
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={selectedBackgrounds.includes(color)}
                      onChange={() => handleCheckboxChange(color)}
                    />
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flex: "1 1 0%",
                      paddingLeft: "12px",
                      marginBottom: "10px",
                    }}
                  >
                    <div>{color}</div>
                    <div>1234</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div
        className={`${styles["trait-item"]} ${
          expandedSections.eyes ? styles["expanded"] : ""
        }`}
      >
        <div onClick={() => toggleSection("eyes")} className={styles.text}>
          Eyes
        </div>
        {expandedSections.eyes && (
          <div>
            <div className={styles["expanded-text"]}>
              {selectedEyes.map((color) => (
                <div
                  key={color}
                  style={{
                    display: "flex",
                    cursor: "pointer",
                    paddingLeft: "12px",
                    marginBottom: "10px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      position: "relative",
                      userSelect: "none",
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={selectedBackgrounds.includes(color)}
                      onChange={() => handleCheckboxChange(color)}
                    />
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flex: "1 1 0%",
                      paddingLeft: "12px",
                      marginBottom: "10px",
                    }}
                  >
                    <div>{color}</div>
                    <div>1234</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div
        className={`${styles["trait-item"]} ${
          expandedSections.fur ? styles["expanded"] : ""
        }`}
      >
        <div onClick={() => toggleSection("fur")} className={styles.text}>
          Fur
        </div>
        {expandedSections.fur && (
          <div>
            <div className={styles["expanded-text"]}>
              {selectedFur.map((color) => (
                <div
                  key={color}
                  style={{
                    display: "flex",
                    cursor: "pointer",
                    paddingLeft: "12px",
                    marginBottom: "10px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      position: "relative",
                      userSelect: "none",
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={selectedBackgrounds.includes(color)}
                      onChange={() => handleCheckboxChange(color)}
                    />
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flex: "1 1 0%",
                      paddingLeft: "12px",
                      marginBottom: "10px",
                    }}
                  >
                    <div>{color}</div>
                    <div>1234</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div
        className={`${styles["trait-item"]} ${
          expandedSections.hat ? styles["expanded"] : ""
        }`}
      >
        <div onClick={() => toggleSection("hat")} className={styles.text}>
          Hat
        </div>
        {expandedSections.hat && (
          <div>
            <div className={styles["expanded-text"]}>
              {selectedHat.map((color) => (
                <div
                  key={color}
                  style={{
                    display: "flex",
                    cursor: "pointer",
                    paddingLeft: "12px",
                    marginBottom: "10px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      position: "relative",
                      userSelect: "none",
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={selectedBackgrounds.includes(color)}
                      onChange={() => handleCheckboxChange(color)}
                    />
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flex: "1 1 0%",
                      paddingLeft: "12px",
                      marginBottom: "10px",
                    }}
                  >
                    <div>{color}</div>
                    <div>1234</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div
        className={`${styles["trait-item"]} ${
          expandedSections.mouth ? styles["expanded"] : ""
        }`}
      >
        <div onClick={() => toggleSection("mouth")} className={styles.text}>
          Mouth
        </div>
        {expandedSections.mouth && (
          <div>
            <div className={styles["expanded-text"]}>
              {selectedMouth.map((color) => (
                <div
                  key={color}
                  style={{
                    display: "flex",
                    cursor: "pointer",
                    paddingLeft: "12px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      position: "relative",
                      userSelect: "none",
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={selectedBackgrounds.includes(color)}
                      onChange={() => handleCheckboxChange(color)}
                    />
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flex: "1 1 0%",
                      paddingLeft: "12px",
                      marginBottom: "10px",
                    }}
                  >
                    <div>{color}</div>
                    <div>1234</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Traits;
