import React, { useState } from 'react';


const HtmlToTextConverter = ({ html }) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: html }}></div>
          
  );
};

export default HtmlToTextConverter;
