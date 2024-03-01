import { Link, Outlet, useNavigate } from "react-router-dom";
import styles from "./Dev.module.scss";
import { projects } from "../../constant";

export function Dev(props) {
  const navigate = useNavigate();
  const delay = 0.6;

  const handleClose = () => {
    navigate("/");
  };

  return (
    <div className={styles.worklistwrapper}>
      <span className="close" onClick={handleClose}>
        &times;
      </span>
      <h1>My Work</h1>

      <div className={styles.worklist}>
        {projects.map((project, idx) => (
          <Link
            to={`/dev/${project.url}`}
            key={idx}
            style={{ animationDelay: `${delay + idx * 0.4}s` }}
          >
            <div className={styles.work}>
              <div className={styles.left}>
                <h6>{idx}</h6>
                <h3>{project.name}</h3>
              </div>
              <h5>{project.year}</h5>
            </div>
          </Link>
        ))}
      </div>
      <Outlet />
    </div>
  );
}
