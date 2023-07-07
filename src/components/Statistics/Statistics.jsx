import PropTypes from 'prop-types';
import { List, Item } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, percentage }) => {
    const statisticsArray = [
        { statItem: good, title: 'Good' },
        { statItem: neutral, title: 'Neutral' },
        { statItem: bad, title: 'Bad' },
        { statItem: total, title: 'Total' },
        { statItem: percentage, title: 'Positive feedback' },
    ];

    return (
        <List>
            {statisticsArray.map(({ statItem, title }) => (
                <Item>
                    <p>
                        {title}:{' '}
                        <span>
                            {title !== 'Positive feedback' ? statItem : percentage + '%'}
                        </span>
                    </p>
                </Item>
            ))}
        </List>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    percentage: PropTypes.number.isRequired,
};
