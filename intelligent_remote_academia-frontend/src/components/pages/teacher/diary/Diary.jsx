import React from 'react';
import DiaryForm from './DiaryForm';
import DiaryList from './DiaryList';

const Diary = () => {
  return (
    <React.Fragment>
      <DiaryForm />
      <DiaryList />
    </React.Fragment>
  );
};

export default Diary;
