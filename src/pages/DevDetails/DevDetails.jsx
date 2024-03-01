import { useState } from "react";
import styles from "./DevDetails.module.scss";
import { useNavigate } from "react-router-dom";

export function DevDetails(props) {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/dev");
  };
  const [viewing, setViewing] = useState(false);
  const [imageSrc, setImageSrc] = useState("");

  return (
    <div className={styles.devdetails}>
      <span className="close" onClick={handleClose}>
        &times;
      </span>
      <h1>{props.name}</h1>

      <div className={`${styles.details} ${styles.light}`}>
        <div className={styles.left}>
          <div key="links">
            <h3>LINKS</h3>
            <div className={styles.links}>
              {props.link && (
                <button>
                  <a target="_blank" rel="noreferrer" href={props.link}>
                    Visit
                  </a>
                </button>
              )}

              {props.source_code_link && (
                <button>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={props.source_code_link}
                  >
                    Code
                  </a>
                </button>
              )}
            </div>
          </div>

          <div key="technologies">
            <h3>TECHNOLOGIES</h3>
            {props.tags.map((tag) => (
              <span> {tag.name} </span>
            ))}
          </div>

          <div key="year">
            <h3>YEAR</h3>
            <span>2023</span>
          </div>
        </div>

        <div className={styles.right}>
          <div>
            <h3>The Project</h3>
            <p>{props.description}</p>
          </div>
        </div>
      </div>

      <div className={styles.images}>
        {props.images.map((image, idx) => (
          <div className={styles.imgWrapper} key={idx}>
            <img
              src={`${image}`}
              alt=""
              onClick={(e) => {
                setViewing(true);
                setImageSrc(e.target.src);
              }}
            />
          </div>
        ))}
      </div>

      <div
        className={styles.lightbox + (viewing ? ` ${styles.active}` : "")}
        onClick={() => setViewing(false)}
      >
        <img src={imageSrc} alt="lightbox of selected image" />
      </div>
    </div>
  );
}
