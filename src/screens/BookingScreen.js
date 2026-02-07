import {useState} from 'react';
import BookingForm from "../components/bookingScreen/BookingForm";
import ConfirmedBooked from '../components/bookingScreen/ConfirmedBooking';
const BookingScreen = () => {

    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('Birthday');
    const [bookingConfirmed, setBookingConfirmed] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({date, time, guests, occasion});
        setBookingConfirmed(true);
    }
    return(
        <div>
            {bookingConfirmed ? (
                <ConfirmedBooked />
            ) : (
                <BookingForm 
                    setDate={setDate} 
                    setTime={setTime} 
                    setGuests={setGuests} 
                    setOccasion={setOccasion} 
                    handleSubmit={handleSubmit}
                />
            )}
        </div>
    )
}

export default BookingScreen;