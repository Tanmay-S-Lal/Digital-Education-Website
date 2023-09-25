import React from 'react';
import { NAVBAR_CHAPTER } from './NavBar';
import ChapterIdx from '../Components/MyComponents/ChapterIdx.jsx';
import '../Components/Styles/style_chapter_index.css';

function ChapterIndexScreen() {
  return (
    <>
    <NAVBAR_CHAPTER/>
    <ChapterIdx/>
    </>
  )
}

export default ChapterIndexScreen;
