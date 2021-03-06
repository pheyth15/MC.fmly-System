/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { ListGroup } from 'react-bootstrap';
import Commit from '../../components/SysInfo/Commit';
import { Loader } from '../../components/common/Loaders';
import { ListContainer } from '../../components/SysInfo/modules/SysInfo';
import { CommitsApi } from '../../api/github/Commits';

/*****************************************************
 * * Get commits from project repository (GitHub API)
 *****************************************************/

export default function Development() {
  const { data } = CommitsApi();

  return (
    <ListContainer>
      <ListGroup>
        {data && true ? (
          data && data.map((commit) => Commit(commit))
        ) : (
          <Loader />
        )}
      </ListGroup>
    </ListContainer>
  );
}
