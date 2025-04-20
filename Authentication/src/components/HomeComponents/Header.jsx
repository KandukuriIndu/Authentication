import React, { useState } from 'react';

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <div className='home-header-parent'>
                <div className='home-heade-sub-parent fixed-top '>
                    <div className="row data-page ">
                        <div className='logo'>
                            <h2>Dashboard</h2>
                        </div>
                        {/* <div className='header-end'>
                            <div className='input-field'>
                                <input type="text" placeholder='Find Goods' />
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </div>
                            <div className='icons-back'>
                                <i class="fa-solid fa-bell"></i>
                                <i class="fa-regular fa-user"></i>
                            </div>
                            <div className='add-button'>
                                <button type="primary" onClick={showModal}>
                                    Open Modal
                                </button>
                             
                            </div>
                        </div> */}
                    </div>
                </div>

            </div>
        </>
    )
}

export default Header