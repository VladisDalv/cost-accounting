import "./CostItem.css";

function CostItem () {
    return (
        <div className='cost-item'>
            <div>Дата</div>
            <div className='cost-item__description'>
                <h2>Холодильник</h2>
                <div className='cost-item__price'>Цена</div>
            </div>
        </div>
    );
}

export default CostItem