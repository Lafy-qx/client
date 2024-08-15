import React, { useState } from 'react';
import { Button, Modal, Space } from 'antd';

import '../../../styles/modal.scss'
import { bookingCreateFunc } from '../../../store/booking/BookingActions';
import { useAppDispatch } from '../../../store/hooks/stateHooks';


const ModalForm: React.FC = () => {
    const [inputValue, setInputValue] = useState({ name: '', phone: '', email: '' })
    const dispatch = useAppDispatch();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();


        if (!inputValue.name || !inputValue.phone || !inputValue.email) return;


        // Связь с redux
        dispatch(bookingCreateFunc({
            name: inputValue.name!,
            phone: inputValue.phone!,
            email: inputValue.email!,
        }));
        setInputValue({
            name: "", phone: "", email: ""
        })

        console.log(inputValue)

    };



    const [open, setOpen] = useState(false);

    const showModal = () => {
        setOpen(true);
    };
    const handleOk = () => {
        setOpen(false);
    };

    const handleCancel = () => {
        setOpen(false);
    };
    return (
        <>
            <Space>
                <Button className='buttonModal' onClick={showModal}>
                    Связаться с нами
                </Button>

            </Space>
            <Modal
                open={open}
                title="Title"
                onOk={handleOk}
                onCancel={handleCancel}>

                <div className='modalInfo'><p>Наш менеджер свяжется с вами в ближайшее время!</p></div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Имя
                        <input type="text" value={inputValue.name} onChange={(e) =>
                            setInputValue({ name: e.target.value, phone: inputValue.phone, email: inputValue.email })
                        } />
                    </label>
                    <br />
                    <label htmlFor="phone">Номер телефона
                        <input type="text" value={inputValue.phone} onChange={(e) =>
                            setInputValue({ phone: e.target.value, name: inputValue.name, email: inputValue.email })
                        } />
                    </label>
                    <label htmlFor="email">e-mail
                        <input type="email" value={inputValue.email} onChange={(e) =>
                            setInputValue({ email: e.target.value, name: inputValue.name, phone: inputValue.phone })
                        } /><br />
                    </label>

                    <input className="buttonForm" type="submit" value="Отправить" onChange={() => handleSubmit} />
                </form>
            </Modal>
        </>
    );
};

export default ModalForm;