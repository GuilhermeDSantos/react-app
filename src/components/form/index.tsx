import React from 'react';
import {Button} from "../button";
import style from './form.module.scss';

export class Form extends React.Component {
  render() {
    return (
        <form className={style.newTask}>
            <div className={style.inputContainer}>
                <label htmlFor="task">
                    Add a task
                </label>
                <input
                    type="text"
                    name="task"
                    id="task"
                    placeholder="What do you need to do?"
                    required
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="time">
                    For how long?
                </label>
                <input
                    type="time"
                    step="1"
                    name="time"
                    id="time"
                    min="00:00:00"
                    max="01:30:00"
                    required
                />
            </div>
            <Button></Button>
        </form>
    )
  }
}