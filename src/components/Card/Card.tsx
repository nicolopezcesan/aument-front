import moment from 'moment';
import { getImagePath } from '../../utils/images';
import Chip from '../Chip/Chip';
import './styles.css';

interface IProps {
  image: string
  title: string
  date: string
  tag: string
}

const Card = (props: IProps) => {

  const { image, title, date, tag, } = props;

  const imageSrc = getImagePath(image);

  return (
    <div className='card'>
      <div className='container'>
        <img className='image' src={imageSrc} alt={props.image} />
        <div className='head'>
          <Chip label={tag} />
          <label className='date'>
            {moment(date).format('LL')}
          </label>
        </div>
        <p className='title'>{title}</p>
      </div>
    </div>
  );
}

export default Card;