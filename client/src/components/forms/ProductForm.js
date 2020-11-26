/*
 *     MC.fmly Inventory Management System
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

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import CustomModal from '../common/CustomModal';
import { ModalForm, Required } from './__forms.module';

/*******************************
 * * Product Modal Form
 *******************************/

export default function ProductForm(props) {
  return (
    <CustomModal
      {...props}
      size="lg"
      header={props.header}
      title={props.title}
      content={
        <ModalForm autoComplete="new-text" autoSave="off">
          <Form.Row>
            {/* Product Code (SKU) */}
            <Form.Group as={Col} controlId="formGridCode">
              <Form.Label>
                Code (SKU) <Required>*</Required>
              </Form.Label>
              <Form.Control
                className="input-box"
                type="text"
                placeholder="STC00001"
                autoComplete="new-text"
                autoSave="off"
                required
              />
            </Form.Group>

            {/* Product Name */}
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>
                Name <Required>*</Required>
              </Form.Label>
              <Form.Control
                className="input-box"
                type="text"
                placeholder="Heart Sticker"
                autoComplete="new-text"
                autoSave="off"
                required
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            {/* Product Variant */}
            <Form.Group as={Col} controlId="formGridVariant">
              <Form.Label>Variant</Form.Label>
              <Form.Control
                className="input-box"
                placeholder="Black"
                autoComplete="new-text"
                autoSave="off"
              />
            </Form.Group>

            {/* Product Type */}
            <Form.Group as={Col} controlId="formGridType">
              <Form.Label>
                Type <Required>*</Required>
              </Form.Label>
              <Form.Control
                className="input-box"
                placeholder="Sticker"
                autoComplete="new-text"
                autoSave="off"
                required
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            {/* Product Category */}
            <Form.Group as={Col} controlId="formGridCategory">
              <Form.Label>
                Category <Required>*</Required>
              </Form.Label>
              <Form.Control
                className="input-box"
                placeholder="Papercraft"
                autoComplete="new-text"
                autoSave="off"
                required
              />
            </Form.Group>

            {/* Product Quantity */}
            <Form.Group as={Col} controlId="formGridQuantity">
              <Form.Label>
                Quantity <Required>*</Required>
              </Form.Label>
              <Form.Control
                className="input-box"
                type="number"
                placeholder="10"
                autoComplete="new-text"
                autoSave="off"
                required
              />
            </Form.Group>

            {/* Product Price */}
            <Form.Group as={Col} controlId="formGridPrice">
              <Form.Label>Price</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text>₱</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  className="input-box"
                  type="number"
                  autoComplete="new-text"
                  autoSave="off"
                />
              </InputGroup>
            </Form.Group>
          </Form.Row>

          {/* Modal Actions */}
          <Form.Group>
            <Button
              variant="outline-danger float-right"
              type="button"
              onClick={props.cancel}
            >
              Cancel
            </Button>
            <Button
              variant="outline-primary float-right"
              type="submit"
              onClick={props.submit}
            >
              Save
            </Button>
          </Form.Group>
        </ModalForm>
      }
      onHide={props.onHide}
    />
  );
}
