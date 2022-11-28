import React from 'react';

const AddProducts = () => {
    return (
        <div>
            <h3>Add Product</h3>
            <form>
                <input type="text" placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs" />
                <input type="text" placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs" />
                <input type="text" placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs" />
                <input type="text" placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs" />
            </form>
        </div>
    );
};

export default AddProducts;