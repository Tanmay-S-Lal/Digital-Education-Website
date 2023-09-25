import React from "react";
import { useNavigate } from "react-router-dom";

function ChapterIdx() {

    // Chapter Navigation Codes
    const navigate = useNavigate();

    const goToChapter1 = () => navigate("/class3/EVS/chapter1");
    const goToChapter2 = () => navigate("");
    const goToChapter3 = () => navigate("");
    const goToChapter4 = () => navigate("");
    const goToChapter5 = () => navigate("");
    const goToChapter6 = () => navigate("");


  return (
    <>
    <div className="chapterTableContainer">
      <table className="chapterTable">
        <thead className="chapterHead">
            <tr>
            <th>Sl.No</th>
            <th>Chapter Name</th>
            </tr>
        </thead>
        <tbody className="chapterBody">
            <tr onClick={goToChapter1}>
                <td>1</td>
                <td>Poonam's Day Out</td>
            </tr>
            <tr onClick={goToChapter2}>
                <td>2</td>
                <td>The Plant Fairy</td>
            </tr>
            <tr onClick={goToChapter3}>
                <td>3</td>
                <td>Water O' Water</td>
            </tr>
            <tr onClick={goToChapter4}>
                <td>4</td>
                <td>Our First School</td>
            </tr>
            <tr onClick={goToChapter5}>
                <td>5</td>
                <td>Chhotu's House</td>
            </tr>
            <tr onClick={goToChapter6}>
                <td>6</td>
                <td>Foods We Eat</td>
            </tr>
        </tbody>
      </table>
    </div>
    </>
  );
}

export default ChapterIdx;
