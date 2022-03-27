import React from "react";

const TitleComponent = React.memo((props: { title: string }) => {
  const { title } = props;

  return (
    <p className='posts-title'>
      {title}
    </p>
  )
});

export default TitleComponent;