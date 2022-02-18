import React from 'react';
import { faker } from '@faker-js/faker';

function Comment(props) {
  return (
    <div className="ui comments">
    <h3 className="ui dividing header">Comments</h3>
    <div className="comment">
      <a className="avatar" href="">
        <img alt="avatar" src={faker.image.avatar()}/>
      </a>
      <div className="content">
        <a className="author">{props.name}</a>
        <div className="metadata">
          <span className="date">Today at 5:42PM</span>
        </div>
        <div className="text">
          {props.comment}
        </div>
        <div className="actions">
          <a className="reply">Reply</a>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Comment
