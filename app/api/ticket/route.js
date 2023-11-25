import {Ticket} from '../../../models/Ticket';


export const buy_ticket = async (req, res) => {
      const {
    passengerName,
    passengerEmail,
    departureCity,
    arrivalCity,
    departureDate,
    seatNumber,
    totalPrice,
    paymentMethod,
    user,
  } = req.body;

  Ticket.create({
    passengerName,
    passengerEmail,
    departureCity,
    arrivalCity,
    departureDate,
    seatNumber,
    totalPrice,
    paymentMethod,
    user,
  })
    .then((ticket) => {
      res.status(201).json({
        ticket,
      });
    })
    .catch((err) => {
      res.status(400).json({
        error: err,
      });
    });
}

export const get_ticket = async (req, res) => {
    const { id } = req.params;
    
    try {
        const ticket = await Ticket.findById(id);
    
        res.status(200).json({
        message: "Ticket encontrado com sucesso",
        ticket,
        });
    } catch (err) {
        res.status(400).json({
        error: err,
        });
    }
}

export const get_all_tickets = async (req, res) => {
    try {
        const tickets = await Ticket.find();
    
        res.status(200).json({
        message: "Tickets encontrados com sucesso",
        tickets,
        });
    } catch (err) {
        res.status(400).json({
        error: err,
        });
    }
}
