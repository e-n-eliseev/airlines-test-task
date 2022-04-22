import Ticket from "./ticket/Ticket";




const Tickets = () => {
    return (
        <div className="tickets">
            <Ticket />
            <Ticket />
            <button className="tickets__button" >
                Показать еще
            </button>
        </div>
    );
};

export default Tickets;