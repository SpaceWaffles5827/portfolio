import NavBar from "../components/NavBar";
import Project from "../components/project";

export default function projects() {
    return (
      <>
        <NavBar></NavBar>
        <div className="projects">
            <Project></Project>
            <Project></Project>
            <Project></Project>
            <Project></Project>
        </div>
      </>
    )
  }