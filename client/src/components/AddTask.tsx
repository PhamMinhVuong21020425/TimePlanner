import { useState } from 'react';
import Modal from './Modal';

type Props = {
    option: string;
};

export default function AddTask({ option }: Props) {
    return (
        <div>
            <Modal isVisible={option === 'AddTask'} />
        </div>
    );
}
