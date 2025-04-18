import { useContext, useEffect } from 'react';
import { Modal, Form, Input, InputNumber, message } from 'antd';
import { ProductContext } from '../context/ProductContext';

const AddProductModal = () => {
  const {
    modalVisible,
    setModalVisible,
    addProduct,
    selectedProduct,
    setSelectedProduct
  } = useContext(ProductContext);

  const [form] = Form.useForm();

  useEffect(() => {
    if (selectedProduct) {
      form.setFieldsValue(selectedProduct);
    } else {
      form.resetFields();
    }
  }, [selectedProduct, form]);

  const handleSubmit = (values) => {
    addProduct(values);
    message.success("Product added!");
    form.resetFields();
    setModalVisible(false);
    setSelectedProduct(null);
  };

  return (
    <Modal
      title={selectedProduct ? "Edit Product" : "Add Product"}
      open={modalVisible}
      onOk={() => form.submit()}
      onCancel={() => {
        setModalVisible(false);
        setSelectedProduct(null);
        form.resetFields();
      }}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
      >
        <Form.Item
          name="title"
          label="Product Title"
          rules={[{ required: true, message: "Title is required!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="price"
          label="Price"
          rules={[{ required: true, message: "Price is required!" }]}
        >
          <InputNumber style={{ width: '100%' }} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddProductModal;
