import { useContext, useRef, useState, React, createRef} from 'react';
import CardTask from './CardTask';
import ContextValue from '../contextElement';
import { memo } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ContentTask = (props) => {
  const { task } = props;
  const { deleteTask } = useContext(ContextValue);

  // Создаем массив рефов для каждого элемента задачи
  const nodeRefs = useRef([]);

  // Обеспечиваем, чтобы рефы соответствовали длине task
  if (nodeRefs.current.length !== task.length) {
    nodeRefs.current = Array(task.length)
      .fill()
      .map((_, i) => nodeRefs.current[i] || createRef());
  }

  return (
    <section className="contentTask">
      <TransitionGroup className="taskList__wrapper">
        {task.map((tasks, index) => (
          <CSSTransition
            key={tasks.id}
            nodeRef={nodeRefs.current[index]}
            classNames="fade"
            timeout={300}
          >
            <CardTask
              contentTask={tasks.content}
              taskID={tasks.id}
              dateTask={tasks.date}
              deleteTask={deleteTask}
              noder={nodeRefs.current[index]} // Передача индивидуального ref
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </section>
  );
};

export default memo(ContentTask);