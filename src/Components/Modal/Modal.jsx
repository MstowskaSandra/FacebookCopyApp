import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeModal } from '../../Redux/Slices/modalSlice';
import PostDetails from './Components/PostDetails/PostDetails';

const Modal = () => {
    const dispatch = useDispatch();
    const { isOpen, modalData, modalType } = useSelector(state => state.modal);

  if (!isOpen) return null;
  return (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4'>
            <div className='relative bg-white p-6 rounded-3xl shadow-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto'>
                <button 
                  onClick={() => dispatch(closeModal())} 
                  className='absolute top-4 right-4 text-2xl text-gray-500 hover:text-gray-700'>x</button>
                
                {modalType === 'postDetails' && modalData && (
                    <PostDetails post={modalData.post} author={modalData.author} />   
                )}
            </div>
        </div>
    );
};

export default Modal;