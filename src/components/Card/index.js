import Single from '../../assets/single.PNG'
import Group from '../../assets/group.PNG'

const Card = ({ heading, description, cardSelected, name, changeCard }) => {
    return (
        <div className='cardWrap' onClick={()=>{changeCard(name)}}
            style={{ marginRight: heading.includes('myself') && '2rem', cursor: 'pointer', borderColor: cardSelected===name && '#664DE5'}}>
            <img src={heading.includes('myself') ? Single : Group} alt='NA' className='card-logo' />
            <h6 className='for-heading'>{heading}</h6>
            <p className='card-desc'>{description}</p>
        </div>
    )
}

export default Card
