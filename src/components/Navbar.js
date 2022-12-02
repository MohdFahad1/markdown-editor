import "../styles.css";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <h1>Mark Down Editor</h1>
        <p>
          Here's a cheat sheet to know how to use{" "}
          <a
            href="https://www.markdownguide.org/cheat-sheet"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i>
              {" "}
              <u>MarkDown</u>{" "}
            </i>
          </a>{" "}
          Editor{" "}
        </p>
      </div>
    </>
  );
}
