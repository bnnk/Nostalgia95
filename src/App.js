import * as React from "react";

import TaskBar from "@react95/core/esm/TaskBar";

import { Modal } from "@react95/core/esm/Modal";

import List from "@react95/core/esm/List";
import "@react95/icons/icons.css";
import { ReaderClosed, WindowsExplorer } from "@react95/icons";

export const App = () => {
  const [first, toggleFirst] = React.useState(false);

  const [second, toggleSecond] = React.useState(false);

  const closeFirst = () => toggleFirst(false);

  const closeSecond = () => toggleSecond(false);

  return (
    <>
      {first && (
        <Modal
          icon={<WindowsExplorer variant="16x16_4" />}
          title="Windows Explorer"
          closeModal={closeFirst}
          width="300"
          height="200"
        />
      )}

      {second && (
        <Modal
          defaultPosition={{ x: 50, y: 50 }}
          width="300"
          height="200"
          icon={<ReaderClosed variant="16x16_4" />}
          title="Local Disk (C:)"
          closeModal={closeSecond}
        />
      )}

      <TaskBar
        list={
          <List>
            <List.Item
              icon={<ReaderClosed variant="32x32_4" />}
              onClick={() => toggleSecond(true)}
            >
              Local Disk (C:)
            </List.Item>

            <List.Item
              icon={<WindowsExplorer variant="32x32_4" />}
              onClick={() => {
                toggleFirst(true);
              }}
            >
              Windows Explorer
            </List.Item>
          </List>
        }
      />
    </>
  );
};
