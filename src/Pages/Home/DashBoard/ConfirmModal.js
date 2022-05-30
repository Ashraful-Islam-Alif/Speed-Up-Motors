import React from 'react';

const ConfirmModal = () => {
    return (

        <>
            <input type="checkbox" id="cancel-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="cancel-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-lg font-bold">Congratulations random Interner user!</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                </div>
            </div>
        </>

    );
};

export default ConfirmModal;