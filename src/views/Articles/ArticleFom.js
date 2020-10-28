import React from 'react'
import {Button, Card, Form, Col} from 'react-bootstrap'
import {useForm} from "react-hook-form"
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from "yup"

const schema = yup.object().shape({
  sku: yup.string(),
  name: yup.string().required("Campo obligatiorio"),
  quantity: yup.number().integer().positive().required("Campo obligatiorio"),
  price: yup.number().positive().required("Campo obligatiorio"),
  remark: yup.string(),
  image_url: yup.string(),
});

const ArticleFom = (props) => {

  const {register, handleSubmit, errors, formState} = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema)
  });
  const {isSubmitting, touched} = formState;
  
  const onSubmit = async data => {
    console.log(data)
    //const response = await AuthManagement.register(data);

    // if(response.data)
    // {
    //   props.onAuthSuccess(response.data.data)
    // }
  };

  return (
    <Card>
      <Card.Body>
        <Form noValidate onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <Card.Title>Nuevo artículo
            <div className="float-right">
              <Button variant="primary" type="submit">Guardar</Button>
            </div>
          </Card.Title>

          <Form.Group controlId="sku" className="mb-2">
            <Form.Label>Sku</Form.Label>
            <Form.Control 
              type="text" 
              name="sku"
              isValid={touched.sku && !errors.sku}
              isInvalid={!!errors.sku}
              disabled={isSubmitting}
              ref={register}
            />
            <Form.Control.Feedback type="invalid">
              {errors.sku && errors.sku.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="name" className="mb-2">
            <Form.Label required>Nombre</Form.Label>
            <Form.Control 
              type="text" 
              name="name" 
              isValid={touched.name && !errors.name}
              isInvalid={!!errors.name}
              disabled={isSubmitting}
              ref={register}
            />
            <Form.Control.Feedback type="invalid">
              {errors.name && errors.name.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="quantity" className="mb-2">
              <Form.Label required>Cantidad</Form.Label>
              <Form.Control 
                type="text" 
                name="quantity" 
                isValid={touched.quantity && !errors.quantity}
                isInvalid={!!errors.quantity}
                disabled={isSubmitting}
                ref={register}
              />
              <Form.Control.Feedback type="invalid">
                {errors.quantity && errors.quantity.message}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} controlId="price" className="mb-2">
              <Form.Label required>Precio</Form.Label>
              <Form.Control 
                type="text" 
                name="price" 
                isValid={touched.price && !errors.price}
                isInvalid={!!errors.price}
                disabled={isSubmitting}
                ref={register}
              />
              <Form.Control.Feedback type="invalid">
                {errors.price && errors.price.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>


          <Form.Group controlId="remark" className="mb-2">
            <Form.Label>Descripción</Form.Label>
            <Form.Control 
              type="text" 
              name="remark" 
              isValid={touched.remark && !errors.remark}
              isInvalid={!!errors.remark}
              disabled={isSubmitting}
              ref={register}
            />
            <Form.Control.Feedback type="invalid">
              {errors.remark && errors.remark.message}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="image_url" className="mb-2">
            <Form.Label>URL de imagen</Form.Label>
            <Form.Control 
              type="text" 
              name="image_url" 
              isValid={touched.image_url && !errors.image_url}
              isInvalid={!!errors.image_url}
              disabled={isSubmitting}
              ref={register}
            />
            <Form.Control.Feedback type="invalid">
              {errors.image_url && errors.image_url.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default ArticleFom;
