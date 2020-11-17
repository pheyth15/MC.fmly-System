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

/*
 * Narrow Products Interface
 * @param {string} code - Product Code/SKU
 * @param {string} name - Product Name
 * @param {string} variant - Product Variant
 * @param {string} type - Product Type
 * @param {string} category - Product Category
 * @param {number} quantity - Product Quantity
 * @param {date} updatedAt - Date Updated
 * */
export interface IProducts {
  _id?: string;
  code: string;
  name: string;
  variant: string;
  type: string;
  category: string;
  quantity: number;
  updatedAt?: Date;
}

/*
 * Expanded Products Interface
 * @param {string} username - Username
 * @param {string} name - User Full Name
 * @param {string} role - User Role
 * @param {string} role - Access Permission
 * @param {date} date - Date Joined/Created
 * */
export interface IExpProducts {
  _id?: string;
  code: string;
  name: string;
  variant: string;
  type: string;
  category: string;
  quantity: number;
  price: number;
  createdAt?: Date;
  updatedAt?: Date;
}
