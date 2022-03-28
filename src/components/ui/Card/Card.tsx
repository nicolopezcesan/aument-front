import { getImagePath } from '../../../utils/images';
import { getFormatDate } from '../../../utils/dates';
import Chip from '../Chip/Chip';
import { IPost } from '../../../services/PostService';
import './styles.css';

export const LG_SIZE = 'lg';
export const SM_SIZE = 'sm';

export interface ICardProps extends IPost {
  size?: typeof LG_SIZE | typeof SM_SIZE;
}

const Card = (props: ICardProps) => {

  const { image, title, date, tag, _id, size = LG_SIZE } = props;

  const imageSrc = getImagePath(image);
  const formattedDate = getFormatDate(date);

  const isLargeSize = () => {
    return (size === LG_SIZE);
  }

  const titleClass = isLargeSize() ? 'lg-title' : 'title';
  const cardClass = isLargeSize() ? 'lg-card' : 'card';

  return (
    <div className={cardClass} id={_id}>
      <div className='container'>
        <img className='image' src={imageSrc} alt={props.image} />
        <div className='head'>
          <Chip label={tag.label} color={tag.color} />
          <label className='date'>
            {formattedDate}
          </label>
        </div>
        <p className={titleClass}>{title}</p>
      </div>
    </div>
  );
}

export default Card;