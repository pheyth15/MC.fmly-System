/*
 *     MC.fmly Inventory System
 *     Copyright (C) 2020  Joshua Hero H. Dela Cruz
 *
 *     This program is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     (at your option) any later version.
 *
 *     This program is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU General Public License for more details.
 *
 *     You should have received a copy of the GNU General Public License
 *     along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import { useEffect, useState } from 'react';
import { UsersRequest } from '../services/http';
import { IUser } from '../interfaces/User';

export interface UsersList {
  content: IUser[];
}

const useUsers: () => [UsersList] = () => {
  const [users, setUsers] = useState<UsersList>({ content: [] });

  useEffect(() => {
    if (!users) {
      fetchProducts().catch((e) => {
        console.error(e);
      });
    }
  }, [users]);

  const fetchProducts = async () => {
    const res = await UsersRequest.get();
    setUsers(res);
  };

  return [users];
};

export default useUsers;
