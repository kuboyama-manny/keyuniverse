import React from 'react';

const AjaxLoader = ({ visible }) => {
  return (
    <div>
      {
        visible
          ?
          (
            <div className={'spinner'}>
              <div className={'spinner__container'}>
                <div className={'double-bounce1'}/>
                <div className={'double-bounce2'}/>
              </div>
            </div>
          )
          :
          null
      }
    </div>
  )
};

/**
 * @module AjaxLoader
 */

export default AjaxLoader;