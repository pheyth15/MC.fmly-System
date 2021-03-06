/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { memo } from 'react';
import Button from 'react-bootstrap/Button';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { StatusApi } from '../api/Status';

/*********************************
 * * Server Status Display Icon
 *********************************/

const ApiStatus = memo((props) => {
  const { data } = StatusApi();

  // * Display Status Icon based on response
  const StatusDisplay = () => {
    return (
      <FontAwesomeIcon
        icon={faCircle}
        style={{
          color: data ? '#4de670' : '#ec2738',
          boxShadow: data
            ? '0 0 7px 5px rgba(77, 230, 112, 0.4)'
            : '0 0 7px 5px rgba(236, 39, 56, 0.4)',
          borderRadius: '100%',
          outline: 'none !important'
        }}
      />
    );
  };

  return (
    <div
      style={{
        position: 'absolute',
        bottom: '1.5rem',
        right: '1.5rem',
        left: props.left,
        zIndex: 3,
        width: 'max-content'
      }}
    >
      <OverlayTrigger
        placement={props.placement}
        delay={{
          show: 100,
          hide: 300
        }}
        overlay={
          <Tooltip id="">
            {data && true ? (
              <p className="m-0">System is operational.</p>
            ) : (
              <p className="m-0">System is currently down.</p>
            )}
          </Tooltip>
        }
      >
        <Button
          type="button"
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            outline: 'none',
            boxShadow: 'none'
          }}
        >
          <StatusDisplay />
        </Button>
      </OverlayTrigger>
    </div>
  );
});

export default ApiStatus;
