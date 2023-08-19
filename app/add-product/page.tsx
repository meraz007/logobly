"use client";
import React, { useState } from 'react';
import Button from "@/components/baseButton";
import AdminLayout from "../../layout/adminLayout";
import Modal from '@/components/baseModal';
import TableHaderData from "@/components/tableHeaderData";

export default function Page() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
        <AdminLayout pageTitle='Stock'>
            <>
            <div className="border p-4 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,24,40,0)]">
            <div className="flex justify-between">
                <div>
                    <h2 className='font-medium text-xl text-[#101828]'>Stock Product List</h2>
                    <p className='font-normal text-sm text-[#667085]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, sint!</p>
                </div>
                <div>
                <button 
                    className="w-full text-medium text-base text-white bg-[#1C64F2] rounded-lg py-3 px-4 flex items-center gap-2"
                    onClick={openModal}
                >   
                    <img src="/svg/plus.svg" alt="" />
                    Add Product
                </button>
                <Modal 
                    isOpen={isModalOpen} 
                    onClose={closeModal}
                >
                    <div className='w-[550px] h-[600px] p-2'>
                        <div className='flex justify-between'>
                            <span>Add Product</span>
                            <button onClick={closeModal}>
                                <img src="/svg/close.svg" alt="" />
                            </button>
                        </div>
                    </div>
                </Modal>
                </div>
            </div>
        <div className="overflow-x-auto mt-4">
            <div className="min-w-full">
                <div className="flex flex-col">
                    <div className="flex flex-row bg-[#EAECF0] font-bold">
                            <TableHaderData columnName="Name">
                                <img src="svg/arrow-down.svg" alt="" />
                            </TableHaderData>

                            <TableHaderData columnName="Product Added">
                                <img src="svg/arrow-down.svg" alt="" />
                            </TableHaderData>

                            <TableHaderData columnName="Stock">
                                <img src="svg/arrow-down.svg" alt="" />
                            </TableHaderData>

                            <TableHaderData columnName="Purchase" />

                            <TableHaderData columnName="Selling" />
                    </div>
  
                    <div className="flex flex-row">
                        <div className="w-1/6 p-4 flex gap-1 items-center">
                            <img src="/img/product_one.png" alt="" />
                            <span className="font-normal text-sm text-[#667085]">MacBook Pro M2</span>
                        </div>
                        <div className="w-1/6 p-4 font-normal text-sm text-[#667085]">Today, 19:40</div>
                        <div className="w-1/6 p-4 flex gap-2 items-center">
                            <span className="font-normal text-sm text-[#667085]">64</span>
                            <span className="border py-1.5 px-3 rounded-lg border-[#F2F4F7] font-medium text-xs text-[#175CD3]">12 Left</span>
                        </div>
                        <div className="w-1/6 p-4 font-normal text-sm text-[#667085]">$12,000.00</div>
                        <div className="w-1/6 p-4 font-normal text-sm text-[#667085]">$1,300.00</div>
                        <div className="w-1/6 p-4 flex gap-12">
                            <button>
                                <img src="/svg/trash.svg" alt="trash icon" />
                            </button>
                            <button>
                                <img src="/svg/edit.svg" alt="edit icon" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
        </AdminLayout>
        </>
    )
}