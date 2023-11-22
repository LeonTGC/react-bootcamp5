import './BbcSport.css'
import football1 from '../images/football1.jpg'
import football2 from '../images/football2.jpg'
import football3 from '../images/football3.jpg'

const BbcSport = () => {
    return (
        <div className='border-blue'>
            <Card 
                image={football1}
                heading='Manchester United start alumni program'
                />
            <Card 
                image={football2}
                heading='Manchester United start alumni program'
                />
            <Card 
                heading='Manchester United start alumni program'
                image={football3}
            />
        </div>
    )
}

const Card = ({ image, heading })  => {
    return (
        <div className='border-red'>
            <img src={image} />
            <h2>{heading}</h2>
        </div>
    )
}
export default BbcSport